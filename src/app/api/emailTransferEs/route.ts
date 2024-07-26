import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const {
    emailContact,
    fullName,
    text,
    fromDate,
    toDate,
    transferInfo,
    flightNumber,
    phone,
  } = await request.json();
  const htmlMessage = `
  <h2>Detalles del traslado</h2>
  <ul>
    <li><strong>Nombre Completo:</strong> ${fullName}</li>
    <li><strong>Traslado solicitado:</strong> ${transferInfo}</li>
    <li><strong>Fecha de arrivo:</strong> ${fromDate}</li>
    <li><strong>Fecha de partida:</strong> ${toDate}</li>
    <li><strong>Numero de vuelo:</strong> ${flightNumber}</li>
    <li><strong>Teléfono de contacto:</strong> ${phone}</li>
    <li><strong>Email:</strong> ${emailContact}</li>
    <li><strong>Notas adicionales:</strong> ${text}</li>
  </ul>
`;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:

      host: "smtp.gmail.com",
      port: 465,
      secure: true

      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: 'Contacto', //process.env.MY_EMAIL,
    to: 'receptivos@grupoelis.com.uy',
    cc: emailContact,
    subject: `Mensaje de ${fullName} - Se solicita un traslado`,
    //text: message,
    html: htmlMessage,
    replyTo: emailContact,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Mensaje enviado' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

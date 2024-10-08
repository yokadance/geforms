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
    payment,
    country,
  } = await request.json();
  const htmlMessage = `
  <h2>Transfer Request Details</h2>
  <ul>
    <li><strong>Full Name:</strong> ${fullName}</li>
    <li><strong>Transfer Info:</strong> ${transferInfo}</li>
    <li><strong>Arrival Date:</strong> ${fromDate}</li>
    <li><strong>Departure Date:</strong> ${toDate}</li>
    <li><strong>Flight Number:</strong> ${flightNumber}</li>
    <li><strong>Phone:</strong> ${phone}</li>
    <li><strong>Email:</strong> ${emailContact}</li>
    <li><strong>Payment:</strong> ${payment}</li>
    <li><strong>Country:</strong> ${country}</li>
    <li><strong>Additional Notes:</strong> ${text}</li>
  </ul>
  Dear Sir/Madam, We have received your message. A sales agent will be in touch with you shortly.
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
    subject: `[SUMMIT ENERGY] -  Message from ${fullName} - Transfer Contact`,
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
    return NextResponse.json({
      message:
        'Email sent. One of our sales representatives will contact you shortly. Please remember that the cost is per person',
    });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

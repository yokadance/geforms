import { FormDataTransfer } from "@/app/components/transferForm";


export function sendEmailtransfer(data: FormDataTransfer) {
  const apiEndpoint = '/api/emailTransfer';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
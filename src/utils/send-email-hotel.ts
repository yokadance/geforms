import { FormDataHotel } from "@/app/components/hotelForm";


export function sendEmailHotel(data: FormDataHotel) {
  const apiEndpoint = '/api/emailHotel';

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
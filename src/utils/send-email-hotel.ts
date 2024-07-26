import Swal from 'sweetalert2';

import { FormDataHotel } from '@/app/components/hotelFormEn';
import { FormDataHotelEs } from '@/app/components/hotelFormEs';

export function sendEmailHotelEn(data: FormDataHotel) {
  const apiEndpoint = '/api/emailHotelEn';

  Swal.fire({
    title: 'Loading...',
    text: 'Please wait while we process your request.',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      Swal.fire({
        title: 'Success!',
        text: response.message,
        icon: 'success',
        confirmButtonText: 'OK',
      }); /* .then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/';
        }
      }); */
    })
    .catch(() => {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    });
}

export function sendEmailHotelEs(data: FormDataHotelEs) {
  const apiEndpoint = '/api/emailHotelEs';

  Swal.fire({
    title: 'Cargando...',
    text: 'Espere, estamos enviando su mensaje.',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      Swal.fire({
        title: 'Correcto!',
        text: response.message,
        icon: 'success',
        confirmButtonText: 'OK',
      }); /* .then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/';
        }
      }); */
    })
    .catch(() => {
      Swal.fire({
        title: 'Error!',
        text: 'Algo ha fallado. Por favor intente después.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    });
}

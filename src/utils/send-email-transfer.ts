import Swal from 'sweetalert2';

import { FormDataTransferEn } from '@/app/components/transferFormEn';
import { FormDataTransferEs } from '@/app/components/transferFormEs';

export function sendEmailtransferEn(data: FormDataTransferEn) {
  const apiEndpoint = '/api/emailTransferEn';

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

export function sendEmailtransferEs(data: FormDataTransferEs) {
  const apiEndpoint = '/api/emailTransferEs';

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

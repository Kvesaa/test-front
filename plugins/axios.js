// export default function({ $axios, store }) {
//     $axios.onError(error => {
//         if (error.responese.status === 422) {
//             store.dispatch('validation/setErrors', error.responese.data.error);
//         }

//         return Promise.reject(error);
//     });

//     $axios.onRequest(() => {
//         store.dispatch('validation/clearErrors');
//     });
// }


// plugins/axios.js
export default function ({ $axios }) {
    // Interceptor to handle server errors
    $axios.onError((error) => {
      const code = parseInt(error.response && error.response.status);
      if (code === 404) {
        // Handle 404 errors
        console.error('API endpoint not found.');
      } else {
        // Handle other errors
        console.error('An error occurred while making an API request:', error.message);
      }
      return Promise.reject(error);
    });
  }
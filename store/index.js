// export const state = () => ({
//     errors: {}
//   });
  
//   export const getters = {
//     errors(state) {
//       return state.errors;
//     }
//   };
  
//   export const mutations = {
//     SET_VALIDATION_ERRORS(state, errors) {
//       state.errors = errors;
//     }
//   };
  
//   export const actions = {
//     setErrors({ commit }, errors) {
//       commit('SET_VALIDATION_ERRORS', errors);
//     },
//     clearErrors({ commit }) {
//       commit('SET_VALIDATION_ERRORS', {});
//     }
// };


// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000/', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
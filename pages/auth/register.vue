<template>
    <div class="container">
      <div class="col-md-6 offset-md-3">
        <div class="card mt-4">
          <div class="card-header">
            <p class="mb-0">Register</p>
        </div>
        <div class="card-body">
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <label>KorisnickoIme</label>
              <input v-model="form.username" type="text" class="form-control" :class="{ 'is-invalid': errors.username }" placeholder="KorisnickoIme" >
              <div class="invalid-feedback" v-if="errors.username">
                {{ errors.username[0] }}
              </div>
            </div>
            <div class="form-group">
              <label>Ime</label>
              <input v-model="form.name" type="text" class="form-control" :class="{ 'is-invalid': errors.name }" placeholder="Ime" >
              <div class="invalid-feedback" v-if="errors.name">
                {{ errors.name[0] }}
              </div>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input v-model="form.email" type="email" class="form-control" :class="{ 'is-invalid': errors.email }" placeholder="primjer.test@gmail.com" >
              <div class="invalid-feedback" v-if="errors.email">
                {{ errors.email[0] }}
              </div>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input v-model="form.password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" placeholder="Password" >
              <div class="invalid-feedback" v-if="errors.password">
                {{ errors.password[0] }}
              </div>
            </div>
            <div class="form-group">
              <input type="submit" value="Register" class="btn btn-default w-100">
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        name: '',
        email: '',
        password: '',
        role_id: 1,
      }
    }
  },
  methods: {
    async registerUser() {

      try {
        
          console.log (this.form);
          const response = await this.$axios.post('/users', this.form);
          if (response.status != 200) {
          console.log(response.data);

          this.$router.push({ name: 'index' });
        }
        else {
          alert(response.data.message);
        }
        
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>
<template>
  <div class="container">
    <div class="col-md-6 offset-md-3">
      <div class="card mt-4">
        <div class="card-header">
          <p class="mb-0">Login</p>
      </div>
      <div class="card-body">
        <form @submit.prevent="loginUser">
          <div class="form-group">
            <label>KorisnickoIme</label>
            <input v-model="form.username" type="text" class="form-control" :class="{ 'is-invalid': errors.username }" placeholder="KorisnickoIme" required>
            <div class="invalid-feedback" v-if="errors.username">
              {{ errors.username[0] }}
            </div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input v-model="form.password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" placeholder="Password" required>
            <div class="invalid-feedback" v-if="errors.password">
              {{ errors.password[0] }}
            </div>
          </div>
          <div class="form-group">
            <input type="submit" value="Login" class="btn btn-default w-100">
          </div>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logout from './logout.vue';

export default {
data() {
  return {
    form: {
      username: '',
      password: '',
    }
  }
},
methods: {
  async loginUser() {
  try {
    const response = await this.$axios.post('/login', this.form);
    console.log(response.data.token);
    this.$auth.strategy.token.set(response.data.token)

    this.$router.push({ name: 'index' });
  } catch (error) {
    console.error(error);
  }
},
},
}
</script>
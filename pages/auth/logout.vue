<template>
    <div class="form-group">
    <button @click="logoutUser" class="btn btn-default w-100">Logout</button>
    </div>
</template>

<script>
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
            this.$auth.strategy.token.set(response.data.token);
            this.$router.push({ name: 'index' });
        } catch (error) {
            console.error(error);
        }
    },
    logoutUser() {
        this.$auth.strategy.token.reset();
        this.$router.push({ name: 'index' });
    }
},
}

</script>


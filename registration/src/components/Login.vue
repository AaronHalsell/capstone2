<script>
    import axios from 'axios'
    import { RouterLink } from 'vue-router';

    export default {
        name: 'login-view',
        components: RouterLink,
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async handleSubmit() {
                const response = await axios.post('http://localhost:4002/api/login', {
                    email: this.email,
                    password: this.password
                });

                localStorage.setItem('token', response.data.token)
                localStorage.setItem('userId', response.data.user.id )
                this.$router.push('/');
            }
        }
    }

</script>

<template>

<div class="grid md:grid-cols-2 h-screen ">
    <div class='graphic hidden md:block'>
    </div>
    <div class="mt-7 p-4 md:space-y-36 space-y-20 flex flex-col content-center flex-wrap">
        <img alt="school logo" class="logo" src="../../public/img/logo.png" width="300"/>
        <div class="space-y-7 lg:w-3/5 w-5/6">
            <h3 class="text-4xl">Create Account</h3>
            <form @submit.prevent="handleSubmit" class="space-y-5">
                <div>
                    <input type="email" v-model="email" placeholder="Email" class="w-full border-solid border-2 rounded-md p-2 border-gray md:text-lg" required />
                </div>
                <div>
                    <input type="password" v-model="password" placeholder="Password" class="w-full border-solid border-2 rounded-md p-2 border-gray md:text-lg" required />
                </div>
                <button class="w-full btn bg-primary hover:bg-secondary text-[#fff] rounded-md p-2 md:text-lg">Log In</button>
            </form>
            <p class="md:text-lg">Don't have an account? <RouterLink to="/register" class="underline font-bold">Create an account</RouterLink></p>
        </div>
    </div>
</div>

</template>

<style>
    .graphic {
        background-image: url('../../public/img/graphic.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>

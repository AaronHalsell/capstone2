<script>
    import axios from 'axios'

    export default {
        name: 'register-view',
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                password_confirm: '',
                country: '',
                city: '',
                postalCode: '',
                district: '',
                telephone: '',
                address: '',
                address2: '',
                isActive: false
            }
        },
        methods: {
            async handleSubmit() {
                await axios.post('http://localhost:4002/api/signup', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    country: this.country,
                    city: this.city,
                    postalCode: this.postalCode,
                    district: this.district,
                    telephone: this.telephone,
                    address: this.address,
                    address2: this.address2
                });

                this.$router.push('/login')
            }
        }
    }
</script>

<template>
<div class="grid md:grid-cols-2 h-screen ">
    <!-- <div 
        class="graphic md:block duration-1000 transition"
        v-bind:class="{ 'translate-x-full': !isActive, 'hidden': isActive }" 
    ></div> -->
    <div 
        class="mt-7 p-4 md:space-y-36 space-y-20 flex flex-col content-center flex-wrap duration-1000 transition" 
    >  
    <img alt="school logo" class="logo" src="../../public/img/logo.png" width="300"/>
        <div class="space-y-7 lg:w-3/5 w-5/6">
            <h3 class="text-4xl">Create Account</h3>
            <form @submit.prevent="handleSubmit" class="space-y-5">
                <div class='flex justify-between'>
                    <input type="text" v-model="firstName" placeholder="First Name" class="w-full border-solid border-2 rounded-md p-2 border-gray md:text-lg" required />
                    <input type="text" v-model="lastName" placeholder="Last Name" class="w-full border-solid border-2 rounded-md p-2 border-gray md:text-lg" required />
                </div>
                <div>
                    <input type="email" v-model="email" placeholder="Email" class="w-full border-solid border-2 rounded-md p-2 border-gray md:text-lg" required />
                </div>
                <div>
                    <input type="password" v-model="password" placeholder="Password" class="w-full border-solid border-2 rounded-md p-2 border-gray md:text-lg" required/>
                </div>
                <div>
                    <input type="password" v-model="password_confirm" placeholder="Confirm Password" class="w-full border-solid border-2 rounded-md p-2 border-gray md:text-lg" required />
                </div>
                <span @click="isActive = !isActive" class="w-full btn bg-primary hover:bg-secondary text-[#fff] rounded-md p-2 md:text-lg">Sign Up</span>
                <div class='space-y-5'>
                    <div>
                        <input type="text" v-model="telephone" placeholder="Telephone" class="w-full border-solid border-2 rounded-md p-2 border-gray md:text-lg" required/>
                    </div>
                    <div>
                        <input type="text" v-model="address" placeholder="Address" class="w-full border-solid border-2 rounded-md p-2 border-gray md:text-lg" required />
                    </div>
                    <div>
                        <input type="text" v-model="address2" placeholder="Address 2 (Optional)" class="w-full border-solid border-2 rounded-md p-2 border-gray md:text-lg" />
                    </div>
                    <div class='flex justify-between'>
                        <input type="text" v-model="city" placeholder="City" class="w-full border-solid border-2 rounded-md p-2 border-gray md:text-lg" required />
                        <input type="select" v-model="district" placeholder="District (State)" class="border-solid border-2 rounded-md p-2 border-gray md:text-lg" required />
                    </div>
                    <div class='flex justify-between'>
                        <input type="text" v-model="country" placeholder="Country" class="w-full border-solid border-2 rounded-md p-2 border-gray md:text-lg" required/>
                        <input type="text" v-model="postalCode" placeholder="Postal Code (Zip)" class="w-full border-solid border-2 rounded-md p-2 border-gray md:text-lg" required />
                    </div>
                    <button class="w-full btn bg-primary hover:bg-secondary text-[#fff] rounded-md p-2 md:text-lg">Sign Up</button>
                </div>
            </form>
        <p class="md:text-lg">Already have an Account? <RouterLink to="/login" class="underline font-bold">Log in</RouterLink></p>
    </div>
    </div>
    <div 
        class="graphic md:block duration-1000 transition"
        v-bind:class="{ 'order-first': isActive }" 
    ></div>
    <!-- v-bind:class="{ 'translate-x-full'}: isActive"  // this is mimics an animation but does not switch -->
</div>
</template>

<style>
    .graphic {
        background-image: url('../../public/img/graphic.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
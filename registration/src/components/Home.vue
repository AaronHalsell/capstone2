<script>
    import { RouterLink } from 'vue-router'

    export default {
        name: 'home-view',
        props: {
            user: Object
        }
    }

</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
    </nav>
    <h3 v-if="user">Hi {{ user.firstname }} {{ user.lastname }}</h3>
    <h3 v-if="!user">You are not logged in!</h3>
</template>

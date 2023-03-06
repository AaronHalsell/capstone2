<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'

export default {
  name: 'app-view',
  components: {
    RouterView
  },
  data() {
            return {
                userId: localStorage.getItem('userId'),
                user: null
            }
        },
        async created() {
            axios.get(`http://localhost:4002/api/users/${this.userId}`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then(response => (this.user = response.data))
        }
  }

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>

      </nav>
    </div>
  </header>

  <RouterView :user='user' />
</template>

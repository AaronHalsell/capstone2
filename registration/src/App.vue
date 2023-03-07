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
    <div class="wrapper">

    </div>
  </header>

  <RouterView :user='user' />
</template>

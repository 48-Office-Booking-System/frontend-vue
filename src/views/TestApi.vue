<template>
  <v-app>
    <Navbar/>
  </v-app>
</template>

<script>
import Navbar from "../components/NavBarUser.vue"
import axios from 'axios'
export default {
    name: 'TestApi',
    components: {
        Navbar
    },
    async mounted() {
        this.initialize()
    },
    methods: {
        async loadDataOffices() {
        const response = await axios.get(`http://34.207.166.213/user/all`)
        console.log(response.data.data)
        },
        initialize() {
        this.loadDataOffices()
        }
    }
        
}
</script>

<style>

</style>

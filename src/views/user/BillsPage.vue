<template>
  <v-app>
    <Navbar/>
    <div class="text-center mt-16">
        <h1>Bills Page</h1>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/NavBarUser.vue"
export default {
    name: 'BillsPage',
    components: {
        Navbar
    }

}
</script>

<style>

</style>
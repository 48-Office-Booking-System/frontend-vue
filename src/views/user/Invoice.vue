<template>
  <v-app>
    <Navbar/>
    <div class="text-center mt-16">
        <h1>Invoice</h1>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/NavBarUser.vue"
export default {
    name: 'Invoice',
    components: {
        Navbar
    }

}
</script>

<style>

</style>
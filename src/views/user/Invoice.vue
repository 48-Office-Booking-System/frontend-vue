<template>
  <v-app>
    <Navbar/>
    <Chat />
    <div class="text-center mt-16">
        <h1>Invoice</h1>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/NavBarUser.vue"
import Chat from "@/components/Chat.vue"
export default {
    name: 'Invoice',
    components: {
        Navbar,
        Chat
    }

}
</script>

<style>

</style>
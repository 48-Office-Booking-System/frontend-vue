<template>
  <v-app>
    <Sidebar/>

    <div class="content">
      <v-app-bar app color="#8898CC" dark flat>
        <div class="title">
          CS Live Chat
        </div>
      </v-app-bar>
    </div>
  </v-app>
</template>

<script>
import Sidebar from "@/components/SideBarAdmin.vue"
export default {
    name: 'Chat',
    components: {
        Sidebar
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
  .content-1{
    margin-top: 100px;
    
  }
</style>
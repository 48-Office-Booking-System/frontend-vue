<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app permanent>

    <v-list-item>
        <v-list-item-content>
        <div class="text-center mt-4">
            <img src="../../assets/kobaspace.png" alt="">
        </div>
        </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
      <div class="title mt-4">
          Menu
      </div>
      </v-list-item-content>
    </v-list-item>


    <v-list
        nav
    >
        <v-list-item
        v-for="item in itemsDrawer"
        :key="item.title"
        :to="item.to"
        link
        >
        <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
        </v-list-item>
    </v-list>
    <v-list-item class="mt-4">
      <v-list-item-content>
        <v-btn large outlined color="red">
          <v-icon class="mr-4">
            mdi-logout
          </v-icon>
          Logout
        </v-btn>
      </v-list-item-content>
    </v-list-item>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
    name: 'DataTransactions',
    data() {
      return {
        drawer: false,
        itemsDrawer: [
          { title: 'Offices', icon: 'mdi-city', to:'/admin/dataoffices' },
          { title: 'Customers', icon: 'mdi-account-multiple', to:'/admin/datacustomers' },
          { title: 'Reviews', icon: 'mdi-pencil', to:'/admin/datareviews' },
          { title: 'Chat', icon: 'mdi-message-text', to:'/admin/chat' },
          { title: 'Bookings', icon: 'mdi-calendar', to:'/admin/bookings' },
          { title: 'Transactions', icon: 'mdi-swap-horizontal', to:'/admin/datatransactions' },
        ],
      }
    }
}
</script>

<style>

</style>
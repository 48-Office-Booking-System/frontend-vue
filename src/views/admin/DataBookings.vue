<template>
  <v-app>
    <Sidebar/>
    <v-card width="75%" class="ml-auto mr-10 mb-4" flat>
      <v-card-title class="headline font-weight-bold">
          Manage Bookings
          <v-spacer></v-spacer>
          <v-avatar color="orange darken-3">
            <v-icon dark>
              mdi-account
            </v-icon>
          </v-avatar>
    
        </v-card-title>
    </v-card>

    <template>
    <v-card width="75%" class="ml-auto mr-10 pt-2">
      <v-data-table
        :headers="headers"
        :items="bookings"
        :search="search"
        :footer-props="{
          'items-per-page-options': [10, 15, 20]
        }"
        sort-by="id"
      >
               <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search Booking"
            single-line
            hide-details
            dense
            filled
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            
          </v-toolbar>
        </template>
        <template v-slot:[`item.status_id`]="{ item }">
          <v-btn
           v-if="item.status_id == 1"
           outlined
           small
           color="yellow"
          >
            Pending
          </v-btn>
          <v-btn
           v-else-if="item.status_id == 2"
           outlined
           small
           color="green"
          >
            Success
          </v-btn>
          <v-btn
           v-else
           outlined
           small
           color="red"
          >
            Fail
          </v-btn>

        </template>
      </v-data-table>
    </v-card>  
    </template>
  </v-app>
</template>

<script>
import Sidebar from "@/components/SideBarAdmin.vue"
import axios from 'axios'
export default {
    name: 'Bookings',
    components: {
        Sidebar
    },
    data() {
        return {
         
          search: '',
          
          
          headers: [
            {
              text: 'ID',
              align: 'start',
              value: 'id',
              filterable: true,
            },
            { text: 'Name', value: 'user.name' },
            { text: 'Total Harga', value: 'total_price' },
            { text: 'Nama Gedung', value: 'office.name' },
            { text: 'Date', value: 'start_hour' },
            { text: 'Status', value: 'status_id', sortable: false },
          ],
          bookings: [],
          
        }     
    },
    
    async mounted() {
      this.initialize()
    },
    methods: {
      async loadDataCustomers() {
        const response = await axios.get(`http://34.207.166.213/booking/all?status_id=2`)
        this.bookings = response.data.data
      },
      initialize () {
        this.loadDataCustomers()
      },

    },    
}
</script>

<style>

</style>
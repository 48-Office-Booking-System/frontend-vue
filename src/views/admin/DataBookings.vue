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
            <v-dialog
              v-model="dialog"
              max-width="700px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  hidden
                  disabled
                >
                  New Booking
                </v-btn>
              </template>
              <v-card class="pa-4">
                <v-card-title>
                  <span class="headline font-weight-medium">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="editedItem.name"
                          label="Name"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="editedItem.price"
                          label="Price"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="editedItem.office"
                          label="Office Name"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="editedItem.date"
                          label="Date"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="editedItem.time"
                          label="Time"
                        ></v-text-field>
                      </v-col>
                      
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="#121950"
                    outlined
                    @click="close"
                    width="150"
                    class="mr-4"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="#121950"
                    dark
                    @click="save"
                    width="150"
                  >
                    Save
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card
               class="pa-4"
              >
                <v-card-title>
                  Delete Booking
                </v-card-title>
                <v-card-text class="subtitle-2 mt-4">
                  Are you sure to delete this booking ?
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary darken-4" width="150" class="mr-4" outlined @click="closeDelete">Cancel</v-btn>
                  <v-btn color="primary darken-4" width="150" dark  @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
           
            class="mr-2"
            @click="editItem(item)"
            color="primary"
          >
            mdi-pencil-circle
          </v-icon>
          <v-icon
            
            @click="deleteItem(item)"
            color="red"
          >
            mdi-delete-circle
          </v-icon>
        </template>
      </v-data-table>
    </v-card>  
    </template>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Bookings',
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
          search: '',
          dialog: false,
          dialogDelete: false,
          headers: [
            {
              text: 'ID',
              align: 'start',
              sortable: false,
              filterable: false,
              value: 'id',
            },
            { text: 'Name', value: 'user.name' },
            { text: 'Price', value: 'office.price' },
            { text: 'Office', value: 'office.name' },
            { text: 'Date Time Start', value: 'start' },
            { text: 'Date Time End', value: 'end' },
            { text: 'Actions', value: 'actions', sortable: false },
          ],
          bookings: [],
          editedIndex: -1,
          editedItem: {
            id: 0,
            name: '',
            price: 0,
            office: '',
            date: '',
            time: ''
          },
          defaultItem: {
            id: 0,
            name: '',
            price: 0,
            office: '',
            date: '',
            time: ''
          },
        }     
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Booking'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    async mounted() {
      this.initialize()
    },
    methods: {
      async loadDataCustomers() {
        const response = await axios.get(`http://localhost:3000/bookings`)
        this.bookings = response.data
        console.log(this.bookings)
      },
      initialize () {
        this.loadDataCustomers()
      },

      editItem (item) {
        this.editedIndex = this.bookings.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.bookings.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.bookings.splice(this.editedIndex, 1)
        axios.delete(`http://localhost:3000/bookings/`+this.editedItem.id
        ).then(response=>{
          console.log(response)
        })
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
        this.initialize()
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          axios.put(`http://localhost:3000/bookings/`+this.editedItem.id, {
            name: this.editedItem.name,
            price: this.editedItem.price,
            office: this.editedItem.office,
            date: this.editedItem.date,
            time: this.editedItem.time

          }).then(response=>{
            console.log(response)
          })
          Object.assign(this.bookings[this.editedIndex], this.editedItem)
        } else {
          axios.post(`http://localhost:3000/bookings`, {
            name: this.editedItem.name,
            price: this.editedItem.price,
            office: this.editedItem.office,
            date: this.editedItem.date,
            time: this.editedItem.time
          }).then(response=>{
            console.log(response)
          })
          this.bookings.push(this.editedItem)
        }
        this.close()
      },
    },    
}
</script>

<style>

</style>
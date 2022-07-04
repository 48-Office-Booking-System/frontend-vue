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
          Manage Customers
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
        :items="customers"
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
            label="Search Customer"
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
              max-width="500px"
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
                  New Customer
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
                          label="Customer name"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="editedItem.email"
                          label="Email"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="editedItem.number"
                          label="Phone Number"
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
                  Delete Customer
                </v-card-title>
                <v-card-text class="subtitle-2 mt-4">
                  Are you sure to delete this customer ?
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
    name: 'DataCustomers',
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
              text: 'Id',
              align: 'start',
              sortable: false,
              filterable: false,
              value: 'id',
            },
            { text: 'Name', value: 'name' },
            { text: 'Email', value: 'email' },
            { text: 'Phone Number', value: 'number' },
            { text: 'Actions', value: 'actions', sortable: false },
          ],
          customers: [],
          editedIndex: -1,
          editedItem: {
            id: 0,
            name: '',
            email: '',
            number: '',
          },
          defaultItem: {
            id: 0,
            name: '',
            email: '',
            number: '',
          },
        }     
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Customer'
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
        const response = await axios.get(`http://localhost:3000/customers`)
        this.customers = response.data
      },
      initialize () {
        this.loadDataCustomers()
      },

      editItem (item) {
        this.editedIndex = this.customers.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.customers.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.customers.splice(this.editedIndex, 1)
        axios.delete(`http://localhost:3000/customers/`+this.editedItem.id
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
          axios.put(`http://localhost:3000/customers/`+this.editedItem.id, {
            name: this.editedItem.name,
            email: this.editedItem.email,
            number: this.editedItem.number,

          }).then(response=>{
            console.log(response)
          })
          Object.assign(this.customers[this.editedIndex], this.editedItem)
        } else {
          axios.post(`http://localhost:3000/customers`, {
            name: this.editedItem.name,
            email: this.editedItem.email,
            number: this.editedItem.number,
          }).then(response=>{
            console.log(response)
          })
          this.customers.push(this.editedItem)
        }
        this.close()
      },
    },    
}
</script>

<style>

</style>
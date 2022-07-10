<template>
  <v-app>
    <Sidebar/>

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
import Sidebar from "@/components/SideBarAdmin.vue"
import axios from 'axios'
export default {
    name: 'DataCustomers',
    components: {
        Sidebar
    },
    data() {
        return {
          
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
        const response = await axios.get(`http://34.207.166.213/user/all?role_id=1`)
        this.customers = response.data.data
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
        axios.delete(`http://34.207.166.213/user/`+this.editedItem.id
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
        this.initialize()
      },

      save () {
        if (this.editedIndex > -1) {
          axios.put(`http://34.207.166.213/user/`+this.editedItem.id, {
            name: this.editedItem.name,
            email: this.editedItem.email,
            number: this.editedItem.number,

          }).then(response=>{
            console.log(response)
          })
          Object.assign(this.customers[this.editedIndex], this.editedItem)
        } else {
          axios.post(`http://34.207.166.213/user`, {
            name: this.editedItem.name,
            email: this.editedItem.email,
            number: this.editedItem.number,
            role_id: 1
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
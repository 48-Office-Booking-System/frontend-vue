<template>
  <v-app>
    <!-- <SideBar/> -->

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


    
    <v-card width="80%" class="ml-auto mb-4" flat>
      <v-card-title class="headline font-weight-bold">
          Manage Offices
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            filled
            rounded
          ></v-text-field>
          <v-divider
          class="mx-4"
          inset
          vertical
          ></v-divider>
          <v-avatar color="orange darken-3">
            <v-icon dark>
              mdi-account
            </v-icon>
          </v-avatar>
    
        </v-card-title>
    </v-card>
    <template>
      <v-card width="80%" class="ml-auto pt-2">
        <v-data-table
            :headers="headers"
            :items="offices"
            :search="search"
            :footer-props="{
              'items-per-page-options': [10, 15, 20]
            }"
            sort-by="id"
            class="elevation-0"
        >
            <template v-slot:top>
            <v-toolbar
                flat
            >
                <v-spacer></v-spacer>
                <v-dialog
                v-model="dialog"
                max-width="1000px"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                    large
                    >
                    Add Office
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                    
                    </v-card-title>

                    <v-card-text>
                    <v-container>
                        <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.name"
                            label="Office name"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.location"
                            label="Location"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.price"
                            label="Price"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.kursi_min"
                            label="Min capacity"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.kursi_max"
                            label="Max capacity"
                            ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                        >
                          <v-textarea
                            
                            label="Description"
                            v-model="editedItem.description"
                          ></v-textarea>
                        </v-col>
                        </v-row>
                    </v-container>
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                    >
                        Save
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                    <v-card-title class="text-h6">Are you sure you want to delete this office?</v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
                </v-dialog>



                <v-dialog v-model="dialogView" max-width="800px">
                
                  <v-card>
                    <v-img
                      height="350"
                      :src="editedItem.photo"
                    ></v-img>

                    <v-card-title>{{ editedItem.name }}</v-card-title>

                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0"
                      >
                        <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                        ></v-rating>

                        <div class="grey--text ms-4">
                          4.5
                        </div>
                      </v-row>

                      <div class="my-4 text-subtitle-1">
                        {{ editedItem.location }}
                      </div>

                      <div>{{ editedItem.description }}</div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Rp. {{ editedItem.price }},-</v-card-title>

                    <v-card-text>
                      Capacity : {{ editedItem.kursi_min }} - {{editedItem.kursi_max}}
                    </v-card-text>
                    
                    <v-card-text>
                      Created by: {{ createdBy }}
                    </v-card-text>

                    <v-card-actions>
                      <v-btn
                        block
                        color="primary"
                        @click="closeView"
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
            </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon
               @click="viewDetail(item)"
              >
                mdi-information
              </v-icon>
              <v-icon
               class="mx-2"
               @click="editItem(item)"
              >
                  mdi-pencil-circle
              </v-icon>
              <v-icon
               @click="deleteItem(item)"
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
// import SideBar from "@/components/SideBar.vue"
  export default {
    name: 'DataOffices',
    // components: {
    //   SideBar
    // },
    data: () => ({
      search: '',
      dialog: false,
      dialogDelete: false,
      dialogView: false,
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          filterable: false,
          value: 'id',
        },

        { text: 'Name', value: 'name' },
        { text: 'Location', value: 'location' },
        { text: 'Price', value: 'price' },
        { text: 'Kursi Minimum', value: 'kursi_min' },
        { text: 'Kursi Maximal', value: 'kursi_max' },

        { text: 'Actions', value: 'actions', sortable: false },
      ],
      offices: [],
      users: [],
      createdBy: null,
      editedIndex: -1,
      editedItem: {
        id: 0,
        created_by: 0,
        name: '',
        description: '',
        location: '',
        price: 0,
        kursi_min: 0,
        kursi_max: 0,
        photo: ''

      },
      defaultItem: {
        id: 0,
        created_by: 0,
        name: '',
        description: '',
        location: '',
        price: 0,
        kursi_min: 0,
        kursi_max: 0,
        photo: ''
      },

      drawer: false,
      itemsDrawer: [
        { title: 'Offices', icon: 'mdi-city', to:'/admin/dataoffices' },
        { title: 'Customers', icon: 'mdi-account-multiple', to:'/admin/datacustomers' },
        { title: 'Reviews', icon: 'mdi-pencil', to:'/admin/datareviews' },
        { title: 'Chat', icon: 'mdi-message-text', to:'/admin/chat' },
        { title: 'Bookings', icon: 'mdi-calendar', to:'/admin/bookings' },
        { title: 'Transactions', icon: 'mdi-swap-horizontal', to:'/admin/datatransactions' },
      ],



    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Office' : 'Edit Office'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
      dialogView (val) {
        val || this.close()
      }
    },

    async mounted() {
        this.initialize()
    },

    methods: {
        async loadDataOffices() {
            const response = await axios.get(`http://localhost:3000/offices`)
            this.offices = response.data
        },
        async loadDataUsers() {
            const response = await axios.get(`http://localhost:3000/users`)
            this.users = response.data
        },

      initialize () {
        this.loadDataUsers()
        this.loadDataOffices()
        
      },

      viewDetail(item) {
        this.editedIndex = this.offices.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogView = true
        this.createdBy =  this.users[item.created_by-1].name
      },

      editItem (item) {
        this.editedIndex = this.offices.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        
      },

      deleteItem (item) {
        this.editedIndex = this.offices.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.offices.splice(this.editedIndex, 1)
        axios.delete(`http://localhost:3000/offices/`+this.editedItem.id
        ).then(response=>{
            console.log(response)
        })
        this.closeDelete()
      },

      closeView() {
        this.dialogView = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
        this.initialize()
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
            axios.put(`http://localhost:3000/offices/`+this.editedItem.id, {
                name: this.editedItem.name,
                location:this.editedItem.location,
                price: this.editedItem.price,
                kursi_min: this.editedItem.kursi_min,
                kursi_max: this.editedItem.kursi_max,
                description: this.editedItem.description,

                created_by: 1,
                photo: 'https://ik.imagekit.io/yudha/practice_admin/room_1_3qvD5PqxS?ik-sdk-version=javascript-1.4.3&updatedAt=1654877227603'
                

            }).then(response=>{
                console.log(response)
            })

          Object.assign(this.offices[this.editedIndex], this.editedItem)
        } else {
            axios.post(`http://localhost:3000/offices`, {
                name: this.editedItem.name,
                location:this.editedItem.location,
                price: this.editedItem.price,
                kursi_min: this.editedItem.kursi_min,
                kursi_max: this.editedItem.kursi_max,
                description: this.editedItem.description,


                created_by: 1,
                photo: 'https://ik.imagekit.io/yudha/practice_admin/room_1_3qvD5PqxS?ik-sdk-version=javascript-1.4.3&updatedAt=1654877227603'
                
            }).then(response=>{
                console.log(response)
            })
          this.offices.push(this.editedItem)

        }
        this.close()
      },
    },
  }
</script>


<style>

</style>
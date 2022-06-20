<template>
  <v-app>
    <template>
      <v-card width="90%" class="mx-auto mt-4">
        <v-data-table
            :headers="headers"
            :items="offices"
            :search="search"
            sort-by="id"
            class="elevation-0"
        >
            <template v-slot:top>
            <v-toolbar
                flat
            >
                <v-toolbar-title>Manage Offices</v-toolbar-title>
                <v-divider
                class="mx-4"
                inset
                vertical
                ></v-divider>
                
                <v-row>
                  <v-col>
                    <v-card-title>
                      <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                      ></v-text-field>
                    </v-card-title>
                  </v-col>
                </v-row>

                
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
                    >
                    New Office
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
                      Created by: {{ users[editedItem.created_by-1] }}  (array users)
                    </v-card-text>
                    <v-card-text>
                      Created by: {{ editedItem.created_by }}
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
  export default {
    name: 'DataOffices',
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
        { text: 'kursi_min', value: 'kursi_min' },
        { text: 'kursi_max', value: 'kursi_max' },

        { text: 'Actions', value: 'actions', sortable: false },
      ],
      offices: [],
      users: [],
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

    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
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
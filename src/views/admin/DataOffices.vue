<template>
  <v-app>
    <Sidebar/>


    

    <v-card width="75%" class="ml-auto mr-10 mb-4" flat>
      <v-card-title class="headline font-weight-bold">
          Manage Offices
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
                <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search Office"
                single-line
                hide-details
                dense
                filled
                ></v-text-field>
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
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                    large
                    >
                    Add Office
                    </v-btn>
                </template>
                <v-card class="pa-4">
                    <v-card-title>
                    <span class="text-h5 font-weight-bold">{{ formTitle }}</span>
                    
                    </v-card-title>

                    <v-card-text>
                    <v-container>
                        <v-row>
                        <v-col
                            cols="12"
                            
                        >
                            <v-text-field
                            v-model="editedItem.name"
                            label="Office name"
                            type="text"
                            ></v-text-field>
                        </v-col>

                        <v-col
                            cols="6"
                            
                        >
                            <v-text-field
                            v-model="editedItem.latitude"
                            label="Garis Lintang"
                            type="text"
                            ></v-text-field>
                        </v-col>

                        <v-col
                            cols="6"
                            
                        >
                            <v-text-field
                            v-model="editedItem.longitude"
                            label="Garis Bujur"
                            type="text"
                            ></v-text-field>
                        </v-col>
                        
                        <v-col
                            cols="12"
                            
                        >
                            <v-text-field
                            v-model="editedItem.price"
                            label="Price"
                            type="number"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            
                        >
                            <v-text-field
                            v-model="editedItem.chair_min"
                            label="Kursi Minimum"
                            type="number"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            
                        >
                            <v-text-field
                            v-model="editedItem.chair_max"
                            label="Kursi Maximal"
                            type="number"
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
                <v-card>
                    
                    <v-card-title>
                      Delete Office
                    </v-card-title>
                    <v-card-text class="subtitle-2 mt-4">
                      Are you sure to delete this office?
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary darken-4" width="150" class="mr-4" outlined @click="closeDelete">Cancel</v-btn>
                      <v-btn color="primary darken-4" width="150" dark  @click="deleteItemConfirm">OK</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
                </v-dialog>



                <v-dialog v-model="dialogView" max-width="800px">
                
                  <v-card>

                    <v-carousel
                     hide-delimiters
                     height="350"
                    >
                      <v-carousel-item
                        v-for="photo in editedItem.photo_urls"
                        :key="photo.id"
                        :src="photo.url"
                      >
                        
                      </v-carousel-item>
                    </v-carousel>

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

                    </v-card-text>
                    <v-card-text>{{ editedItem.description }}</v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>Rp. {{ editedItem.price }},- / Jam</v-card-title>

                    <v-card-text>
                      Capacity : {{ editedItem.chair_min }} - {{editedItem.chair_max}}
                    </v-card-text>
                    
                    <!-- <v-card-text>
                      Created by: {{ editedItem.created_by }}
                    </v-card-text> -->

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
               color="#E59B3A"
              >
                mdi-information
              </v-icon>
              <v-icon
               class="mx-2"
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

        <!-- <div class="mx-10 mb-6" v-for="item in offices" :key="item.id">
            {{ item }}
        </div> -->
      </v-card>
      
        </template>

        
        
  </v-app>
</template>


<script>
import Sidebar from "@/components/SideBarAdmin.vue"
import axios from 'axios'

  export default {
    name: 'DataOffices',
    components: {
        Sidebar
    },
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
        { text: 'Price', value: 'price' },
        { text: 'Kursi Minimum', value: 'chair_min' },
        { text: 'Kursi Maximal', value: 'chair_max' },

        { text: 'Actions', value: 'actions', sortable: false },
      ],
      offices: [],
      editedIndex: -1,
      editedItem: {
        type_id: 1,
        name: '',
        description: '',
        latitude: '',
        longitude: '',
        price: 0,
        chair_min: '',
        chair_max: '',
        photo_url: "https://ik.imagekit.io/yudha/practice_admin/pexels-pixabay-271816_2b2Y2LzQ1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656304427380",
        id_facilitations: 1,
        id_tags: 1
      },
      defaultItem: {
        type_id: 1,
        name: '',
        description: '',
        latitude: '',
        longitude: '',
        price: 0,
        chair_min: '',
        chair_max: '',
        photo_url: "https://ik.imagekit.io/yudha/practice_admin/pexels-pixabay-271816_2b2Y2LzQ1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1656304427380",
        id_facilitations: 1,
        id_tags: 1
      },

      



    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Office' : 'Edit Office'
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
            const response = await axios.get(`http://34.207.166.213/office/all`)
            this.offices = response.data.data
        },
       
      initialize () {
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
        axios.delete(`http://34.207.166.213/office/`+this.editedItem.id
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
            axios.put(`http://34.207.166.213/office/`+this.editedItem.id, {
                type_id: Number(this.editedItem.type_id),
                name: this.editedItem.name,
                description: this.editedItem.description,
                latitude: this.editedItem.latitude,
                longitude: this.editedItem.longitude,
                price: Number(this.editedItem.price),
                chair_min: Number(this.editedItem.chair_min),
                chair_max: Number(this.editedItem.chair_max),
                photo_urls: [{
                  url: this.editedItem.photo_url,
                }],
                facilitations: [{
                  id: Number(this.editedItem.id_facilitations)
                }],
                tags: [{
                  id: Number(this.editedItem.id_tags)
                }]
            }).then(response=>{
                console.log(response)
            })

          Object.assign(this.offices[this.editedIndex], this.editedItem)
        } else {
            axios.post(`http://34.207.166.213/office`, {
                type_id: Number(this.editedItem.type_id),
                name: this.editedItem.name,
                description: this.editedItem.description,
                latitude: this.editedItem.latitude,
                longitude: this.editedItem.longitude,
                price: Number(this.editedItem.price),
                chair_min: Number(this.editedItem.chair_min),
                chair_max: Number(this.editedItem.chair_max),
                photo_urls: [
                  {
                  url: this.editedItem.photo_url,
                  }
                ],
                facilitations: [{
                  id: Number(this.editedItem.id_facilitations)
                }],
                tags: [{
                  id: Number(this.editedItem.id_tags)
                }]
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
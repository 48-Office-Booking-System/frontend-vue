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
          Manage Reviews
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
        :items="reviews"
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
            label="Search Office"
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
              max-width="600px"
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
                  New Review
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
                          disabled
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="editedItem.id_office"
                          label="Building"
                          disabled
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="editedItem.rating"
                          label="Rating"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-textarea
                          outlined
                          height="120"
                          label="Review"
                          v-model="editedItem.review"
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

            <v-dialog v-model="dialogReview" max-width="500px">
              <v-card
               class="pa-4"
              >
                <v-card-title>
                  Detail Review
                </v-card-title>
                <v-card-text>
                  <v-rating
                    :value="detailRating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                </v-card-text>
                <v-card-text class="subtitle-2 mt-0">
                  {{ detailReview }}
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary darken-4" width="150" class="mr-4" outlined @click="closeDetailReview">Close</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card
               class="pa-4"
              >
                <v-card-title>
                  Delete Review
                </v-card-title>
                <v-card-text class="subtitle-2 mt-4">
                  Are you sure to delete this review ?
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

       

        <template v-slot:[`item.rating`]="{ item }">
          <v-rating
            :value="item.rating"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
        </template>

        <template v-slot:[`item.review`]="{ item }">
          <v-btn
           small
           color="primary lighten-2"
           @click="viewDetailReview(item)"
          >
            View Detail
          </v-btn>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
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
    </v-card>  
    </template>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
    name: 'DataReviews',
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
            dialogReview: false,
            detailReview: '',
            detailRating: 0,
            headers: [
              {
                text: 'Id',
                align: 'start',
                filterable: false,
                value: 'id',
              },
              { text: 'Name', value: 'name', sortable: false },
              { text: 'Building', value: 'id_office', sortable: false },
              { text: 'Rating', value: 'rating' },
              { text: 'Review', value: 'review', sortable: false },
              { text: 'Actions', value: 'actions', sortable: false },
            ],
            reviews: [],
            offices: [],
            editedIndex: -1,
            editedItem: {
              id: 0,
              name: '',
              id_office: "",
              rating: 0,
              review: '',
            },
            defaultItem: {
              id: 0,
              name: '',
              id_office: "",
              rating: 0,
              review: '',
            },
        }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Review'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
      dialogReview (val) {
        val || this.close()
      },
    },

    async mounted() {
      this.initialize()
    },
    methods: {
      async loadDataReviews() {
        const response = await axios.get(`http://localhost:3000/reviews`)
        this.reviews = response.data
      },
      async loadDataOffices() {
        const response = await axios.get(`http://localhost:3000/offices`)
        this.offices = response.data
      },
      initialize () {
        this.loadDataReviews()
        this.loadDataOffices()
      },

      editItem (item) {
        this.editedIndex = this.reviews.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      viewDetailReview (item) {
        this.editedIndex = this.reviews.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.detailReview = item.review
        this.detailRating = item.rating
        this.dialogReview = true
      },
      deleteItem (item) {
        this.editedIndex = this.reviews.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.reviews.splice(this.editedIndex, 1)
        axios.delete(`http://localhost:3000/reviews/`+this.editedItem.id
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
      closeDetailReview () {
        this.dialogReview = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },


      save () {
        if (this.editedIndex > -1) {
          axios.put(`http://localhost:3000/reviews/`+this.editedItem.id, {
            name: this.editedItem.name,
            id_office: this.editedItem.id_office,
            rating: this.editedItem.rating,
            review: this.editedItem.review

          }).then(response=>{
            console.log(response)
          })
          Object.assign(this.reviews[this.editedIndex], this.editedItem)
        } else {
          axios.post(`http://localhost:3000/reviews`, {
            name: this.editedItem.name,
            id_office: this.editedItem.id_office,
            rating: this.editedItem.rating,
            review: this.editedItem.review
          }).then(response=>{
            console.log(response)
          })
          this.reviews.push(this.editedItem)
        }
        this.close()
      },
    },    
}
</script>

<style>

</style>
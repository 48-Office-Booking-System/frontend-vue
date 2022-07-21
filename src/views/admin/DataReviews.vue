<template>
  <v-app>
    <Sidebar/>
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

            <v-dialog v-model="dialogReview" max-width="500px">
              <v-card
               class="pa-4"
              >
                <v-card-title>
                  Detail Review
                </v-card-title>
                <v-card-text>
                  <v-rating
                    :value="detailStar"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                </v-card-text>
                <v-card-text class="subtitle-2 mt-0">
                  {{ detailText }}
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

       

        <template v-slot:[`item.star`]="{ item }">
          <v-rating
            :value="item.star"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
        </template>

        <template v-slot:[`item.text`]="{ item }">
          <v-btn
           small
           color="primary lighten-2"
           @click="viewDetailReview(item)"
          >
            View Detail
          </v-btn>
        </template>

        <template v-slot:[`item.status`]="{ item }">
          <v-btn
           v-if="item.hidden == 1"
           outlined
           small
           color="green"
           @click="changeStatusToHidden(item.id)"
          >
            Publish
          </v-btn>
          <v-btn
           v-else
           outlined
           small
           color="red"
           @click="changeStatusToPublish(item.id)"
          >
            Hide
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
    name: 'DataReviews',
    components: {
        Sidebar
    },
    data() {
        return {
            search: '',
            dialog: false,
            dialogDelete: false,
            dialogReview: false,
            detailText: '',
            detailStar: 0,
            customerName: '',
            officeName: '',
            headers: [
              {
                text: 'Id',
                align: 'start',
                filterable: false,
                value: 'id',
              },
              { text: 'Name', value: 'user.name', sortable: false },
              { text: 'Building', value: 'office.name', sortable: false },
              { text: 'Rating', value: 'star' },
              { text: 'Review', value: 'text', sortable: false },
              { text: 'Status', value: 'status', sortable: false },
            ],
            reviews: [],
            offices: [],
            editedIndex: -1,
            editedItem: {
              id: 0,
              star: 0,
              text: '',
            },
            defaultItem: {
              id: 0,
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
        const response = await axios.get(`http://34.207.166.213/review/all`)
        this.reviews = response.data.data
        console.log(response.data.data)
      },
      initialize () {
        this.loadDataReviews()
      },

      editItem (item) {
        this.editedIndex = this.reviews.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.customerName = item.user.name
        this.officeName = item.office.name
        this.dialog = true
      },
      viewDetailReview (item) {
        this.editedIndex = this.reviews.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.detailText = item.text
        this.detailStar = item.star
        this.dialogReview = true
      },
      changeStatusToHidden(idReview) {
        axios.put(`http://34.207.166.213/review/`+idReview, {
          hidden: 2
        }).then(response=>{
          console.log(response)
        })
        this.initialize()
      },
      changeStatusToPublish(idReview) {
        axios.put(`http://34.207.166.213/review/`+idReview, {
          hidden: 1
        }).then(response=>{
          console.log(response)
        })
        this.initialize()
      },
      deleteItem (item) {
        this.editedIndex = this.reviews.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.reviews.splice(this.editedIndex, 1)
        axios.delete(`http://34.207.166.213/review/`+this.editedItem.id
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
          axios.put(`http://34.207.166.213/review/`+this.editedItem.id, {
            star: Number(this.editedItem.star),
            text: this.editedItem.text

          }).then(response=>{
            console.log(response)
          })
          Object.assign(this.reviews[this.editedIndex], this.editedItem)
        } else {
          axios.post(`http://34.207.166.213/review`, {
            hidden: 1,
            office_id: 68,
            user_id: 13,
            star: Number(this.editedItem.star),
            text: this.editedItem.text
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
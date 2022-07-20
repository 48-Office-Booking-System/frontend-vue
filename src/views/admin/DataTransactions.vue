<template>
  <v-app>
    <Sidebar/>

        <v-card width="75%" class="ml-auto mr-10 mb-4" flat>
      <v-card-title class="headline font-weight-bold">
          Manage Transactions
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
        :items="transactions"
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
            label="Search Transaction"
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
                  New Transactions
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
                          v-model="editedItem.price"
                          label="Price"
                          
                        ></v-text-field>
                      </v-col>
                      
                      <v-col
                        cols="12"
                      >
                        <v-select
                          v-model="editedItem.method"
                          :items="itemMethod"
                          :label="editedItem.method"
                          solo
                          dark
                          background-color="primary"
                        >
                        </v-select>
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
                        cols="6"
                      >
                        <v-select
                          v-model="editedItem.status"
                          :items="itemStatus"
                          :label="editedItem.status"
                          solo
                          dark
                          background-color="primary"
                        >
                        </v-select>
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
                  Delete Transaction
                </v-card-title>
                <v-card-text class="subtitle-2 mt-4">
                  Are you sure to delete this transaction ?
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

       
        <template v-slot:[`item.status`]="{ item }">
          <div v-if="item.status == 'Pending'">
            <div class="statusPending text-center">
              {{ item.status }}
            </div>
          </div>
          <div v-else-if="item.status == 'Success'">
            <div class="statusSuccess text-center">
              {{ item.status }}
            </div>
          </div>
          <div v-if="item.status == 'Failed'">
            <div class="statusFailed text-center">
              {{ item.status }}
            </div>
          </div>
        </template>

        <template v-slot:[`item.status_id`]="{ item }">
          <v-btn
           v-if="item.status_id == 1"
           outlined
           small
           color="green"
          >
            Pending
          </v-btn>
          <v-btn
           v-else-if="item.status_id == 2"
           outlined
           small
           color="red"
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

        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            @click="SendItem(item)"
            color="green"
          >
              mdi-send-circle
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
    </v-card>  
    </template>
  </v-app>
</template>

<script>
import Sidebar from "@/components/SideBarAdmin.vue"
import axios from 'axios'
export default {
    name: 'DataTransactions',
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
                filterable: false,
                value: 'id',
              },
              { text: 'Name', value: 'user.name', sortable: false },
              { text: 'Price', value: 'total_price', sortable: false },
              { text: 'Method', value: 'payment_method' },
              { text: 'Date', value: 'payment_date', sortable: false },
              { text: 'Status', value: 'status_id', sortable: false },
              { text: 'Actions', value: 'actions', sortable: false },
            ],
            transactions: [],
            itemStatus: ['Pending', 'Success', 'Failed'],
            itemMethod: ['BCA', 'BNI', 'BRI', 'CIMB', 'Panin'],
            editedIndex: -1,
            editedItem: {
              id: 0,
              name: '',
              price: 0,
              method: '',
              date: '',
              status: ''
            },
            defaultItem: {
              id: 0,
              name: '',
              price: 0,
              method: '',
              date: '',
              status: ''
            },
        }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Transaction'
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
      async loadDataTransactions() {
        const response = await axios.get(`http://34.207.166.213/booking/all`)
        // const response = await axios.get(`http://localhost:3000/booking/all?status_id=1`)
        this.transactions = response.data.data
        console.log(this.transactions)
      },
      initialize () {
        this.loadDataTransactions()
        
      },

      editItem (item) {
        this.editedIndex = this.transactions.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      
      deleteItem (item) {
        this.editedIndex = this.transactions.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.transactions.splice(this.editedIndex, 1)
        axios.delete(`http://localhost:3000/transactions/`+this.editedItem.id
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
      closeDetailReview () {
        this.dialogReview = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },


      save () {
        if (this.editedIndex > -1) {
          axios.put(`http://localhost:3000/transactions/`+this.editedItem.id, {
            name: this.editedItem.name,
            price: this.editedItem.price,
            method: this.editedItem.method,
            date: this.editedItem.date,
            status: this.editedItem.status

          }).then(response=>{
            console.log(response)
          })
          Object.assign(this.transactions[this.editedIndex], this.editedItem)
        } else {
          axios.post(`http://localhost:3000/transactions`, {
            name: this.editedItem.name,
            price: this.editedItem.price,
            method: this.editedItem.method,
            date: this.editedItem.date,
            status: this.editedItem.status
          }).then(response=>{
            console.log(response)
          })
          this.transactions.push(this.editedItem)
        }
        this.close()
      },
    },    
}
</script>

<style scoped>
  .statusPending {
    padding: 5px 0px;
    border: solid 1px;
    border-radius: 5px;
    color: #E59B3A;
  }
  .statusSuccess {
    padding: 5px 0px;
    border: solid 1px;
    border-radius: 5px;
    color: #37AF67;
  }
  .statusFailed {
    padding: 5px 0px;
    border: solid 1px;
    border-radius: 5px;
    color: #FF4956;
  }
</style>
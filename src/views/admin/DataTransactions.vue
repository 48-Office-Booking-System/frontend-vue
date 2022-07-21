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

            <template>
              <v-row justify="center">
                <v-dialog
                  v-model="dialogNewTransaction"
                  persistent
                  max-width="600px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      New Transaction
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">New Transaction</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col
                            cols="6" 
                          >
                            <v-text-field
                              v-model="user_id"
                              label="Id User"
                              required
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="6" 
                          >
                            <v-text-field
                              v-model="office_id"
                              label="Id Office"
                              required
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-menu
                             ref="menuDateStart"
                             v-model="menuDateStart"
                             :close-on-content-click="false"
                             :return-value.sync="start_date"
                             transition="scale-transition"
                             offset-y
                             max-width="290px"
                             min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="start_date"
                                        label="Pilih Tanggal"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                        solo
                                        dark
                                        background-color="#28304E"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                v-if="menuDateStart"
                                 v-model="start_date"
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="menuDateStart = false"

                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menuDateStart.save(start_date)"
                                >
                                    OK
                                </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                        
                        <v-col cols="3">
                            <v-menu
                                ref="menuStart"
                                v-model="menuStart"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="start_time"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="start_time"
                                    label="Start"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    solo
                                    dark
                                    background-color="#28304E"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                v-if="menuStart"
                                v-model="start_time"
                                :max="end_time"
                                format="24hr"
                                use-seconds
                                full-width
                                @click:second="$refs.menuStart.save(start_time)"
                                ></v-time-picker>
                                
                            </v-menu>
                        </v-col>
                        <v-col cols="3">
                            <v-menu
                                ref="menuEnd"
                                v-model="menuEnd"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="end_time"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="end_time"
                                    label="End"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    solo
                                    dark
                                    background-color="#28304E"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                v-if="menuEnd"
                                v-model="end_time"
                                :min="start_time"
                                format="24hr"
                                use-seconds
                                full-width
                                @click:second="$refs.menuEnd.save(end_time)"
                                ></v-time-picker>
                                
                            </v-menu>
                        </v-col>
                        </v-row>
                      </v-container>
                      
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialogNewTransaction = false"
                      >
                        Close
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="updateTransaction()"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </template>
            
            <v-dialog
              v-model="dialog"
              max-width="600px"
            >
              
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
                          v-model="user_name"
                          label="Customer name"
                          disabled
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="total_price"
                          label="Total Price"
                          disabled
                        ></v-text-field>
                      </v-col>
                      
                      <v-col
                        cols="6"
                      >
                        <v-select
                          v-model="editedItem.status"
                          :items="itemStatus"
                          label="Status"
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
           width="90"
           color="yellow"
          >
            Pending
          </v-btn>
          <v-btn
           v-else-if="item.status_id == 2"
           outlined
           small
           width="90"
           color="green"
          >
            Success
          </v-btn>
          <v-btn
           v-else
           outlined
           small
           color="red"
           width="90"
          >
            Fail
          </v-btn>

        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
           icon
           :href="'https://api.whatsapp.com/send?phone='+item.user.number+'&text=Halo '+item.user.name+'^^%0ABerikut merupakan invoice atas penyewaan '+item.office.name+', dengan total harga '+item.total_price+'%0ATerima Kasih'"
           target="_blank"
          >
            <v-icon
              color="green"
            >
                mdi-send-circle
            </v-icon>
          </v-btn>
          
          <v-btn
           icon
          >
            <v-icon
              @click="editItem(item)"
              color="primary"
            >
                mdi-pencil-circle
            </v-icon>
          </v-btn>
          
          <v-btn
           icon
          >
            <v-icon
              @click="deleteItem(item)"
              color="red"
            >
                mdi-delete-circle
            </v-icon>
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
    name: 'DataTransactions',
    components: {
        Sidebar
    },
    data() {
        return {

            user_name: "",
            total_price: "",

            // Tanggal
            date_now: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menuDateStart: false,
            menuStart: false,
            menuEnd: false,
            menu: false,
            

            // Input new transaction
            dialogNewTransaction: false,
            user_id: 0,
            office_id: 0,
            start_date: "",
            start_time:"",
            end_time:"",

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
              // { text: 'Method', value: 'payment_method' },
              { text: 'Nama Gedung', value: 'office.name', sortable: false },
              { text: 'Date', value: 'start_hour', sortable: false },
              { text: 'Status', value: 'status_id', sortable: false },
              { text: 'Actions', value: 'actions', sortable: false },
            ],
            transactions: [],
            itemStatus: ['Pending', 'Success', 'Failed'],
            itemMethod: ['BCA', 'BNI', 'BRI', 'CIMB', 'Panin'],
            editedIndex: -1,
            editedItem: {
              id: 0,
              status_id: ''
            },
            defaultItem: {
              id: 0,
              status_id: ''
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
        this.transactions = response.data.data
      },
      initialize () {
        this.loadDataTransactions()
        
      },

      editItem (item) {
        this.editedIndex = this.transactions.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.user_name =  item.user.name
        this.total_price = item.total_price
        this.dialog = true
      },
      
      deleteItem (item) {
        this.editedIndex = this.transactions.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.transactions.splice(this.editedIndex, 1)
        axios.delete(`http://34.207.166.213/booking/`+this.editedItem.id
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
      
      updateTransaction() {
            axios.post(`http://34.207.166.213/booking`, {
                user_id: Number(this.user_id),
                office_id: Number(this.office_id),
                status_id: 1,
                start_date: this.start_date+" 00:00:00 WIB",
                end_date: this.start_date+" 00:00:00 WIB",
                start_hour: this.start_date+" " + this.start_time+ " WIB",
                end_hour: this.start_date+" " + this.end_time+ " WIB"
            }).then(response=>{
                console.log(response)
            })
            this.dialogNewTransaction = false
            this.initialize()
        },


      save () {
        if (this.editedIndex > -1) {
          if (this.editedItem.status == 'Pending') {
              axios.put(`http://34.207.166.213/booking/`+this.editedItem.id, {
                status_id: 1
              }).then(response=>{
                console.log(response)
              })    
          } if (this.editedItem.status == 'Success') {
              axios.put(`http://34.207.166.213/booking/`+this.editedItem.id, {
                status_id: 2
              }).then(response=>{
                console.log(response)
              })
          } else {
              axios.put(`http://34.207.166.213/booking/`+this.editedItem.id, {
                status_id: 3
              }).then(response=>{
                console.log(response)
              })
          }
          
          Object.assign(this.transactions[this.editedIndex], this.editedItem)
        } else {
          axios.post(`http://34.207.166.213/booking`, {
            
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
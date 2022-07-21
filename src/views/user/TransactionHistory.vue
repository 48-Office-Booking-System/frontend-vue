<template>
  <v-app>
    <Navbar/>
    <Chat />
    
    <div class="history px-16">
        <div class="headline mb-6 font-weight-bold">
            Ruangan yang anda pesan:
        </div>
        <v-row>
            <v-col cols="3" v-for="booking in bookings" :key="booking.id">
                <v-card>
                    <v-card-title>
                        {{booking.office.name}}
                    </v-card-title>
                    <v-divider class="mx-2"></v-divider>
                    <v-card-text>
                        <div>Total Harga: </div>
                        <div class="font-weight-bold subtitle mb-4">Rp. {{booking.total_price}},-</div>

                        <div>Status Pembayaran:</div>
                        <div class="font-weight-bold subtitle">{{booking.status.name}}</div>
                    </v-card-text>
                    <v-divider class="mx-2"></v-divider>
                    <v-card-actions>
                        <v-btn 
                         v-if="booking.status_id == 1"
                         block
                         color="primary"
                         :to="'/bills/'+booking.id"
                        >
                            Konfirmasi Pembayaran
                        </v-btn>

                        <v-btn 
                         v-else-if="booking.status_id == 2"
                         block
                         color="green"
                         dark
                         @click="addReview(booking.office_id)"
                        >
                            Berikan Review
                        </v-btn>

                        <h4
                         class="my-1 mx-auto red--text"
                         v-else
                        >
                            Transaksi Gagal
                        </h4>
                        
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <template>
            <v-row justify="center">
                <v-dialog
                v-model="dialogReview"
                persistent
                max-width="600px"
                >
                <v-card>
                    <v-card-title>
                    <span class="text-h5">Tambah Review</span>
                    </v-card-title>
                    <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                v-model="star"
                                type="number"
                                label="Rating"
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-textarea
                                label="Review"
                                v-model="text"
                                outlined
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
                        @click="dialogReview = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="submitReview()"
                    >
                        Save
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>
            </template>

    </div>
    
  </v-app>
</template>

<script>
import Navbar from "@/components/NavBarUser.vue"
import Chat from "@/components/Chat.vue"
import axios from 'axios'
export default {
    name: 'TransactionHistoryPage',
    data() {
        return{
            bookings: [],
            dialogReview: false,
            id_office: 0,
            star: 0,
            text:'',
        }
    },
    components: {
        Navbar,
        Chat
    },
    async mounted() {
    this.initialize()
    },
    methods: {
        
        async loadDataTransactions() {
            const response = await axios.get(`http://34.207.166.213/booking/all?user_id=${this.$store.state.userId}`)
            this.bookings = response.data.data
            console.log(response.data.data)
        },
        initialize () {
            this.loadDataTransactions()
        },
        addReview(idOffice) {
            this.id_office = idOffice
            this.dialogReview = true
        },
        submitReview() {
            axios.post(`http://34.207.166.213/review`, {
                hidden: 1,
                office_id: Number(this.id_office),
                user_id: Number(this.$store.state.userId),
                star: Number(this.star),
                text: this.text
            }).then(response=>{
                console.log(response)
            })
            this.dialogReview = false
        }
    }

}
</script>

<style scoped>
    .history{
        margin-top: 60px;
    }
</style>
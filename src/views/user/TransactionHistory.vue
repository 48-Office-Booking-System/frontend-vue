<template>
  <v-app>
    <Navbar/>
    <Chat />
    
    <div class="history px-16">
        <div class="headline mb-6">
            Ruangan yang anda pesan
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
                         block
                         color="primary"
                         :to="'/bills/'+booking.id"
                        >
                            Konfirmasi Pembayaran
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
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
            const response = await axios.get(`http://34.207.166.213/booking/all?user_id=13`)
            this.bookings = response.data.data
            console.log(response.data.data)
        },
        initialize () {
            this.loadDataTransactions()
        },
    }

}
</script>

<style scoped>
    .history{
        margin-top: 60px;
    }
</style>
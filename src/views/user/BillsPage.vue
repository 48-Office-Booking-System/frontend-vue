<template>
  <v-app>
    <Navbar/>
    <Chat />

    <div style="margin-top: 100px;" class="px-16">
      <v-row>
        <v-col>
          <v-card flat>
            <v-card-title>
              BILLS
            </v-card-title>
            <v-card-text class="py-0">
              DITERBITKAN ATAS NAMA
            </v-card-text>
            <v-card-title class="py-0 mb-4">
              Agent: KOBAS-Felik
            </v-card-title>
            <v-card-text>
              Metode Pembayaran: ??
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col class="text-center">
          <div class="exp mt-16">Bayar sebelum ??</div>
        </v-col>

        <v-col>
          <v-card flat>
            <v-card-title>
              ID Booking: {{ infoBooking.id }}
            </v-card-title>
            <v-card-text class="py-0">
              DIBERIKAN KEPADA
            </v-card-text>
            <v-card-title class="py-0 mb-4">
              Pemesan: {{ infoBooking.user.name }}
            </v-card-title>
            <v-card-text>
              Tanggal Pemesanan: ??? 
            </v-card-text>
          </v-card>
          
        </v-col>
      </v-row>

      <template>
        <v-card class="py-4 px-6 my-16" outlined>
          <v-simple-table class="text-center">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center text-h6 font-weight-bold">
                    NAMA GEDUNG
                  </th>
                  <th class="text-center text-h6 font-weight-bold">
                    TANGGAL PEMESANAN
                  </th>
                  <th class="text-center text-h6 font-weight-bold">
                    WAKTU PENGGUNAAN
                  </th>
                  <th class="text-center text-h6 font-weight-bold">
                    TOTAL HARGA
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ infoBooking.office.name }}</td>
                  <td> - </td>
                  <td>{{ infoBooking.start_date }}</td>
                  <td>Rp. {{ infoBooking.total_price }},-</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </template>

      <div class="text-center">
        <v-btn
         dark
         color="primary"
         :href="'https://api.whatsapp.com/send?phone=62895401010022&text=Halo Koba-min^^ ~ %0ASaya mau mengkonfirmasi pembayaran,%0AID Booking: '+this.infoBooking.id+'%0ANama Gedung: '+this.infoBooking.office.name+'%0ATotal Harga: '+this.infoBooking.total_price"
         target="_blank"
        >
          KIRIM BUKTI PEMBAYARAN
        </v-btn>
      </div>
      
    </div>
    
    <v-footer color="#121950" class="mt-16 py-3" padless>
      <v-col class="text-center" cols="12">
        <div class="body-regular-2 white--text">
          Copyright Ⓒ 2022 KOBASpace. All Right Reserved.
        </div>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios"
import Navbar from "@/components/NavBarUser.vue"
import Chat from "@/components/Chat.vue"
export default {
  name: 'BillsPage',
  components: {
    Navbar,
    Chat
  },
  data () {
    return {
      infoBooking: []
    }
  },
  async mounted() {
    this.initialize()
    },
    methods: {
        async loadDataBooking() {
        const response = await axios.get(`http://34.207.166.213/booking/${this.$route.params.id}`)
        this.infoBooking = response.data.data
        console.log(this.infoBooking)
        },
        initialize() {
        this.loadDataBooking()
        },
    }

  


}
</script>

<style scoped>
  .exp {
    padding: 5px 0px;
    border: solid 2px #E59B3A;
    border-radius: 20px;
    color: #000000;
    background-color: #f8e4c9;
    
  }
</style>
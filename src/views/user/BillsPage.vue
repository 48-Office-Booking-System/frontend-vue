<template>
  <v-app>
    <Navbar/>

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
              Metode Pembayaran:
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col class="text-center">
          <div class="exp mt-16">Bayar sebelum 17 Juli 2022, 15:15 WIB</div>
        </v-col>

        <v-col>
          <v-card flat>
            <v-card-title>
              ID: 1
            </v-card-title>
            <v-card-text class="py-0">
              DIBERIKAN KEPADA
            </v-card-text>
            <v-card-title class="py-0 mb-4">
              Pemesan: Yazmin Raniah
            </v-card-title>
            <v-card-text>
              Tanggal Pemesanan: Kamis, 1 Juni 2022
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
                <tr
                  v-for="item in infoBooking"
                  :key="item.name"
                >
                  <td>{{ item.name }}</td>
                  <td>{{ item.orderDate }}</td>
                  <td>{{ item.usageTime }}</td>
                  <td>{{ item.totalPrice }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </template>

      <div class="text-center">
        <v-btn dark color="primary">
          KONFIRMASI PEMBAYARAN
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
import Navbar from "@/components/NavBarUser.vue"
export default {
  name: 'BillsPage',
  components: {
    Navbar
  },
  data () {
    return {
      infoBooking: [
        {
          name: 'Infinite Office',
          orderDate: "Kamis, 1 Juni 2022",
          usageTime: "13:00 - 17:00",
          totalPrice: "Rp. 350.000,00"
        }
      ]
    }
  },
  


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
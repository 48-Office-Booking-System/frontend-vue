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
    <v-app-bar app height="70" class="px-10" color="#FCFDFF" flat>
      <div class="logo">
        <v-img src="../../assets/kobaspace.png" />
      </div>

      <div class="nav mx-10">
        <v-btn text small color="#28304E" height="0"> Gedung </v-btn>
        <v-btn text small color="#28304E" height="0"> Pembayaran </v-btn>
        <v-btn text small color="#28304E" height="0"> Tentang Kami </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-text-field
        hide-details
        dense
        filled
        prepend-inner-icon="mdi-magnify"
        placeholder="Cari gedung yang kau mau"
        color="#28304E"
      />
    </v-app-bar>

    <div class="table-1 px-16">
      <v-row>
        <v-col>
          <v-simple-table fixed-header height="300px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Info Gedung</th>
                  <th class="text-left">Tanggal Pemesanan</th>
                  <th class="text-left">Waktu Penggunaan</th>
                  <th class="text-left">Total Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="office in offices" :key="office.info">
                  <td><strong>{{ office.info }}</strong></td>
                  <td><strong>{{ office.tanggal }}</strong></td>
                  <td><strong>{{ office.waktu }}</strong></td>
                  <td><strong>{{ office.totalHarga }}</strong></td>
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
        </v-col>
      </v-row>
    </div>

    <v-footer color="#121950" class="mt-5 py-3" padless>
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
import Chat from "@/components/Chat.vue"
export default {
  name: 'BillsPage',
  components: {
    Navbar,
    Chat
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
  name: "SlipPayment",
   data() {
    return {
      offices: [],
    };
  },
  methods: {
    setOffices(data) {
      this.offices = data;
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    axios
      .get("http://34.207.166.213/")
      .then((response) => this.setOffices(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.table-1 {
  margin-top: 100px;
}
</style>
<template>
  <v-app>
    
    <Navbar/>
    <div class="table-1 px-16">
      <!-- <v-row>
        <v-col> -->
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
        <!-- </v-col>
      </v-row> -->
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
import Navbar from '@/components/NavBarUser.vue'
export default {
  name: "SlipPayment",
  components: {
      Navbar
  },
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
.dropdown {
  margin-top: 90px;
}
</style>
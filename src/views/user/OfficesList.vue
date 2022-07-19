<template>
  <v-app>
    <Navbar/>
    <v-card
     flat
    >
      
      <div class="filter px-16 pt-6">
        
      <v-row>
        <v-col>
          <v-select
            :items="tipeRuangan"
            label="Tipe Ruangan"
            solo
            dark
            background-color="#F37524"
          ></v-select>
        </v-col>
        <v-col>
          <v-select
            :items="jenisRuangan"
            label="Jenis Ruangan"
            solo
            dark
            background-color="#F37524"
          ></v-select>
        </v-col>
        <v-col>
          <v-select
            :items="kapasitasOrang"
            label="Kapasitas Ruangan"
            solo
            dark
            background-color="#F37524"
          ></v-select>
        </v-col>
        <v-col>
          <v-btn large color="primary darken-4" block class="py-6" solo dark>
            Cari
          </v-btn>
        </v-col>
      </v-row>
    </div>
    </v-card>

    <div class="officeList mt-10 px-16">
      <v-row>
        <v-col cols="3" v-for="office in offices" :key="office.id">
          <v-card class="mx-auto" max-width="280">
            <v-carousel
            hide-delimiters
            :show-arrows="false"
            height="200"
            >
                <v-carousel-item
                    v-for="photo in office.photo_urls"
                    :key="photo.id"
                    :src="photo.url"
                >
                    
                </v-carousel-item>
            </v-carousel>
            
            <v-card-title> {{ office.name }} </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4</div>
              </v-row>
              <div class="mt-4 text-subtitle-1">Harga : Rp. {{ office.price }} / Jam</div>
            </v-card-text>

            <v-divider class="mx-2"></v-divider>
            <v-card-actions>
              <v-btn
               block
               large
               color="primary"
               :to="'officedetail/'+office.id"
              >
                Lihat Detail
              </v-btn>
            </v-card-actions>
          </v-card>
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
import axios from 'axios'
export default {
  name: "OfficesList",
  components: {
    Navbar
  },
  data: () => ({
    tipeRuangan: ["Indoor", "Outdoor"],
    jenisRuangan: ["Event", "Meeting"],
    kapasitasOrang: [
      "1 - 10 Orang",
      "11 - 20 Orang",
      "21 - 30 Orang",
      "31 - 40 Orang",
      "41 - 50 Orang",
      "50 + Orang",
    ],
    offices: [],



  }),
  async mounted() {
    this.initialize()
  },
  methods: {
    async loadDataOffices() {
      const response = await axios.get(`http://34.207.166.213/office/all`)
      this.offices = response.data.data
      console.log(this.offices)
    },
    initialize() {
      this.loadDataOffices()
    }
  }


}
</script>

<style scoped>
.filter {
  margin-top: 46px;
}
</style>
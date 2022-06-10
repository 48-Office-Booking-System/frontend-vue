<template>
  <v-app>
    <div class="container">
      <Navbar />
    </div>

    <div class="booking-select text-center mt-16">
      <v-container fluid>
        <v-col class="d-flex" cols="3" sm="2">
          <v-select
            :items="tipe"
            label="Tipe Ruangan"
            outlined
            background-color="#455392"
            item-color="#455392"
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="3" sm="2">
          <v-select
            :items="jenis"
            label="Jenis Ruangan"
            outlined
            background-color="#455392"
            item-color="#455392"
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="3" sm="2">
          <v-select
            :items="kapasitas"
            label="Kapasitas Orang"
            outlined
            background-color="#455392"
            item-color="#455392"
          ></v-select>
        </v-col>
        <v-row justify="space-around">
          <v-date-picker v-model="picker" color="#455392"></v-date-picker>
        </v-row>
        <h1>Pilih waktu sewa yang akan digunakan:</h1>
        <v-row justify="space-around" align="center">
          <v-col style="width: 350px; flex: 0 1 auto">
            <h2>Start:</h2>
            <v-time-picker v-model="start" :max="end"></v-time-picker>
          </v-col>
          <v-col style="width: 350px; flex: 0 1 auto">
            <h2>End:</h2>
            <v-time-picker v-model="end" :min="start"></v-time-picker>
          </v-col>
        </v-row>
        <v-btn color="accent" elevation="2">Cari</v-btn>
      </v-container>

      <div class="heading-1" >Silahkan cari ruangan yang anda inginkan</div>
      <div class="heading-3-regular mb-10">Best Seller Ruangan Meeting</div>
    </div>

    <v-footer color="#AFB2B7" class="mt-5" padless>
      <v-col class="text-center py-16" cols="12">
        <div class="heading-1">Copyright</div>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "BookingPage",
  components: {
    Navbar,
  },
  data: () => ({
    tipe: ["Indoor", "Outdoor"],
    jenis: ["Event", "Meeting"],
    kapasitas: [
      "1-10 orang",
      "11-20 orang",
      "21-30 orang",
      "31-40 orang",
      "41-50 orang",
      "50++ orang",
    ],
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    start: null,
    end: null,
  }),
};
</script>

<style scoped>
.banner-iklan {
  margin-top: 70px;
}
.banner-iklan .heading-1 {
  color: #fff !important;
}
.heading-1 {
  font-family: "Nunito", sans-serif;
  font-weight: 700 !important;
  font-size: 32px !important;
}
.heading-3-regular {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
}
.body-regular-2 {
  font-family: "Work Sans", sans-serif;
  font-weight: 400 !important;
  font-size: 14px !important;
  color: #121950 !important;
}
.body-regular-3 {
  font-family: "Work Sans", sans-serif;
  font-weight: 400 !important;
  font-size: 12px !important;
  color: #121950 !important;
}
.best-seller {
}
.reason-content {
  height: 384px;
  background-color: #afb2b7;
}
.testimoni {
  background-color: #afb2b7;
}
</style>
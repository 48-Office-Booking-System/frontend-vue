<template>
  <v-app>
    <div class="container">
      <Navbar />
    </div>

    <div class="dropdown px-16">
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
          <v-btn large color="primary" block class="py-6">
            Cari
            <v-icon right dark> mdi-magnify </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <div class="officeList mt-10 px-16">
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="280">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Infinite Office </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4.5 (413)</div>
              </v-row>
              <div class="my-4 text-subtitle-1">Rp. 700.000 / Jam</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="280">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Infinite Office </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4.5 (413)</div>
              </v-row>

              <div class="my-4 text-subtitle-1">Rp. 700.000 / Jam</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="280">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Infinite Office </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4.5 (413)</div>
              </v-row>

              <div class="my-4 text-subtitle-1">Rp. 700.000 / Jam</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="280">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Infinite Office </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4.5 (413)</div>
              </v-row>
              <div class="my-4 text-subtitle-1">Rp. 700.000 / Jam</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="280">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Infinite Office </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4.5 (413)</div>
              </v-row>

              <div class="my-4 text-subtitle-1">Rp. 700.000 / Jam</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="280">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Infinite Office </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4.5 (413)</div>
              </v-row>

              <div class="my-4 text-subtitle-1">Rp. 700.000 / Jam</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="280">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Infinite Office </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4.5 (413)</div>
              </v-row>
              <div class="my-4 text-subtitle-1">Rp. 700.000 / Jam</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="280">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Infinite Office </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4.5 (413)</div>
              </v-row>

              <div class="my-4 text-subtitle-1">Rp. 700.000 / Jam</div>
            </v-card-text>
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
import Navbar from "@/components/Navbar.vue";
export default {
  name: "BookingPage",
  components: {
    Navbar,
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
  }),
};
</script>

<style scoped>
.dropdown {
  margin-top: 90px;
}
</style>
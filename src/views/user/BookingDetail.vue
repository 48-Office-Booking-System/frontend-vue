<template>
  <v-app>
    <v-app-bar
            app height="70" 
            class="px-10"
            color="#FCFDFF"
            fixed
            
        >
            <div class="logo">
                <v-img src="../../assets/kobaspace.png" />
            </div>

            <div class="nav mx-10">
                <v-btn 
                    text
                    small
                    color="#28304E"
                    height="0"
                >
                    Gedung
                </v-btn>
                <v-btn
                    text
                    small
                    color="#28304E"
                    height="0"
                >
                    Pembayaran
                </v-btn>
                <v-btn 
                    text
                    small
                    color="#28304E"
                    height="0"
                >
                    Tentang Kami
                </v-btn>
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

            <v-icon large color="#455392" class="ml-4">
                mdi-account-circle
            </v-icon>
        </v-app-bar>

    <div class="content-1 px-16">
        <v-row>
            <v-col cols="5">
                <v-card class="pa-4">
                    <v-row>
                        <v-col>
                            <v-card-title class="px-0">
                                Vintage Office
                            </v-card-title>
                            <v-card-text class="px-0">
                            <v-row
                                align="center"
                                class="mx-0"
                            >
                                <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                ></v-rating>

                            </v-row>
                            </v-card-text>
                        </v-col>
                        <v-col>
                            <v-card-text class="pb-0 px-0">
                                Rp. 500.000 / Jam
                            </v-card-text>
                            
                            <v-card-title class="ma-0 py-0 px-0">
                                Rp. 200.000 / Jam
                            </v-card-title>
                        </v-col>
                    </v-row>

                    <v-row class="px-0">
                        <!-- Tanggal -->
                        <v-col>
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="date"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                                                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="date"
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
                                v-model="date"
                                no-title
                                scrollable
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="menu = false"

                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menu.save(date)"
                                >
                                    OK
                                </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col>
                            
                        </v-col>
                    </v-row>
                    
                    <v-card-text>
                        Jadwal Tersedia
                    </v-card-text>
                    
                    <v-card-subtitle>
                        <div>
                            Total Pembayaran
                        </div>
                        
                        <div>
                            1 x Rp 200.000
                        </div>
                    </v-card-subtitle>

                    <div class="text-center mt-10">
                        <v-btn
                         class="px-10 mb-4"
                         color="#28304E"
                         dark
                        > 
                            Pesan
                        </v-btn>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="7">
                <v-carousel hide-delimiters height="435">
                    <v-carousel-item
                    v-for="(item,i) in itemsCarousel"
                    :key="i"
                    :src="item.src"
                    ></v-carousel-item>
                </v-carousel>    
            </v-col>
        </v-row>
    </div>
    
  </v-app>
</template>

<script>
export default {
    name: 'BookingDetail',
    data () {
      return {
        // x
        menu: false,

        itemsCarousel: [
          {
            src: 'https://ik.imagekit.io/yudha/practice_admin/room_1_3qvD5PqxS?ik-sdk-version=javascript-1.4.3&updatedAt=1654877227603',
          },
          {
            src: 'https://ik.imagekit.io/yudha/elstore/Laptop_-HwoBx1gQ?ik-sdk-version=javascript-1.4.3&updatedAt=1652867751387',
          },
          {
            src: 'https://ik.imagekit.io/yudha/restoProduct/French_fries.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652529804615',
          },
          {
            src: 'https://ik.imagekit.io/yudha/elstore/Computer_FE_BwYyKo?ik-sdk-version=javascript-1.4.3&updatedAt=1652867878583', 
          },
        ],
    
      }
    },


}
</script>

<style scoped>
    .content-1 {
        margin-top: 100px;
    }

</style>
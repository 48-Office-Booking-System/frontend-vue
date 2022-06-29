<template>
  <v-app>

    <v-app-bar
            app height="70" 
            class="px-10"
            color="#FCFDFF"
            flat
        >
            <div class="logo">
                <a href="/homepage">
                    <v-img src="../../assets/kobaspace.png" />
                </a>
            </div>


            <div class="nav mx-10">
                <v-btn 
                    text
                    small
                    color="#28304E"
                    height="0"
                    to="/offices"
                >
                    Gedung
                </v-btn>
                <v-btn
                    text
                    small
                    color="#28304E"
                    height="0"
                    to="/payment"
                >
                    Metode Pembayaran
                </v-btn>
                <v-btn 
                    text
                    small
                    color="#28304E"
                    height="0"
                    to="/aboutus"
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
            

            <div>
                <v-btn
                    class="ml-4"
                    color="#455392"
                    dark
                    to="/"
                >
                    Masuk
                </v-btn>

                <v-btn
                    class="ml-4"
                    outlined
                    color="#455392"
                    to="/register"
                >
                    Daftar
                </v-btn>
            </div>

        </v-app-bar>

    <div class="content-1 px-16">
        <v-row>
            <v-col cols="5">
                <v-card class="pa-4">
                    <v-row>
                        <v-col>
                            <v-card-title class="px-0">
                                {{ office.name }}
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
                                <s>Rp. 2000000 / Jam</s>
                            </v-card-text>
                            
                            <v-card-title class="ma-0 py-0 px-0">
                                Rp. {{ office.price }} / Jam
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
                    
                    <div class="subtitle green--text">
                        Jadwal Tersedia
                    </div>
                    
                    <div class="body-2 my-2">
                        1 Jam x Rp. {{ office.price }}
                    </div>

                    <v-divider></v-divider>

                    <div class="subtitle font-weight-bold my-4">
                        Pilih Metode Pembayaran
                    </div>

                    <v-radio-group v-model="paymentMethod">
                        <v-radio
                            value="BCA"
                            class="mt-2"
                        >
                            <template v-slot:label>
                                <v-btn elevation="0" outlined block x-large>
                                    <img src="../../assets/pembayaran/BCA.png" alt="">
                                    <v-spacer></v-spacer>
                                    1234567800000
                                </v-btn>
                            </template>
                        </v-radio>
                        <v-radio
                            value="BNI"
                            class="mt-2"
                        >
                            <template v-slot:label>
                                <v-btn elevation="0" outlined block x-large>
                                    <img src="../../assets/pembayaran/BNI.png" alt="">
                                    <v-spacer></v-spacer>
                                    1234567800000
                                </v-btn>
                            </template>
                        </v-radio>
                        <v-radio
                            value="BRI"
                            class="mt-2"
                        >
                            <template v-slot:label>
                                <v-btn elevation="0" outlined block x-large>
                                    <img src="../../assets/pembayaran/BRI.png" alt="">
                                    <v-spacer></v-spacer>
                                    1234567800000
                                </v-btn>
                            </template>
                        </v-radio>
                        <v-radio
                            value="CIMB"
                            class="mt-2"
                        >
                            <template v-slot:label>
                                <v-btn elevation="0" outlined block x-large>
                                    <img src="../../assets/pembayaran/Cimb Niaga.png" alt="">
                                    <v-spacer></v-spacer>
                                    1234567800000
                                </v-btn>
                            </template>
                        </v-radio>
                        <v-radio
                            value="Panin"
                            class="mt-2"
                        >
                            <template v-slot:label>
                                <v-btn elevation="0" outlined block x-large>
                                    <img src="../../assets/pembayaran/panin.png" alt="">
                                    <v-spacer></v-spacer>
                                    1234567800000
                                </v-btn>
                            </template>
                        </v-radio>
                    </v-radio-group>

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
                
                <img :src="office.photo" height="435" width="100%" alt="">

                <div class="title mt-4">
                    Deskripsi
                </div>
                <div class="body-2">
                    {{ office.description }}
                </div>

                <div class="title mt-4">
                    Alamat
                </div>
                <div class="body-2">
                    {{ office.location }}
                </div>

            </v-col>
        </v-row>

    </div>

    <v-footer color="#121950" class="mt-10 py-3" padless>
      <v-col class="text-center" cols="12">
        <div class="body-regular-2 white--text">
          Copyright Ⓒ 2022 KOBASpace. All Right Reserved.
        </div>
      </v-col>
    </v-footer>
    
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
    name: 'OfficeDetail',
    data () {
      return {
        // x
        menu: false,
        office: []
    
      }
    },
    async mounted() {
    this.initialize()
    },
    methods: {
        async loadDataOffices() {
        const response = await axios.get(`http://localhost:3000/offices/${this.$route.params.id}`)
        this.office = response.data
        console.log(this.office)
        },
        initialize() {
        this.loadDataOffices()
        }
    }


}
</script>

<style scoped>
    .content-1 {
        margin-top: 100px;
    }

</style>
<template>
  <v-app>

    <Navbar/>
    <Chat />

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
                            <v-card-title class="px-0">
                                Rp. {{ office.price }} / Jam
                            </v-card-title>
                        </v-col>
                    </v-row>

                    <v-row class="px-0">
                        <!-- Tanggal -->

                        <v-col cols="6">
                            <v-menu
                             ref="menuDateStart"
                             v-model="menuDateStart"
                             :close-on-content-click="false"
                             :return-value.sync="start_date"
                             transition="scale-transition"
                             offset-y
                             max-width="290px"
                             min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="start_date"
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
                                v-if="menuDateStart"
                                 v-model="start_date"
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="menuDateStart = false"

                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menuDateStart.save(start_date)"
                                >
                                    OK
                                </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                        <!-- <v-col cols="6">
                            <v-menu
                             ref="menuDateEnd"
                             v-model="menuDateEnd"
                             :close-on-content-click="false"
                             :return-value.sync="end_date"
                             transition="scale-transition"
                             offset-y
                             max-width="290px"
                             min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="end_date"
                                        label="Pilih Akhir Tanggal"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                        solo
                                        dark
                                        background-color="#28304E"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                v-if="menuDateEnd"
                                v-model="end_date"
                                :min="start_date"
                                >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="menuDateEnd = false"

                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menuDateEnd.save(end_date)"
                                >
                                    OK
                                </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col> -->
                        <v-col cols="3">
                            <v-menu
                                ref="menuStart"
                                v-model="menuStart"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="start_time"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="start_time"
                                    label="Start"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    solo
                                    dark
                                    background-color="#28304E"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                v-if="menuStart"
                                v-model="start_time"
                                :max="end_time"
                                format="24hr"
                                use-seconds
                                full-width
                                @click:second="$refs.menuStart.save(start_time)"
                                ></v-time-picker>
                                
                            </v-menu>
                        </v-col>
                        <v-col cols="3">
                            <v-menu
                                ref="menuEnd"
                                v-model="menuEnd"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="end_time"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="end_time"
                                    label="End"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    solo
                                    dark
                                    background-color="#28304E"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                v-if="menuEnd"
                                v-model="end_time"
                                :min="start_time"
                                format="24hr"
                                use-seconds
                                full-width
                                @click:second="$refs.menuEnd.save(end_time)"
                                ></v-time-picker>
                                
                            </v-menu>
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
                         class="mb-2"
                         color="#28304E"
                         dark
                         large
                         block
                         @click="makeTransaction(office.id)"
                        > 
                            Pesan Sekarang
                        </v-btn>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="7">
                
                <v-carousel
                hide-delimiter-background
                delimiter-icon="mdi-minus"
                height="435"
                >
                    <v-carousel-item
                        v-for="photo in office.photo_urls"
                        :key="photo.id"
                        :src="photo.url"
                    >
                        
                    </v-carousel-item>
                </v-carousel>

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
                   <b>Ini adalah alamat lengkap . . . </b>
                </div>

                
                
                <l-map style="height: 300px; position: sticky; " :zoom="zoom" :center="[latitude, longitude]">
                    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                    <l-marker :lat-lng="[latitude, longitude]"></l-marker>
                </l-map>


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
import Navbar from "@/components/NavBarUser.vue"
import Chat from "@/components/Chat.vue"
import axios from 'axios'
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'
export default {
    name: 'OfficeDetail',
    components: {
        LMap,
        LTileLayer,
        LMarker,
        Navbar,
        Chat
    },
    data () {
      return {
        // Tanggal
        date_now: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menuDateStart: false,
        menuDateEnd: false,
        start_date: '',
        end_date: '',

        

        paymentMethod: '',

        // Jam
        start_time: null,
        end_time: null,
        menuStart: false,
        menuEnd: false,
        menu: false,
        
        user_id: this.$store.state.userId,
        office: [],
        latitude: 0,
        longitude:0,

        // Maps
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 16,
      }
    },
    async mounted() {
    this.initialize()
    },
    methods: {
        async loadDataOffices() {
        const response = await axios.get(`http://34.207.166.213/office/${this.$route.params.id}`)
        this.office = response.data.data
        this.latitude = Number(response.data.data.latitude)
        this.longitude = Number(response.data.data.longitude)
        console.log(this.office)
        },

        

        async loadDataUser() {
            const response = await axios.get(`http://34.207.166.213/user/13`)
            console.log(response.data.data)
        },

        initialize() {
        this.loadDataOffices()
        this.loadDataUser()
        },

        makeTransaction(id) {
            axios.post(`http://34.207.166.213/booking`, {
                user_id: Number(this.user_id),
                office_id: Number(id),
                status_id: 1,
                start_date: this.start_date+" 00:00:00 WIB",
                end_date: this.start_date+" 00:00:00 WIB",
                start_hour: this.start_date+" " + this.start_time+ " WIB",
                end_hour: this.start_date+" " + this.end_time+ " WIB"



            }).then(response=>{
                console.log(response)
            })
            this.$router.push({name:"History Page"})
            
        }
    }


}
</script>

<style scoped>
    .content-1 {
        margin-top: 100px;
    }

</style>
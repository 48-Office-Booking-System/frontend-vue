<template>
    <v-app>
        <v-app-bar
            app height="70" 
            class="px-10"
            color="#FCFDFF"
            flat
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

        <div class="banner-iklan">
            <v-img src="../../assets/home/banner.png" width="100%" alt="">
                <v-row class="ma-0 fill-height" align="center">
                    <v-col>
                        <div class="heading-1 white--text text-center">
                            Sewa Ruangan yang Anda Inginkan <br> di KOBASpace
                        </div>
                        <div class="heading-3-regular white--text text-center mt-4">
                            Terjangkau, Terjamin, Terbaik
                        </div>
                    </v-col>
                    <v-col></v-col>
                </v-row>
            </v-img>
            
        </div>

        <div class="best-seller mt-16 px-16">
            <div class="heading-1 text-center indigo--text text--darken-3">
                Rekomendasi ruangan meeting
            </div>
            <div class="heading-3-regular text-center indigo--text text--darken-3 mb-10">
               Temukan, Booking, dan gunakan dengan instant
            </div>


            <v-row>
                <v-col v-for="office in officesRec"
                 :key="office.id"
                >     
                    <v-card
                        class="mx-auto"
                        max-width="330"
                    >
                        <v-carousel 
                        v-model="model" 
                        hide-delimiters 
                        height="279"
                        >
                            <v-carousel-item
                            >
                                <img :src="office.photo" height="100%" alt="">
                            </v-carousel-item>
                        </v-carousel>

                        <div class="lead-paragraph grey--text text--darken-3 px-4 pt-2">
                            {{ office.name }}
                        </div>



                        <v-row class="text-left grey--text text--darken-2 px-4 pt-4">
                            <v-col cols="4">
                                <div class="body-regular-2 mb-2">
                                    Kapasitas
                                </div>                                
                                <div class="body-regular-2 mb-2">
                                    Harga
                                </div>
                            </v-col>
                            <v-col cols="8">
                                <div class="body-regular-2 mb-2">
                                    : {{ office.kursi_min }} - {{ office.kursi_max }} Orang
                                </div>
                                <div class="body-regular-2 mb-2">
                                    : Rp. {{ office.price }}/jam
                                </div>
                            </v-col>
                        </v-row>


                    </v-card>
                </v-col>
            </v-row>
        </div>

        <div class="reason-content mt-16">
            <v-row 
             class="fill-height text-center"
             align="center"
             justify="center"
            >
                <v-col>
                    <div class="heading-1 px-16 white--text">
                        Mengapa memilih<br><span class="orange--text">KOBA</span>Space ?
                    </div>
                </v-col>
                <v-col>
                    <div class="heading-2-regular text-left white--text">
                        <div class="py-2">
                            <v-icon large left>mdi-credit-card-multiple</v-icon>
                            Harga sewa terjangkau
                        </div>
                        <div class="py-2">
                            <v-icon large left>mdi-domain</v-icon>
                            Kualitas ruangan yang terjamin
                        </div>
                        <div class="py-2">
                            <v-icon large left>mdi-thumb-up-outline</v-icon>
                            Tersedia fasilitas yang terbaik
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>

        <div class="testimoni py-16">
            <div class="heading-1 text-center indigo--text text--darken-3 mb-8">
                Testimoni
            </div>
            <v-sheet
                class="mx-auto"
                elevation="0"
                max-width="100%"
                color="#fff"
            >
                <v-slide-group
                class="pa-4"
                center-active
                show-arrows
                >
                <v-slide-item
                    v-for="review in reviews"
                    :key="review.id"
                >
                    <v-card
                    class="ma-4 pa-4 text-center"
                    color="blue lighten-5"
                    width="365"
                    >
                
                    <img :src="offices[review.id_office-1].photo" width="100%" height="200" alt="">

                    <v-rating
                    :value="review.rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="20"
                    ></v-rating>

                    <div class="heading-3-regular">
                        {{ review.review }}
                    </div>

                    <div class="body-regular-3">
                        - {{ review.name }} -
                    </div>

                    </v-card>
                </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </div>

        <v-footer color="#121950" class="mt-5" padless>
            <v-col
            class="text-center py-10"
            cols="12"
            >

            <img src="../../assets/logo only.png" alt="">

            <div class="heading-1 white--text">
                <span class="orange--text text--darken-3">KOBA</span>Space
            </div>

            <div class="lead-paragraph white--text max-width-footer">
                <span class="orange--text text--darken-3">KOBA</span>Space merupakan platform berupa website dan aplikasi untuk melakukan pemesanan ruang kerja atau event lainnya.
            </div>

            <div class="body-regular-2 white--text mt-10">
                Copyright Ⓒ 2022 KOBASpace. All Right Reserved.
            </div>
            </v-col>
        </v-footer>
        
    </v-app>
</template>

<script>
import axios from 'axios'
export default {
    name: 'HomePage',
    data() {
        return {

            // https://stackoverflow.com/questions/46775024/property-or-method-not-defined-in-vue-file
            // n apa?
            



            officesRec: [],
            offices: [],
            reviews: [],
            model: 0,
        }
    },

    async mounted() {
        this.initialize()
    },

    methods: {
        async loadDataOffice() {
            const response = await axios.get(`http://localhost:3000/offices`)
            this.offices = response.data
        },
        async loadDataOfficeRec() {
            const response = await axios.get(`http://localhost:3000/officesRec`)
            this.officesRec = response.data
        },
        async loadDataReviews() {
            const response = await axios.get(`http://localhost:3000/reviews`)
            this.reviews = response.data
        },
        initialize() {
            this.loadDataOffice()
            this.loadDataOfficeRec()
            this.loadDataReviews()
        }
    }
    
    
}
</script>

<style scoped>
    .banner-iklan {
        margin-top: 70px;
    }
    
    .heading-1 {
        font-family: 'Nunito', sans-serif;
        font-weight: 700 !important;
        font-size: 32px !important;
        
    }
    .heading-3-regular {
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
    }
    .heading-3-bold {
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
    }
    .heading-2-regular {
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
    }

    .body-regular-2 {
        font-family: 'Work Sans', sans-serif;
        font-weight: 400 !important;
        font-size: 14px !important;
        font-style: normal !important;
        line-height: 14px !important;
    }
    .body-regular-3 {
        font-family: 'Work Sans', sans-serif;
        font-weight: 400 !important;
        font-size: 12px !important;
    }
    .reason-content {
        height: 384px;
        background-color: #606FAA;
    }


    .lead-paragraph{
        font-family: 'Work Sans', sans-serif;
        font-size: 20px !important;
        font-weight: 700 !important;
        line-height: 23px !important;
    }

    .max-width-footer {
        max-width: 50%;
        margin: 0 auto;
    }



</style>
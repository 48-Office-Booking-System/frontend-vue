<template>
    <v-app>
        <v-app-bar
            app height="70" 
            class="px-10"
            color="primary"
            flat
            dark
        >
            <div class="logo">
                <h2>Logo</h2>
            </div>

            <div class="nav mx-10">
                <v-btn 
                    text
                    small
                >
                    Gedung
                </v-btn>
                <v-btn
                    text
                    small
                >
                    Pembayaran
                </v-btn>
                <v-btn 
                    text
                    small
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
            />
            

            <div>
                <v-btn
                    class="ml-4"
                >
                    Masuk
                </v-btn>

                <v-btn
                    class="ml-4"
                >
                    Daftar
                </v-btn>
            </div>

        </v-app-bar>

        <div class="banner-iklan">
            <v-img src="../assets/banner.png" width="100%" alt="">
                <v-row class="text-center ma-0 fill-height" align="center">
                    <v-col>
                        <div class="heading-1">
                            Banner Iklan
                        </div>
                    </v-col>
                </v-row>
            </v-img>
            
        </div>

        <div class="best-seller text-center mt-16">
            <div class="heading-1">
                BEST SELLER Ruangan Meeting
            </div>
            <div class="heading-3-regular mb-10">
                Best Seller Ruangan Meeting
            </div>
            <v-carousel 
             v-model="model" 
             hide-delimiters 
             height="384"
             class="px-16"
            >
                <v-carousel-item
                v-for="(color, i) in colors"
                :key="color"
                >
                <v-sheet
                    :color="color"
                    height="100%"
                    tile
                >
                    <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                    >
                    <div class="text-h2">
                        Slide {{ i + 1 }}
                    </div>
                    </v-row>
                </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </div>

        <div class="reason-content mt-16">
            <v-row 
             class="fill-height text-center"
             align="center"
             justify="center"
            >
                <v-col cols="5">
                    <div class="heading-1 px-16">
                        Alasan menggunakan website ini
                    </div>
                </v-col>
                <v-col cols="7">
                    <div class="heading-3-regular">
                        Keuntungan website ini <br>
                        Keuntungan website ini <br>
                        Keuntungan website ini <br>
                        Keuntungan website ini
                    </div>
                </v-col>
            </v-row>
        </div>

        <div class="testimoni py-16">
            <div class="heading-1 text-center mb-8">
                Testimoni
            </div>
            <v-sheet
                class="mx-auto"
                elevation="0"
                max-width="100%"
                color="#AFB2B7"
                dark
            >
                <v-slide-group
                v-model="testimoni"
                class="pa-4"
                center-active
                show-arrows
                >
                <v-slide-item
                    v-for="n in 9"
                    :key="n"
                    v-slot="{ active, toggle }"
                >
                    <v-card
                    :color="active ? 'primary' : '#fff'"
                    class="ma-4"
                    height="263"
                    width="365"
                    @click="toggle"
                    >
                    <div class="heading3-regular text-center" style="color: #000;">
                        Testimoni {{n}}
                    </div>
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                        <v-scale-transition>
                        <v-icon
                            v-if="active"
                            color="white"
                            size="48"
                            v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                        </v-scale-transition>
                    </v-row>
                    </v-card>
                </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </div>

        <v-footer color="#AFB2B7" class="mt-5" padless>
            <v-col
            class="text-center py-16"
            cols="12"
            >
            <div class="heading-1">
                Copyright
            </div>
            </v-col>
        </v-footer>
        
    </v-app>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            model: 0,
            testimoni: null,
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
        }
    }
}
</script>

<style scoped>
    .banner-iklan {
        margin-top: 70px;
    }
    .banner-iklan .heading-1 {
        color: #fff !important;
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
        text-align: center;
    }
    .body-regular-2 {
        font-family: 'Work Sans', sans-serif;
        font-weight: 400 !important;
        font-size: 14px !important;
        color: #121950 !important;
    }
    .body-regular-3 {
        font-family: 'Work Sans', sans-serif;
        font-weight: 400 !important;
        font-size: 12px !important;
        color: #121950 !important;
    }
    /* .best-seller {
        
    } */
    .reason-content {
        height: 384px;
        background-color: #AFB2B7;
    }
    .testimoni {
        background-color: #AFB2B7;
    }
</style>
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
                    to="/booking"
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

        <div class="content" padless>
            <v-col
            class="text-center py-10"
            cols="12"
            >

            <img src="../../assets/logo only.png" alt="">

            <div class="heading-1 indigo--text text--darken-4">
                <span class="orange--text text--darken-3">KOBA</span>Space
            </div>
            <br>
            <div class="lead-paragraph indigo--text text--darken-4">
                <span class="orange--text text--darken-3">KOBA</span>Space merupakan platform berupa website dan 
                <br>
                aplikasi untuk melakukan pemesanan ruang kerja atau 
                <br>
                event lainnya.
            </div>

            </v-col>
        </div>

        <v-footer class="ftr" color="#121950" padless>
            <v-col
            class="text-center white--text"
            cols="12"
            >
            <strong>Copyright Ⓒ 2022 KOBASpace. All Right Reserved.</strong>
            </v-col>
        </v-footer>        
        
    </v-app>
</template>

<script>
export default {
    name: "AboutUsPage",
    
}
</script>

<style scoped>

    .content {
        margin-top: 10%;
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
        font-style: bold;
        font-size: 20px !important;
        font-weight: 700 !important;
        line-height: 23px !important;
    }

    .max-width-footer {
        max-width: 50%;
        margin: 0 auto;
    }

    .ftr {
        margin-top: 138px;
    }

</style>
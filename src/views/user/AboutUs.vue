<template>
    <v-app>

        <Navbar/>

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

        <v-footer color="#121950" class="mt-auto py-3" padless>
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
export default {
    name: "AboutUsPage",
    components: {
        Navbar
    }
    
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
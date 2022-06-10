<template>
  <v-app>
      <v-app-bar
            app height="70" 
            class="px-10"
            color="#FCFDFF"
            flat
        >
            <div class="logo">
                <v-img src="../assets/kobaspace.png" />
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

        <div class="container">
            <h1>Content</h1>
        </div>

        <v-footer color="#121950" class="mt-5" padless>
            <v-col
            class="text-center py-10"
            cols="12"
            >

            <img src="../assets/logo only.png" alt="">

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
export default {
    name:'paymentView'
}
</script>

<style>

</style>
<template>
  <v-container>
    <v-app-bar
        app height="70" 
        class="px-10"
        color="#FCFDFF"
        elevation="0"
    >
        <div class="logo">
            <a href="/homepage">
                <v-img src="../assets/kobaspace.png" />
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
            <v-btn 
                text
                small
                color="#28304E"
                height="0"
                to="/history"
            >
                Riwayat Transaksi
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
             icon
             large
             class="ml-4"
            >
                <v-icon x-large>
                    mdi-account-circle
                </v-icon>
            </v-btn>
        </div>

    </v-app-bar>

  </v-container>
</template>

<script>
export default {
    name: 'ComponentNavbar'

}
</script>

<style>

</style>
<template>
  <!-- Navbar -->
    <v-app-bar
            app height="70" 
            class="px-10"
            color="#FCFDFF"
            fixed
            
        >
            <div class="logo">
                <v-img src="../assets/booking/kobaspace.png" />
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
</template>
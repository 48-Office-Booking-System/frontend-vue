<template>
  <!-- Navbar -->
    <v-app-bar app height="70" class="px-10" color="#455392" flat dark>
      <div class="logo">
        <img src="../assets/booking/Logo.png" alt="" />
      </div>

      <div class="nav mx-10">
        <v-btn text small> Gedung </v-btn>
        <v-btn text small> Pembayaran </v-btn>
        <v-btn text small> Tentang Kami </v-btn>
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
        <v-btn class="ml-4"> Masuk </v-btn>

        <v-btn class="ml-4"> Daftar </v-btn>
      </div>
    </v-app-bar>
</template>
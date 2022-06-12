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

      <v-main>
        <v-list>
            <v-list-group
              v-model="testimoni"
              no-action
            >
            <template v-slot:activator>
                     <v-list-item-content class="pa-4 rounded-pill">
                         <v-list-item-title>
                             <img src="../assets/logo-bcapng-32694.png" alt="logo bank BCA">
                             <div class="pa-4 text-end font-weight-black">
                             <p>123456780000</p>
                             </div>
                         </v-list-item-title>
                     </v-list-item-content>
            </template>

        <v-list-item
        >
          <v-list-item-content>
            <v-list-item-title>
                <p>list item</p>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
            </v-list-group>
        </v-list>
      </v-main>

        <v-footer color="#121950" class="mt-5" padless>
            <v-col
            class="text-center py-10"
            cols="12"
            >
            <div class="body-regular-2 white--text mt-10">
                Copyright Ⓒ 2022 KOBASpace. All Right Reserved.
            </div>
            </v-col>
        </v-footer>
  </v-app>
</template>

<script>
export default {
    name:'paymentView',
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

<style>
.v-list-item {
    padding: 0 25px;
    margin: 0px 321px 0px 321px;
}
img {
    width: 100px;
}
</style>
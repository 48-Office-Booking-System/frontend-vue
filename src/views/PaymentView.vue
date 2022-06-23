<template>
  <v-app>
      <v-app-bar
            app height="70" 
            class="px-10"
            color="#FCFDFF"
            fixed
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
            

            <v-icon large color="#455392" class="ml-4">
                mdi-account-circle
            </v-icon>
        </v-app-bar>

      <v-main>
        <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              no-action
              color="black"
            >
            <template v-slot:activator>
                     <v-list-item-content 
                        class="pa-4 rounded-pill"
                        >
                         <v-list-item-title
                         >
                             <v-row no-gutters>
                              <v-col
                                 cols="4"
                                 md="4"
                              >
                              <img src="../assets/logo-bcapng-32694.png" alt="logo bca">
                              </v-col>
                              <v-col
                                 cols="4"
                                 md="4"
                              >
                                <p class="font-weight-black">1234567800000</p>
                              </v-col>
                              <v-col>
                                <v-btn 
                                   class="text-decoration-underline"
                                   text
                                >
                                   SALIN
                                </v-btn>
                              </v-col>
                             </v-row>
                         </v-list-item-title>
                     </v-list-item-content>
            </template>

        <v-list-item
           v-for="child in item.items"
           :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title 
               v-text="child.title">
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
            </v-list-group>
        </v-list>

       <v-spacer></v-spacer>

        <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              no-action
              color="black"
            >
            <template v-slot:activator>
                     <v-list-item-content class="pa-4 rounded-pill">
                         <v-list-item-title>
                             <v-row no-gutters>
                              <v-col
                                 cols="4"
                                 md="4"
                              >
                              <img src="../assets/Bank BNI.png" alt="logo bni">
                              </v-col>
                              <v-col
                                 cols="4"
                                 md="4"
                              >
                                <p class="font-weight-black">1234567800000</p>
                              </v-col>
                              <v-col>
                                <v-btn 
                                   class="text-decoration-underline"
                                   text
                                 >
                                   SALIN
                                </v-btn>
                              </v-col>
                             </v-row>
                         </v-list-item-title>
                     </v-list-item-content>
            </template>

        <v-list-item
           v-for="child in item.items"
           :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title
                v-text="child.title"
            >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
            </v-list-group>
        </v-list>

        <v-spacer></v-spacer>

        <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              no-action
              color="black"
            >
            <template v-slot:activator>
                     <v-list-item-content class="pa-4 rounded-pill">
                         <v-list-item-title>
                             <v-row no-gutters>
                              <v-col
                                 cols="4"
                                 md="4"
                              >
                              <img src="../assets/Bank-BRI.png" alt="logo bri">
                              </v-col>
                              <v-col
                                 cols="4"
                                 md="4"
                              >
                                <p class="font-weight-black">1234567800000</p>
                              </v-col>
                              <v-col>
                                <v-btn 
                                   class="text-decoration-underline"
                                   text
                                >
                                   SALIN
                                </v-btn>
                              </v-col>
                             </v-row>
                         </v-list-item-title>
                     </v-list-item-content>
            </template>

        <v-list-item
           v-for="child in item.items"
           :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title
                v-text="child.title"
            >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
            </v-list-group>
        </v-list>

        <v-spacer></v-spacer>

        <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              no-action
              color="black"
            >
            <template v-slot:activator>
                     <v-list-item-content class="pa-4 rounded-pill">
                         <v-list-item-title>
                             <v-row no-gutters>
                              <v-col
                                 cols="4"
                                 md="4"
                              >
                              <img src="../assets/Bank-Mandiri.png" alt="logo mandiri">
                              </v-col>
                              <v-col
                                 cols="4"
                                 md="4"
                              >
                                <p class="font-weight-black">1234567800000</p>
                              </v-col>
                              <v-col>
                                <v-btn 
                                   class="text-decoration-underline"
                                   text
                                >
                                   SALIN
                                </v-btn>
                              </v-col>
                             </v-row>
                         </v-list-item-title>
                     </v-list-item-content>
            </template>

        <v-list-item
           v-for="child in item.items"
           :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title
                v-text="child.title"
            >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
            </v-list-group>
        </v-list>

        <v-spacer></v-spacer>

        <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              no-action
              color="black"
            >
            <template v-slot:activator>
                     <v-list-item-content class="pa-4 rounded-pill">
                         <v-list-item-title>
                             <v-row no-gutters>
                              <v-col
                                 cols="4"
                                 md="4"
                              >
                              <img src="../assets/CIMB-NIAGA.png" alt="logo cimb niaga">
                              </v-col>
                              <v-col
                                 cols="4"
                                 md="4"
                              >
                                <p class="font-weight-black">1234567800000</p>
                              </v-col>
                              <v-col>
                                <v-btn 
                                   class="text-decoration-underline"
                                   text
                                >
                                   SALIN
                                </v-btn>
                              </v-col>
                             </v-row>
                         </v-list-item-title>
                     </v-list-item-content>
            </template>

        <v-list-item
           v-for="child in item.items"
           :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title
                v-text="child.title"
            >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
            </v-list-group>
        </v-list>

        <v-spacer></v-spacer>

        <v-list>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              no-action
              color="black"
            >
            <template v-slot:activator>
                     <v-list-item-content class="pa-4 rounded-pill">
                         <v-list-item-title>
                             <v-row no-gutters>
                              <v-col
                                 cols="4"
                                 md="4"
                              >
                              <img src="../assets/Logo Panin Bank.png" alt="logo panin bank">
                              </v-col>
                              <v-col
                                 cols="4"
                                 md="4"
                              >
                                <p class="font-weight-black">1234567800000</p>
                              </v-col>
                              <v-col>
                                <v-btn
                                   class="text-decoration-underline" 
                                   text
                                >
                                   SALIN
                                </v-btn>
                              </v-col>
                             </v-row>
                         </v-list-item-title>
                     </v-list-item-content>
            </template>

        <v-list-item
           v-for="child in item.items"
           :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title
                v-text="child.title"
            >
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
    data: () => ({
        items: [
            {
                items: [
                  { title: '1.Masukkan kartu ATM Anda ke mesin' },
                  { title: '2.Isi pin ATM' },
                  { title: '3.Klik Menu Transaksi Lainnya' },
                  { title: '4.Klik menu Transfer dan ke Rek BCA' },
                  { title: '5.Masukkan nomor rekening BCA' },
                  { title: '6.Masukkan nominal transfer BCA' },
                  { title: '7.Klik ya saat konfirmasi' },
                  { title: '8.Tunggu bukti transfer BCA muncul' },
                 ] 
            }
        ]
    })
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
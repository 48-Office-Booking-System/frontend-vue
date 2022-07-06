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
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              no-action
              color="black"
            >
            <template v-slot:activator>
                     <v-list-item-content
                        class="listItem pa-4 rounded-lg"
                        >
                         <v-list-item-title
                         >
                             <v-row no-gutters>
                              <v-col
                                 cols="2"
                                 md="2"
                              >
                              <img src="../../assets/pembayaran/BCA.png" alt="logo bca" width="85px">
                              </v-col>
                              <v-col
                                 cols="8"
                                 md="8"
                              >
                                <p class="font-weight-black text-end">1234567800000</p>
                              </v-col>
                              <v-col 
                                 cols="2"
                                 md="2"
                              >
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
           class="listitemcontent"
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
                                 cols="2"
                                 md="2"
                              >
                              <img src="../../assets/pembayaran/BNI.png" alt="logo bni" width="100px">
                              </v-col>
                              <v-col
                                 cols="8"
                                 md="8"
                              >
                                <p class="font-weight-black text-end">1234567800000</p>
                              </v-col>
                              <v-col
                                 cols="2"
                                 md="2"
                              >
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
           class="listitemcontent"
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
                                 cols="2"
                                 md="2"
                              >
                              <img src="../../assets/pembayaran/BRI.png" alt="logo bri" width="150px">
                              </v-col>
                              <v-col
                                 cols="8"
                                 md="8"
                              >
                                <p class="font-weight-black text-end">1234567800000</p>
                              </v-col>
                              <v-col
                                 cols="2"
                                 md="2"
                              >
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
           class="listitemcontent"
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
                                 cols="2"
                                 md="2"
                              >
                              <img src="../../assets/Bank-Mandiri.png" alt="logo mandiri" width="100px">
                              </v-col>
                              <v-col
                                 cols="8"
                                 md="8"
                              >
                                <p class="font-weight-black text-end">1234567800000</p>
                              </v-col>
                              <v-col
                                cols="2"
                                md="2"
                              >
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
           class="listitemcontent"
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
                                 cols="2"
                                 md="2"
                              >
                              <img src="../../assets/pembayaran/Cimb Niaga.png" alt="logo cimb niaga" width="200px">
                              </v-col>
                              <v-col
                                 cols="8"
                                 md="8"
                              >
                                <p class="font-weight-black text-end">1234567800000</p>
                              </v-col>
                              <v-col
                                cols="2"
                                md="2"
                              >
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
           class="listitemcontent"
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
                                 cols="2"
                                 md="2"
                              >
                              <img src="../../assets/Logo Panin Bank.png" alt="logo panin bank" width="200px">
                              </v-col>
                              <v-col
                                 cols="8"
                                 md="8"
                              >
                                <p class="font-weight-black text-end">1234567800000</p>
                              </v-col>
                              <v-col
                                cols="2"
                                md="2"
                              >
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
           class="listitemcontent"
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
export default {
    name: "PaymentMethod",
    data() {
        return{
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
        }
    }
    
}
</script>

<style>

.content {
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

.v-list-item {
  padding: 0 25px !important;
  margin: 0px 321px 0px 321px !important;
  border: 2px solid #121950 !important;
  border-radius: 8px !important;
}

.listitemcontent {
  border: #EDEFF3 !important;
  background-color: #EDEFF3 !important;
  border-radius: 0px !important;
}

p {
  padding-top: 10px;
  font-size: 25px;
  color: #121950;
}    
</style>
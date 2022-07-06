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

        <div 
          class="content"
          padless
        >
             <v-card
                 class="mx-auto"
                 color="#121950"
                 max-width="120"
                 max-height="152"
            >
              <div 
                 class="text-center"     
            >
                <v-img
                  src="../../assets/no-account.png"
                  max-width="90"
                  max-height="90"
                ></v-img>
              </div>
             <v-card-actions>
                 <v-btn
                     text
                     block
                     color="Black"
                     >
                    Ubah
                </v-btn>
            </v-card-actions>
          </v-card>
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
export default {
    name: "AboutUsPage",
    
}
</script>

<style>

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
.v-btn {
    background-color: #edeff3;
    margin: 0px;
    padding: 0px;
}
</style>
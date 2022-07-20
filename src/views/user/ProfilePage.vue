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
            rounded
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
                 class="profile mx-auto"
                 color="#121950"
                 width="175"
                 height="162"
            >
              <div 
                 class="text-center"     
            >
                <v-img
                  src="../../assets/kobaspace.png"
                  class="photo-profile"
                ></v-img>
              </div>
             <!-- <v-card-actions>
                 <v-btn
                     text
                     block
                     color="Black"
                     class="button-ubah"
                     >
                    Ubah
                </v-btn>
            </v-card-actions> -->
                <div class="button-ubah">
                    <v-btn
                        block
                        color="#edeff3"
                    >
                        Ubah
                    </v-btn>
                </div>
          </v-card>

          <div class="profile-bio">
            <v-row no-gutters>
                <v-col
                    cols="6"
                    md="6"
                    class="profile-user"
                >
                  <v-text-field
                        label="name"
                        prepend-inner-icon="mdi-account"
                        color="#121950"
                    >
                  </v-text-field>

                  <v-spacer></v-spacer>

                  <v-text-field
                        label="email"
                        prepend-inner-icon="mdi-email"
                        color="#121950"
                  >
                  </v-text-field>

                <v-spacer></v-spacer>

                <v-text-field
                    label="password"
                    prepend-inner-icon="mdi-lock"
                    color="#121950"
                >
                </v-text-field>

                <v-spacer></v-spacer>

                <v-text-field
                    label="numberPhone"
                    prepend-inner-icon="mdi-phone"
                    color="#121950"
                >
                </v-text-field>
                </v-col>

                <v-col
                    cols="4"
                    md="4"
                    class="profile-set"
                >
                <v-text-field
                    value="Edit Profile"
                    prepend-inner-icon="mdi-cog"
                    append-icon="mdi-chevron-right"
                    color="#121950"
                >
                </v-text-field>

                <v-spacer></v-spacer>

                <v-text-field
                    value="Review"
                    prepend-inner-icon="mdi-message-draw"
                    append-icon="mdi-chevron-right"
                    color="#121950"
                >
                </v-text-field>

                <v-spacer></v-spacer>

                <v-text-field
                    value="Riwayat Booking"
                    prepend-inner-icon="mdi-calendar-today"
                    append-icon="mdi-chevron-right"
                    color="#121950"
                >
                </v-text-field>

                <v-spacer></v-spacer>

                <v-text-field
                    value="Favorite"
                    prepend-inner-icon="mdi-heart"
                    append-icon="mdi-chevron-right"
                    color="#121950"
                >
                </v-text-field>

                <v-spacer></v-spacer>
                </v-col>
            </v-row>
          </div>
        </div>

        <div class="logout">
            <v-btn
                class="button-logout ma-2"
                outlined
                color="#FF4956"
                to="/"
            >
                <v-icon>mdi mdi-logout</v-icon>
                <v-text>Keluar</v-text>
            </v-btn>
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
.button-ubah {
    width: 175px;
    margin: -1px;
    padding: 0px;
}

.profile {
    padding: 1px;
    padding-right: 30px;
    margin: 0;
}

.photo-profile {
    border-radius: 5px;
    margin: 15px;
    width: 100%;
    height: 100px;
}

.profile-bio {
    margin-top: 40px;
}

.profile-user {
    margin-left: 341px;
    margin-right: 32px;
    max-width: 391px;
}

.profile-set {
    margin-left: 42px;
    max-width: 340px;
}

.logout {
    padding-top: 48px;
    padding-left: 640px;
    padding-bottom: 42px;
}

.button-logout {
    background-color: white !important;
    width: 240px;
    margin: 5px;
}
</style>
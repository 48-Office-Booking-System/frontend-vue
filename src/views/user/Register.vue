<template>
    <v-app>
        <v-row>
            <v-col class="pr-0 pb-0">
                <v-img height="100%" src="../../assets/login/background.png"/>
            </v-col>
            <v-col class="pl-0">
                <v-card class="mx-12" flat>
                    <v-card-text class="text-center heading-1">
                        Daftar
                    </v-card-text>

                    <v-card-text class="pa-0 body-regular-2">
                        Nama Lengkap
                    </v-card-text>
                    <v-text-field
                    outlined
                    placeholder="Masukan nama lengkap anda"
                    class="body-regular-3"
                    />

                    <v-card-text class="pa-0 body-regular-2">
                        Email
                    </v-card-text>
                    <v-text-field
                    outlined
                    placeholder="Masukan email anda"
                    class="body-regular-3"
                    />

                    <v-card-text class="pa-0 body-regular-2">
                    No. Telp
                    </v-card-text>
                    <v-text-field
                    outlined
                    placeholder="Masukan nomor telepon anda"
                    class="body-regular-3"
                    />

                    <v-card-text class="pa-0 body-regular-2">
                        Kata Sandi
                    </v-card-text>
                    <v-text-field
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    outlined
                    placeholder="Masukan kata sandi anda"
                    class="body-regular-3"
                    @click:append="showPassword = !showPassword"
                    />

                    <v-card-text class="pa-0 body-regular-2">
                        Ulangi Kata Sandi
                    </v-card-text>
                    <v-text-field
                    :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword2 ? 'text' : 'password'"
                    outlined
                    placeholder="Ketik ulang kata sandi anda"
                    class="body-regular-3"
                    @click:append="showPassword2 = !showPassword2"
                    />

                    <v-row>
                        <v-col class="text-left py-0">
                            <v-checkbox
                            class="my-0 py-0"
                            color="#121950"
                            >
                                <template v-slot:label>
                                    <div class="body-regular-3">
                                        Saya telah membaca dan setuju dengan persyaratan layanan
                                        dan polisi privasi kami
                                    </div>
                                </template>
                            </v-checkbox>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col class="text-center">
                            <v-btn
                            color="#606FAA"
                            dark
                            class="px-10"
                            >
                                Daftar
                            </v-btn>
                        </v-col>
                    </v-row>

                    <v-card-text class="text-center">
                        atau
                    </v-card-text>

                    <v-card-text class="text-center">
                        Sudah punya akun ? <a href="/">Masuk</a>
                    </v-card-text>
                    
                    
                </v-card>
            </v-col>
        </v-row>
    </v-app>
  
</template>

<script>
export default {
    name: "RegisterPage",
    data() {
        return {
            showPassword : false,
            showPassword2 : false
        }
    },
}
</script>

<style scoped>
 .heading-1 {
     font-family: 'Nunito', sans-serif;
     font-weight: 700 !important;
     font-size: 32px !important;
     color: #606FAA !important;
 }
 .body-regular-2 {
     font-family: 'Work Sans', sans-serif;
     font-weight: 400 !important;
     font-size: 14px !important;
     color: #121950 !important;
 }
 .body-regular-3 {
     font-family: 'Work Sans', sans-serif;
     font-weight: 400 !important;
     font-size: 12px !important;
     color: #121950 !important;
 }
 .link-forger-pass {
     color: #455392 !important;
 }
</style>

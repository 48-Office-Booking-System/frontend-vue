<template>
  <v-app>
    <v-row>
        <v-col class="pr-0 pb-0">
            <v-img height="100%" src="../../assets/Admin/login-bg.png"/>
        </v-col>
        <v-col class="pl-0">

            <template>
                <v-form
                    class="pa-10"
                    @submit.prevent="submit"
                >
                    <v-card class="mx-12 my-16" flat>
                            <v-card-text class="text-center heading-1">
                                Hello Admin
                            </v-card-text>

                            <v-card-text class="pa-0 body-regular-2">
                                Email
                            </v-card-text>
                            <v-text-field
                            outlined
                            placeholder="Masukan email anda"
                            class="body-regular-3"
                            v-model="email"
                            />

                            <v-card-text class="pa-0 body-regular-2">
                                Kata Sandi
                            </v-card-text>
                            <v-text-field
                            outlined
                            placeholder="Masukan kata sandi anda"
                            class="body-regular-3"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword = !showPassword"
                            v-model="password"
                            />

                            <v-row>
                                <v-col class="text-left py-0">
                                    <v-checkbox
                                    class="my-0 py-0"
                                    color="#121950"
                                    >
                                        <template v-slot:label>
                                            <div class="body-regular-3">
                                                Simpan Kata Sandi
                                            </div>
                                        </template>
                                    </v-checkbox>
                                </v-col>
                                <v-col class="text-right py-0">
                                    <a class="body-regular-3 link-forger-pass text-decoration-none" href="#">Lupa kata sandi ?</a>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col class="text-center">
                                    <v-btn
                                    color="#606FAA"
                                    dark
                                    class="px-10"
                                    type="submit"
                                    >
                                        Masuk
                                    </v-btn>
                                </v-col>
                            </v-row>
                            
                            <div v-if="showError" class="body-2 text-center mt-6 red--text">
                                Masukan Email / Password dengan benar!
                            </div>
                            
                        </v-card>
                    
                    
                </v-form>
            </template>
        </v-col>
    </v-row>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginAdmin',
    data: () => ({
            email: '',
            password: '',
            showPassword: false,
            showError: false,
        }),

        methods: {
            async submit() {
                let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
                console.warn(result)
                if(result.status==200 && result.data.length>0 && result.data[0].role_id==1) {
                    localStorage.setItem("admin-info", JSON.stringify(result.data[0]))
                    this.$router.push({name:"Data Offices"})
                    this.showError = false
                } else {
                    this.showError = true
                }
            }
        },
        // mounted() {
        //     let admin = localStorage.getItem('admin-info')
        //     if(admin) {
        //         this.$router.push({name: 'Data Offices'})
        //     }
        // }
    
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
 .link {
     color: #455392 !important;
 }
</style>

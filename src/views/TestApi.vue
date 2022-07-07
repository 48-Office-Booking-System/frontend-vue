<template>
  <v-app>
    <div class="ma-16">
        <!-- <v-form
         @submit.prevent="submit"

        >
            <v-text-field
            v-model="officeName"
            type="text"
            label="Office Name"
            />
            <v-text-field
            v-model="price"
            type="number"
            label="Price"
            />
            <v-text-field
            v-model="chair_min"
            type="number"
            label="Chair Minimum"
            />
            <v-text-field
            v-model="chair_max"
            type="number"
            label="Chair Maximal"
            />

            <v-btn
            type="submit"
            >
                Submit
            </v-btn>    
        </v-form> -->

        <v-text-field
            v-model="officeName"
            type="text"
            label="Office Name"
            />
            <v-text-field
            v-model="price"
            type="number"
            label="Price"
            />
            <v-text-field
            v-model="chair_min"
            type="number"
            label="Chair Minimum"
            />
            <v-text-field
            v-model="chair_max"
            type="number"
            label="Chair Maximal"
            />

            <v-btn
            @click="submit"
            >
                Submit
            </v-btn>
        
    </div>
    
    <div class="mx-16 mb-10" v-for="item in offices" :key="item.id">
        {{item}}
    </div>

  </v-app>
</template>

<script>
import axios from 'axios'
export default {
    name: 'TestApi',
    data() {
        return{
            offices: [],
            officeName: '',
            price: null,
            chair_min: null,
            chair_max: null,
        }
    },
    async mounted() {
        this.initialize()
    },
    methods: {
        async loadDataOffices() {
            const response = await axios.get(`http://34.207.166.213/office/all`)
            this.offices = response.data.data
            console.log(this.offices)
        },
        initialize () {
        this.loadDataOffices()
        
        },
        submit() {
            axios.post(`http://34.207.166.213/office`, {
                type_id: 1,
                name: this.officeName,
                description: "Ini adalah deskripsi",
                latitude:"-6.193125",
                longitude: "106.821810",
                price: 10000,
                chair_min: 5,
                chair_max: 7,
                number: "083123456789",
                photo_urls: [{
                  url: "link foto",
                }],
                facilitations: [{
                  id: 1
                }],
                tags: [{
                  id: 1
                }]
            }).then(response=>{
                console.log(response)
            })
        }

    },

    
}
</script>

<style>

</style>

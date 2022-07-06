<!-- <template>
  <v-app>
    Test Api

    <div v-for="item in test" :key="item">
        item
    </div>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
    name: 'TestApi',
    data() {
        return{
            test: []
        }
    },
    async mounted() {
        this.initialize()
    },
    methods: {
        async loadDataOffices() {
            const response = await axios.get(`http://34.207.166.213/office/all`)
            // this.test = response.data
            console.log(response)
        },
        initialize () {
        this.loadDataOffices()
        
        },
    }

    
}
</script>

<style>

</style> -->

<template>
    <v-app>
        <div class="ma-10">
            <h1>Upload Photo</h1>
            <img :src="previewImage" alt="" width="200" v-if="previewImage">

            <div>
                <input type="file" @change="upload">
                <!-- <v-btn
                 color="primary"
                >
                    Upload
                </v-btn> -->
            </div>
        </div>
        
    </v-app>
</template>

<script>
export default {
    name: 'TestApi',
    data(){
        return {
            previewImage: null,
        }
    },
    methods: {
        upload(e) {
            let files = e.target.files[0]
            this.previewImage = URL.createObjectURL(files)
        }
    }

}
</script>

<style>

</style>
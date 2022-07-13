<template>
  <v-app>
    <v-app-bar app height="70" class="px-10" color="#FCFDFF" flat>
      <div class="logo">
        <v-img src="../../assets/kobaspace.png" />
      </div>

      <div class="nav mx-10">
        <v-btn text small color="#28304E" height="0"> Gedung </v-btn>
        <v-btn text small color="#28304E" height="0"> Pembayaran </v-btn>
        <v-btn text small color="#28304E" height="0"> Tentang Kami </v-btn>
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
    </v-app-bar>

    <v-row>
      <v-col class="fav">
                <v-img height="100%" src="../../assets/ReviewPage/review.png"/>
            </v-col>
    </v-row>

    <v-footer color="#121950" class="mt-5 py-3" padless>
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
  name: "ReviewPage",
   data() {
    return {
      offices: [],
    };
  },
  methods: {
    setOffices(data) {
      this.offices = data;
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    axios
      .get("http://34.207.166.213/")
      .then((response) => this.setOffices(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.fav {
  margin-top: 100px;
}
</style>
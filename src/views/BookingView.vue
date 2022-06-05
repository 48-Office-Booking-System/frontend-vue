<template>
<div class="booking">
    <div class="container">
        <Navbar />
    </div>
    <div>
        <h2>
        this is booking page
    </h2>
    </div>
</div>
</template>

<script>
import Navbar from "@/components/NavbarItem.vue";

export default {
  name: "BookingView",
  components: {
    Navbar
}
}
</script>
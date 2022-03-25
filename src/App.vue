<template>
  <div class="min-h-screen w-full flex">
    <Navbar />
    <div class="w-full">
      <router-view />
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  export default {
    components: { Navbar },
  };
</script>

<style></style>

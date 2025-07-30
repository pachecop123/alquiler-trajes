<template>
  <div class="app-wrapper d-flex flex-column min-vh-100">
    <Navbar />
    <main class="flex-grow-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<style>
.app-wrapper {
  background-color: #f8f9fa;
}
</style>


<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue' // si ya tienes uno
</script>

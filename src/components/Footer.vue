<template>
  <footer class="footer text-center py-4 mt-auto bg-dark text-white">
    <div class="container">
      <img src="/images/logo.jpg" alt="Logo" class="footer-logo mb-2" />
      <p class="mb-1 fw-semibold">Casa De Alquiler Y Venta</p>
      <small class="text-light">© {{ year }} Todos los derechos reservados</small>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer-logo {
  height: 40px;
  border-radius: 5px;
  object-fit: contain;
}
</style>

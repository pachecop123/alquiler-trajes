<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
    <div class="container">
      <!-- LOGO + MARCA -->
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-2">
        <img src="/images/logo.jpg" alt="Logo" class="logo-img" />
        <span class="fw-bold text-dark brand-name">Casa De Alquiler Y Venta</span>
      </router-link>

      <!-- BOTÓN TOGGLE PARA MÓVIL -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- ENLACES -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav gap-2">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/catalogo" class="nav-link">Catálogo</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacto" class="nav-link">Contáctanos</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No requiere lógica por ahora
</script>

<style scoped>
.logo-img {
  height: 40px;
  object-fit: contain;
  border-radius: 6px;
}

.brand-name {
  font-size: 1.2rem;
  color: #5a189a;
}
</style>

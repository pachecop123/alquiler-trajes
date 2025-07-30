<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Catálogo de Trajes</h2>
    <div class="row g-4">
      <div class="col-md-4" v-for="traje in trajes" :key="traje.id">
        <TrajeCard :traje="traje" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TrajeCard from '../components/TrajeCard.vue'

const trajes = [
  { id: 1, nombre: 'Traje Clásico', descripcion: 'Ideal para bodas y eventos', imagen: '/images/traje1.jpg' },
  { id: 2, nombre: 'Smoking Elegante', descripcion: 'Perfecto para galas', imagen: '/images/traje2.jpg' },
  { id: 3, nombre: 'Traje de Negocios', descripcion: 'Formal y moderno', imagen: '/images/traje3.jpg' },
]
</script>

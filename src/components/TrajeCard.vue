<template>
  <div class="card h-100">
    <img :src="traje.imagen" class="card-img-top" alt="traje">
    <div class="card-body">
      <h5 class="card-title">{{ traje.nombre }}</h5>
      <p class="card-text">{{ traje.descripcion }}</p>
      <button class="btn btn-success" @click="alquilar">Alquilar</button>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'

defineProps(['traje'])

const alquilar = () => {
  Swal.fire('¡Gracias!', 'Tu solicitud de alquiler ha sido registrada.', 'success')
}
</script>

<template>
  <div class="container mt-5 mb-5">
    <h2 class="text-center fw-bold mb-5 text-title">Catálogo de Trajes</h2>

    <div class="row g-4">
      <div class="col-md-4" v-for="traje in trajes" :key="traje.id">
        <div class="card h-100 shadow-sm border-0">
          <img :src="traje.imagen" class="card-img-top" :alt="traje.nombre" />
          <div class="card-body text-center">
            <h5 class="fw-bold">{{ traje.nombre }}</h5>
            <p class="text-muted">{{ traje.descripcion }}</p>
            <a
              :href="generarLinkWhatsapp(traje.nombre)"
              target="_blank"
              class="btn btn-success btn-sm"
            >
              <i class="bi bi-whatsapp me-1"></i> Alquilar
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const whatsapp = '573005602541'

const trajes = [
  {
    id: 1,
    nombre: 'Traje de Boda Clásico',
    descripcion: 'Ideal para novios y padrinos.',
    imagen: '/images/boda.jpg'
  },
  {
    id: 2,
    nombre: 'Traje Ejecutivo Negro',
    descripcion: 'Perfecto para entrevistas y reuniones.',
    imagen: '/images/ejecutivo.jpg'
  },
  {
    id: 3,
    nombre: 'Smoking Gala Azul',
    descripcion: 'Eventos de etiqueta y cenas formales.',
    imagen: '/images/gala.jpg'
  }
]

const generarLinkWhatsapp = (nombreTraje) => {
  const mensaje = `Hola, estoy interesado en alquilar el traje: ${nombreTraje}`
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`
}
</script>

<style scoped>
.text-title {
  color: #5a189a;
}
</style>

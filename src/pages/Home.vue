<template>
  <div>
    <!-- HERO SECTION -->
    <section class="hero d-flex align-items-center text-white text-center">
      <div class="container position-relative z-2">
        <h1 class="display-4 fw-bold mb-3">Tu mejor estilo comienza aquí</h1>
        <p class="lead mb-4">Alquiler de trajes elegantes para bodas, eventos, galas y más.</p>
        <router-link to="/catalogo" class="btn btn-lg btn-primary shadow">Explorar Catálogo</router-link>
      </div>
    </section>

    <!-- VENTAJAS -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold text-title mb-5">¿Por qué elegirnos?</h2>
        <div class="row text-center g-4">
          <div class="col-md-4">
            <i class="bi bi-gem fs-1 text-primary mb-3"></i>
            <h5 class="fw-semibold">Trajes de Alta Gama</h5>
            <p>Materiales premium, tallas perfectas y estilos modernos.</p>
          </div>
          <div class="col-md-4">
            <i class="bi bi-emoji-smile-fill fs-1 text-success mb-3"></i>
            <h5 class="fw-semibold">Clientes Satisfechos</h5>
            <p>Más de 5000 clientes atendidos con éxito en todo el país.</p>
          </div>
          <div class="col-md-4">
            <i class="bi bi-truck fs-1 text-danger mb-3"></i>
            <h5 class="fw-semibold">Entrega a Domicilio</h5>
            <p>Recibe tu traje donde lo necesites, sin complicaciones.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CATEGORÍAS -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center fw-bold text-title mb-5">Nuestras Categorías</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="cat in categorias" :key="cat.id">
            <div class="card h-100 border-0 shadow-sm">
              <img :src="cat.imagen" class="card-img-top" alt="Categoría de traje" />
              <div class="card-body text-center">
                <h5 class="fw-bold">{{ cat.nombre }}</h5>
                <p class="text-muted">{{ cat.descripcion }}</p>
                <router-link to="/catalogo" class="btn btn-outline-primary btn-sm">Ver más</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIOS -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center fw-bold text-title mb-5">Testimonios</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="testi in testimonios" :key="testi.id">
            <div class="bg-white p-4 shadow-sm rounded h-100">
              <p>"{{ testi.mensaje }}"</p>
              <div class="mt-3 text-end">
                <strong>{{ testi.nombre }}</strong><br />
                <small class="text-muted">{{ testi.evento }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="py-5 cta-final text-white text-center">
      <div class="container">
        <h2 class="fw-bold mb-3">¿Listo para lucir impecable?</h2>
        <p class="lead mb-4">Explora nuestro catálogo y reserva tu traje hoy mismo.</p>
        <router-link to="/catalogo" class="btn btn-light btn-lg text-dark">Alquilar Ahora</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const categorias = [
  {
    id: 1,
    nombre: 'Trajes de Boda',
    descripcion: 'Para novios, padrinos y eventos románticos.',
    imagen: '/images/boda.jpg'
  },
  {
    id: 2,
    nombre: 'Ejecutivos y Negocios',
    descripcion: 'Proyecta profesionalismo con trajes formales.',
    imagen: '/images/ejecutivo.jpg'
  },
  {
    id: 3,
    nombre: 'Smoking y Gala',
    descripcion: 'Para eventos de etiqueta y celebraciones exclusivas.',
    imagen: '/images/gala.jpg'
  }
]

const testimonios = [
  { id: 1, nombre: 'Carlos G.', evento: 'Matrimonio', mensaje: 'El traje llegó perfecto y a tiempo. Excelente servicio.' },
  { id: 2, nombre: 'Lucía M.', evento: 'Evento empresarial', mensaje: 'Mi esposo lució impecable. Muy recomendados.' },
  { id: 3, nombre: 'Andrés P.', evento: 'Graduación', mensaje: 'Me ayudaron a elegir el mejor estilo. Volvería sin duda.' }
]
</script>

<style scoped>
.text-title {
  color: #5a189a;
}

/* HERO */
.hero {
  background: url('/images/hero-traje.jpg') no-repeat center center / cover;
  height: 90vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 1;
}

.hero .container {
  position: relative;
  z-index: 2;
}

/* CTA final */
/* .cta-final {
  background: linear-gradient(135deg, #1a1f2b, #2c3e50);
} */

</style>

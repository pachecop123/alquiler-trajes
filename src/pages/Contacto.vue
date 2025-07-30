<template>
  <div class="container mt-5 mb-5">
    <h2 class="mb-5 text-center fw-bold text-title">Contáctanos</h2>

    <div class="row g-5">
      <!-- Formulario de contacto -->
      <div class="col-lg-6">
        <div class="p-4 bg-white rounded shadow-sm h-100">
          <h5 class="fw-semibold mb-3">¿Tienes alguna duda?</h5>
          <form @submit.prevent="enviar">
            <div class="mb-3">
              <input v-model="nombre" class="form-control" placeholder="Tu nombre" required />
            </div>
            <div class="mb-3">
              <input v-model="email" type="email" class="form-control" placeholder="Tu correo electrónico" required />
            </div>
            <div class="mb-3">
              <textarea v-model="mensaje" class="form-control" rows="5" placeholder="Tu mensaje" required></textarea>
            </div>
            <button class="btn btn-primary w-100" type="submit">Enviar mensaje</button>
          </form>
        </div>
      </div>

      <!-- Información de contacto -->
      <div class="col-lg-6">
        <div class="p-4 bg-white rounded shadow-sm h-100">
          <h5 class="fw-semibold mb-4">Información de contacto</h5>

          <ul class="list-unstyled">
            <li class="mb-3">
              <i class="bi bi-geo-alt-fill text-primary me-2"></i>
              <a
                href="https://maps.app.goo.gl/EKhSCqAzVWMJ91mX8"
                target="_blank"
                class="text-decoration-none text-dark"
              >Cra 51B # 84 - 184 Local 101c, Barranquilla</a>
            </li>
            <li class="mb-3">
              <i class="bi bi-envelope-fill text-primary me-2"></i>
              <a href="mailto:contacto@alquiltrajes.com" class="text-decoration-none text-dark">
                iberiaexclusivo.to@gmail.com
              </a>
            </li>
            <li class="mb-3">
              <i class="bi bi-telephone-fill text-primary me-2"></i>
              300 560 2541
            </li>
            <li class="mb-3">
              <i class="bi bi-whatsapp text-success me-2"></i>
              <a
                href="https://wa.me/573005602541"
                target="_blank"
                class="text-decoration-none text-dark"
              >
                +57 300 560 2541
              </a>
            </li>
          </ul>

          <hr />

          <h6 class="fw-bold mb-2">Horarios de atención</h6>
          <ul class="list-unstyled">
            <li>Lunes a Sabado: 9:00 a.m. - 6:00 p.m.</li>
            <li>Domingos y festivos: Cerrado</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'
import { ref } from 'vue'

const nombre = ref('')
const email = ref('')
const mensaje = ref('')

const enviar = () => {
  Swal.fire({
    title: 'Mensaje enviado',
    text: 'Nos pondremos en contacto contigo pronto.',
    icon: 'success',
    confirmButtonColor: '#5a189a'
  })
  nombre.value = email.value = mensaje.value = ''
}
</script>

<style scoped>
.text-title {
  color: #5a189a;
}

@media (max-width: 768px) {
  h5 {
    font-size: 1.2rem;
  }
}
</style>

<template>
  <section class="banner">
    <div class="page-title">
      Desarrollador <br> Web
    </div>
    <div class="name" ref="resizableDiv">
      <div ref="resizableDiv1">
        JOSTIN
      </div>
      <div ref="resizableDiv2" class="text-end">
        SUSA
      </div>
    </div>
    <div class="social-media">
      <ul class="d-flex flex-column">
        <li>
          <a href="">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </li>
        <li>
          <a href="">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </a>
        </li>
        <li>
          <a href="">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </a>
        </li>
        <li>
          <a href="">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
      </ul>
    </div>
    <div class="section-bar"></div>
  </section>
</template>
<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

const resizableDiv = ref(null);
const resizableDiv1 = ref(null);
const resizableDiv2 = ref(null);

const adjustFontSize = () => {
  const width = resizableDiv.value.clientWidth;
  const fontSize = width / 4.5 // Aquí puedes ajustar cómo se relaciona el tamaño de fuente con el ancho de la pantalla
  resizableDiv.value.style.fontSize = `${fontSize}px`;
  resizableDiv2.value.style.fontSize = `${fontSize}px`;
};

onMounted(() => {
  adjustFontSize();
  window.addEventListener('resize', adjustFontSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', adjustFontSize);
});
</script>
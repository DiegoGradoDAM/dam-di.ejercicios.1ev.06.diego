<script setup>
  import MensajeEstatico from './components/MensajeEstatico.vue';
  import ListaEstatica from './components/ListaEstatica.vue';
  import LibroInfo from './components/LibroInfo.vue';
  import ImagenEstatica from './components/ImagenEstatica.vue';
  import TituloDinamico from './components/TituloDinamico.vue';
  import ListaTitulos from './components/ListaTitulos.vue';
  import ParrafoFormato from './components/ParrafoFormato.vue';
  import ImagenConTitulo from './components/ImagenConTitulo.vue';
  import CabeceraSesion from './components/CabeceraSesion.vue';
</script>

<template>
  <CabeceraSesion></CabeceraSesion>
  <h2>EJ02AP01: Aplicacion inicializada.</h2>
  <MensajeEstatico></MensajeEstatico>
  <ListaEstatica></ListaEstatica>
  <LibroInfo></LibroInfo>
  <ImagenEstatica></ImagenEstatica>
  <TituloDinamico></TituloDinamico>
  <ListaTitulos></ListaTitulos>
  <ParrafoFormato></ParrafoFormato>
  <ImagenConTitulo></ImagenConTitulo>
</template>

<style scoped>

</style>

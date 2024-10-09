<!-- HolaMundo.vue -->
<template>
    <div>
    <h1>{{ datos.mensaje }}</h1>
    <p>Autor: {{ datos.autor }}</p>
    <p>Fecha: {{ datos.dia }}/{{ datos.mes }}/{{ datos.anio }}</p>
   
    <button @click="cambiarDatos">Cambiar Datos</button>
    </div>
   </template>
   <script setup>
   import { reactive, onMounted } from 'vue';
   // Usamos reactive para crear un objeto reactivo
   const datos = reactive({
    mensaje: "¡Hola, Mundo!",
    autor: "Anónimo",
    dia: 1,
    mes: 1,
    anio: 2023
   });
   const cambiarDatos = () => {
    datos.mensaje = "¡Mensaje cambiado!";
    datos.autor = "Juan Pérez";
    datos.dia = 15;
    datos.mes = 12;
    datos.anio = 2024;
   };
   // Ciclo de vida: onMounted
   onMounted(() => {
    console.log("El componente HolaMundo ha sido montado");
   });
   </script>
   
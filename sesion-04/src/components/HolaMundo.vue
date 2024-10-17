<!-- HolaMundo.vue -->
<template>
    <div>
    <h1>{{ datos.mensaje }}</h1>
    <p>Autor: {{ datos.autor }}</p>
    <p>Fecha: {{ datos.dia }}/{{ datos.mes }}/{{ datos.anio }}</p>
    {{ datos.contador }}
    <button @click="cambiarDatos">Cambiar Datos</button>
    </div>
</template>
<script setup>
   import { reactive, onMounted, onUpdated, onBeforeMount,onUnmounted, onBeforeUpdate, ref } from 'vue';
   // Usamos reactive para crear un objeto reactivo
   const n = ref(0);
   const datos = reactive({
    mensaje: "¡Hola, Mundo!",
    autor: "Anónimo",
    dia: 1,
    mes: 1,
    anio: 2023,
    contador: n.value
   });
   const cambiarDatos = () => {
    datos.mensaje = "¡Mensaje cambiado!";
    datos.autor = "Juan Pérez";
    datos.dia = 15;
    datos.mes = 12;
    datos.anio = 2024;
    datos.contador = n.value;
   };
   //Funcion que se usara para que la hora cambie
   function actualizarHora(){
    let now = new Date();
    //Parte para obtener el tiempo añadido a los mensajes
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let milliseconds = String(now.getMilliseconds()).padStart(3, '0');

    // Formatear el mensaje en "hh.mm.ss.ms"
    return `${hours}.${minutes}.${seconds}.${milliseconds}`;
   }
   
   onBeforeMount(()=> {
    console.log("onBeforeMount -- "+actualizarHora());
   });
   // Ciclo de vida: onMounted
   onMounted(() => {
    console.log("El componente HolaMundo ha sido montado");
    console.log("onMounted -- "+actualizarHora());
   });
   onUpdated(()=> {
    console.log("onUpdated -- "+actualizarHora());
   })
   onUnmounted(()=> {
    console.log("onUnMounted -- "+actualizarHora());
   })
   onBeforeUpdate(()=> {
    console.log("onBeforeUpdate -- "+actualizarHora());
    n.value = n.value+1;
   })
</script>
   
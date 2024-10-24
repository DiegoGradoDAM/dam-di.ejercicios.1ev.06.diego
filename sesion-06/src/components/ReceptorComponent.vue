<template>
    <h3>--Receptor (1)</h3>
    <div v-if="mostrarMensaje">
        Mensaje recibido en Componente 1
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { eventBus } from '../eventBus.js';

const mostrarMensaje = ref(false);


watch(() => eventBus.id, (newId) => {
    mostrarMensaje.value = (newId === 1); 
});
</script>

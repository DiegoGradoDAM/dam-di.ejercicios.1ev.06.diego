<template>
    <button @click="enviarReceptor(1)">Enviar a Componente 1</button>
    <button @click="enviarReceptor(2)">Enviar a Componente 2</button>
</template>

<script setup>
import { eventBus } from '../eventBus.js';

function enviarReceptor(id) {
    eventBus.send(id);
}
</script>

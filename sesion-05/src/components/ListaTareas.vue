<template>
    <input v-model="nuevaTarea" placeholder="Escribe una nueva tarea" />
    <button id="boton" v-if="nuevaTarea" @click="agregarTarea">Agregar Tarea</button>
    
    <p v-if="tareas.length === 0">No hay tareas disponibles</p>
    <ul>
        <li v-for="(tarea, index) in tareas" :key="index" v-show="mostrarCompletadas || !tarea.completado">
            Tarea: {{ tarea.nombre }} - Completado: {{ tarea.completado }} 
            <input type="checkbox" v-model="tarea.completado" />
        </li>
    </ul>
    <button @click="mostrarCompletadas = !mostrarCompletadas">Mostrar/Ocultar tareas completadas</button>
</template>
<script setup>
    import { ref, reactive } from 'vue';
    const tareas = ref([]);
    const mostrarCompletadas = ref(true);
    const nuevaTarea = ref('');

    function agregarTarea(){
        const tarea = reactive({
            nombre: nuevaTarea.value,       
            completado: false 
        });
        tareas.value.push(tarea);
    }
</script>
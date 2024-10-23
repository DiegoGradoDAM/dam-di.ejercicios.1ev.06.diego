<template>
    <input v-model="nuevaTarea" placeholder="Escribe una nueva tarea" />
    <button id="boton" v-if="nuevaTarea" @click="agregarTarea">Agregar Tarea</button>
    
    <p v-if="tareas.length === 0">La lista esta vacia</p>
    <ul>
        <li v-for="(tarea, index) in tareas" :key="index">
            Tarea: {{ tarea.nombre }} - Completado: {{ tarea.completado }} 
            <input type="checkbox" v-model="tarea.completado" />
        </li>
    </ul>
</template>
<script setup>
    import { ref, reactive } from 'vue';
    const tareas = ref([]);

    const nuevaTarea = ref('');

    function agregarTarea(){
        const tarea = reactive({
            nombre: nuevaTarea.value,       
            completado: false 
        });
        tareas.value.push(tarea);
    }
</script>
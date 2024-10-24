<template>
    <div :class="{ instrucciones: esInstrucciones }" v-show="mostrarInstrucciones">
        <h5>Mostrar/Ocultar instrucciones: Haz clic en el botón "Mostrar/Ocultar instrucciones" para ver o esconder el texto destacado.</h5>
        <h5>Añadir tarea: Escribe una tarea en el campo de texto y pulsa "Añadir tarea".</h5>
        <h5>Mostrar/ocultar completadas: Usa el botón "Mostrar Todas"/"Mostrar Solo Completadas" para ver todas las tareas o solo las completadas.</h5>
        <h5>Marcar tarea completada: Marca la casilla junto a cada tarea para completarla.</h5>
        <h5 v-if="tareas.length === 0">Si no hay tareas, se mostrará "No hay tareas disponibles".</h5>
    </div>
    <button @click="mostrarInstrucciones = !mostrarInstrucciones" class="toggle-button">Mostrar/Ocultar instrucciones</button>
    <div>
        <input v-model="nuevaTarea" placeholder="Escribe una nueva tarea" class="task-input" />
    </div>
    <button id="boton" v-if="nuevaTarea" @click="agregarTarea" class="add-button">Agregar Tarea</button>
    
    <p v-if="tareas.length === 0" class="no-tasks">No hay tareas disponibles</p>
    <ul class="task-list">
        <li v-for="(tarea, index) in tareas" :key="index" v-show="mostrarCompletadas || !tarea.completado" class="task-item">
            <input type="checkbox" v-model="tarea.completado" class="checkbox" />
            Tarea: {{ tarea.nombre }} - Completado: {{ tarea.completado }}
        </li>
    </ul>
    <button @click="mostrarCompletadas = !mostrarCompletadas" class="toggle-completed">Mostrar/Ocultar tareas completadas</button>
</template>

<script setup>
    import { ref, reactive } from 'vue';
    
    const tareas = ref([]);
    const mostrarCompletadas = ref(true);
    const nuevaTarea = ref('');

    function agregarTarea() {
        const tarea = reactive({
            nombre: nuevaTarea.value,       
            completado: false 
        });
        tareas.value.push(tarea);
        nuevaTarea.value = ''; // Limpiar el campo después de agregar
    }

    const mostrarInstrucciones = ref(true);
</script>

<style>
    .instrucciones {
        background-color: #ffe4e1;
        padding: 15px;
        border-left: 5px solid #ff7f7f;
        border-radius: 5px;
        margin-bottom: 15px;
        font-weight: bold;
        transition: all 0.3s ease;
    }

    .toggle-button,
    .add-button,
    .toggle-completed {
        background-color: #ff7f7f;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin: 5px 0;
    }

    .toggle-button:hover,
    .add-button:hover,
    .toggle-completed:hover {
        background-color: #ff5c5c;
    }

    .task-input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 10px;
        width: calc(100% - 22px);
        box-sizing: border-box;
    }

    .no-tasks {
        color: #ff7f7f;
        font-style: italic;
    }

    .task-list {
        list-style: none;
        padding: 0;
    }

    .task-item {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 5px;
        transition: background-color 0.3s ease;
    }

    .task-item:hover {
        background-color: #ffe4e1;
    }

    .checkbox {
        margin-right: 10px;
    }
</style>

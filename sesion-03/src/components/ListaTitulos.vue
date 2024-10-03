<script setup>
    const array = ["Bienvenido", "Introduccion", "Conclusión"];
</script>
<template>
   <h2>{{ array[0] }}</h2>
   <h2>{{ array[1] }}</h2>
   <h2>{{ array[2] }}</h2>
</template>
<style scoped>
    h2{
        border: 1px solid black;
    }
</style>
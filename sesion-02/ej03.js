const usuario = {
    nombre: "Ana",
    correo: "ana@example.com"
};

   
console.log(`- ej03.js`);
console.log(`- ej03.js`);
console.log(``);
console.log(`>> SALIDA `);
console.log(`>> SALIDA `);
console.log(``);
// Desestructuración con valor por defecto
const { nombre, edad = 30 } = usuario;
console.log(nombre); // Ana
console.log(edad); // 30
   

// Function scoped - Esta declaraion siempre es en ambito global
var texto = 'Esto es una cadena de texto';
var resultado = 34389;

// ES6 Block Scoped - Estas declaraciones funcionan en ambito de bloque, fuera de ese ambito dara como no declarado.
let ejemplo = {};

const q = 'otro texto más';

if (true){
    const k = 'este texto no esta declaro en ambito global';
}
console.log(q);
console.log(k);
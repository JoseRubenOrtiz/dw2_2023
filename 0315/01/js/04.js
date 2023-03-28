console.log("04.js enlazado");
console.log("ejercicio4");
console.log("En el siguiente arreglo denominado 'frutas' tenemos los siguiente elementos:");
frutas = ['naranja', 'uva', 'sandia', 'melon'];
console.log(frutas);
cambio = frutas.indexOf('sandia');

frutas[cambio] = 'aguacate';
console.log("Y en este otro arreglo reemplazamos el elemento 'sandia' por otro llamado 'aguacate'")

console.log(frutas);
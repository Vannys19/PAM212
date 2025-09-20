const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000},
];
let filtrar = productos.filter(producto => producto.precio > 1000);
console.log(filtrar);

let nombres = filtrar.map(filtra => filtra.nombre);
console.log(nombres);

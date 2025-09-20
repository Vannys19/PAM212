const personas = [
    {nombre:"Ana", edad: 22},
    {nombre:"Luis", edad: 35},
    {nombre:"Maria", edad: 28},
];

let buscar = personas.find(persona => persona.nombre == "Luis");
console.log(buscar);

personas.forEach(function (nombre,edad) {
    console.log(this.value, nombre, edad);
});

let suma = personas.reduce(function(i, persona) {
    return i + persona.edad;
},0);
console.log(suma);
const persona = {
    nombre: "Jovanny",
    edad: 19,
    direccion: {
        ciudad:"QRO",
        pais:"México"
    }
};

const {nombre, edad, direccion: {ciudad, pais}} = persona;
console.log("Hola me llamo " + nombre +", tengo " + edad + " años de edad y vivo en  " + ciudad   );
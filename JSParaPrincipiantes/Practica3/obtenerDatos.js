function simularPeticionAPI(){
    return new  Promise(resolve =>{
        setTimeout(()=> {
            resolve("Datos recibidos correctamente");
        },500)
        });
}

async function obtenerDatos(){
    console.log("Buscando Datos");
    const datos = await simularPeticionAPI();
    console.log(datos);

}

obtenerDatos();
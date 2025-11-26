export class Usuario {
    constructor(id, nombre, fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion || new Date().toISOString();

    }

    //Validaciones del modelo
    static validar(nombre){
        if(!nombre ||nombre.trim().lenght === 0){
            throw new Error("El nombre no debe de tener mas de 50 caracteres y no debe estar vacio");
        }
        return true;
    }

}
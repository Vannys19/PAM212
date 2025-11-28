import { Usuario } from "../models/usuario";
import DataBaseServise from "../database/DataBaseServise";

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    async initialize() {
        await DataBaseServise.initialize();
    }

    async obtenerUsuarios() {
        try {
            const data = await DataBaseServise.getAll();
            return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
        } catch (error) {
            console.error('Error al obtener los usuarios: ', error);
            throw new Error('No se pudieron cargar los usuarios');
        }
    }

    async crearUsuario(nombre) {
        try {
            Usuario.validar(nombre);
            const nuevoUsuario = await DataBaseServise.add(nombre.trim());
            this.notifyListeners();

            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        } catch (error) {
            console.error('Error al crear usuario: ', error);
            throw error;
        }
    }

    async modificarUsuario(id, nombre) {
        try {
            Usuario.validar(nombre);
            const actualizado = await DataBaseServise.modificar(id, nombre);
            this.notifyListeners();

            return actualizado
                ? new Usuario(
                    actualizado.id,
                    actualizado.nombre,
                    actualizado.fecha_creacion
                )
                : null;

        } catch (error) {
            console.error('Error al actualizar usuario: ', error);
            throw error;
        }
    }

    async eliminarUsuario(id) {
        try {
            await DataBaseServise.eliminar(id);
            this.notifyListeners();
        } catch (error) {
            console.error('Error al eliminar usuario.', error);
            throw error;
        }
    }
    

    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}

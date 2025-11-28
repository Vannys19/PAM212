import { Platform } from "react-native";
import * as SQLite from "expo-sqlite";

class DataBaseService {
    constructor() {
        this.db=null;
        this.storageKey = "usuarios";
    }
    async initialize(){
        if (Platform.OS === 'web') {
            console.log("Usando localStorage en lugar de SQLite en la web");
            
        }else{
            console.log("Usando SQLite para movil");
            this.db = await SQLite.openDatabaseAsync("miapp.db");
            await this.db.execAsync(`
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    fechaCreacion DATETIME DEFAULT CURRENT_TIMESTAMP
                );
            `);   
        }
    }
    
    async getAll(){
        if (Platform.OS === 'web') {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        }else{
            return await this.db.getAllAsync("SELECT * FROM usuarios ORDER BY id DESC;");
        }
    }

    async add(nombre){
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();

            const nuevoUsuario = {
                id: Date.now(),
                nombre,
                fechaCreacion: new Date().toISOString()
            };

            usuarios.unshift(nuevoUsuario);
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
            return nuevoUsuario;
        }else{
            const result = await this.db.runAsync(
                "INSERT INTO usuarios (nombre) VALUES (?);",
                nombre
            );
            return {
                id: result.lastInsertRowId,
                nombre,
                fechaCreacion: new Date().toISOString()
            };
            
        }

    }
    async modificar(id, nombre) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();
            const actualizados = usuarios.map(u =>
                u.id === id ? { ...u, nombre } : u
            );
            localStorage.setItem(this.storageKey, JSON.stringify(actualizados));
    
            return { id, nombre };
        } else {
            await this.db.runAsync(
                'UPDATE usuarios SET nombre = ? WHERE id = ?',
                [nombre, id]
            );
    
            return { id, nombre };
        }
    }
    
    async eliminar(id) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();
            const filtrados = usuarios.filter(u => u.id !== id);
            localStorage.setItem(this.storageKey, JSON.stringify(filtrados));
            return true;
        } else {
            await this.db.runAsync(
                'DELETE FROM usuarios WHERE id = ?',
                [id]
            );
            return true;
        }
    }
    
}   


export default new DataBaseService();

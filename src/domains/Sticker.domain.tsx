import { ISticker } from "../interfaces/Sticker.interface";

export class Sticker {
    private id: string;
    public team: string; // Selección
    public number: number; // N° figurita
    public type: string; // Tipo (comun, holograma)
    public difficulty: number; // Dificultad figurita del 1 al 10
    public name: string;
    public lastname: string;
    public dorsal: number;
    public image: string;
    //TODO: Crear entidad jugador

    constructor(sticker: ISticker) {
        this.id = sticker.id;
        this.team = sticker.team;
        this.number = sticker.number;
        this.type = sticker.type;
        this.difficulty = sticker.difficulty;
        this.name = sticker.name;
        this.lastname = sticker.lastname;
        this.dorsal = sticker.dorsal;
        this.image = sticker.image;
    }

     //TODO: Implementar hydrate en una clase abstracta que extienda todas las entidades
    static hydrate = (sticker: ISticker) => new Sticker(sticker);
}
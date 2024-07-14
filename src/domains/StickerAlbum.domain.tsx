import { IStickerAlbum } from "../interfaces/StickerAlbum.interface";

export class StickerAlbum {
    private id: string;
    private theme: string;

    constructor(stickerAlbum: IStickerAlbum){
        this.id = stickerAlbum.id;
        this.theme = stickerAlbum.theme;
    }

    //TODO: Implementar hydrate en una clase abstracta que extienda todas las entidades
    static hydrate = (stickerAlbum: IStickerAlbum) => new StickerAlbum(stickerAlbum);
}
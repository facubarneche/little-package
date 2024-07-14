import { Sticker } from "./Sticker.domain";

export class StickerPack {
    private id: string;
    private stickers: Sticker;

    constructor(stickerPack: any){
        this.id = stickerPack.id;
        this.stickers = stickerPack.stickers
    }
}
import axios from "axios";
import { StickersMock } from "../mocks/Stickers.mock";
import { Sticker } from "../domains/Sticker.domain";

class StickerAlbumService {
    getAll = () => {
        // axios.get('/')
        // Mockear la figurita de messi e hidratarla
        return StickersMock.map(sticker => Sticker.hydrate(sticker))
    }
}

export const stickerAlbumService = new StickerAlbumService();
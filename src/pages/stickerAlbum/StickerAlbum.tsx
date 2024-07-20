import { useEffect, useState } from "react";
import { StickerComponent } from "../../components/Sticker.component"
import { Sticker } from "../../domains/Sticker.domain";
import { stickerAlbumService } from "../../services/StickerAlbum.service";
import './StickerAlbum.css';

export const StickerAlbum = () => {

  const [stickers, setStickers] = useState<Sticker[]>([]);
  useEffect( ()=>{
    const arrayStickers = stickerAlbumService.getAll();
    setStickers(arrayStickers);
  },[]);

  return (
    <div className="container-card-sticker">
      {
        stickers.map( (sticker: Sticker, index: number) => <StickerComponent key={index} sticker={sticker}/> )
      }
    </div>
  )
}

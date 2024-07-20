import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Sticker } from '../domains/Sticker.domain';
import './Sticker.component.css';

//TODO: Encontrar una mejor forma de tipar
export const StickerComponent = ({ sticker }: { sticker: Sticker }) => {
  return (
    <Card className='card-sticker' sx={{ maxWidth: 260 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={sticker.image}
          alt={`Figurita de ${sticker.name} ${sticker.lastname}`}
        />
        <CardContent>
          {/* Mejorar la presentación de la card */}
          <Typography gutterBottom variant="h5" component="div">
            {sticker.team}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {`${sticker.name} ${sticker.lastname}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {sticker.dorsal}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Capitan de la selección Argentina, campeón de multiples torneos...
            {/* Puede tener descripción como no tenerla */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}


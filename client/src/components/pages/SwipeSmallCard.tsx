import { CardActionArea, CardContent, CardMedia, Typography, Card } from '@mui/material';
import React from 'react';
import type { OnePet } from './PetCabinetPage';

export type SwipePetProps = {
  character: OnePet;
};
export default function SwipeSmallCard({ character }: SwipePetProps): JSX.Element {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={character.image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}, {character.age}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

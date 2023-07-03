import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import type { OnePet } from '../Types/PetsTypes';
import currentPetSlice, { setCurrentPet } from '../features/redux/slices/currentPetSlice';

type OnePetProps = {
  pet: OnePet;
};

export default function OneSmallPetCard({ pet }: OnePetProps): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickHandler = (): void => {
    const { id } = pet;
    // const { history } = useHistory();
    navigate(`/cabinet/${id}`);
  };

  const clickChatHandler = (): void => {
    const { id } = pet;
    // const { history } = useHistory();
    navigate(`/chat/${id}`);
  };
  return (
    <Stack direction="column" spacing={2}>
      <Card sx={{ borderRadius: 8, padding: '16px', width: 250, height: 250 }}>
        <CardActionArea sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardMedia
            component="img"
            sx={{
              display: 'flex',
              borderRadius: 8,
              objectFit: 'cover',
              padding: '120px solid #FF0000',
              width: 130,
              height: 130,
            }}
            height="100"
            image={pet.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pet.name}, {pet.age}
            </Typography>
          </CardContent>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ width: 200 }}>
            <Button
              color="secondary"
              sx={{
                borderRadius: 2,
                padding: '16px',
                maxWidth: 170,
                alignItems: 'center',
                display: 'flex',
              }}
              onClick={clickHandler}
            >
              Подробнее
            </Button>
            <Button
              color="secondary"
              sx={{
                borderRadius: 2,
                padding: '16px',
                alignItems: 'center',
              }}
              onClick={() => clickCurrentHandler(pet, pet.id)}
            >
              Написать
            </Button>
          </Stack>
        </CardActionArea>
      </Card>
    </Stack>
  );
}

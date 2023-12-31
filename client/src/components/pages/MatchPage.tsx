import { Box, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
// import type { OnePet } from '../../Types/PetsTypes';
import OneSmallPetCard from '../ui/OneSmallPetCard';
import { useAppDispatch, useAppSelector } from '../features/redux/reduxHooks';
import getAllMatchThunk from '../features/thunkAction/petMatchThankAction';
import AppSpinner from '../ui/PetSpinner';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MatchPage(): JSX.Element {
  const petsMatch = useAppSelector((state) => state.petMatch.data);
  // const petCurent = useAppSelector((state) => state.petCurent.data);
  const currentPet = useAppSelector((state) => state.currentPet.data);
  // console.log(currentPet);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useAppDispatch();

  // const { id } = useParams();
  const id = currentPet?.id;

  useEffect(() => {
    dispatch(getAllMatchThunk(id));
    console.log(id, 'iddddddddddddddd');
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [id]);

  return (
    <Box
      sx={{
        // backgroundColor: '',
        minHeight: '100vh',
        padding: '120px',
        backgroundColor: '#EABD56',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '150vh',
      }}
    >
      {isLoading ? (
        <AppSpinner />
      ) : (
        <Stack>
          <Grid>
            {petsMatch.map((el) => (
              // <Grid key={el.id} item xs={12} sm={6} md={4} lg={3}>
              <OneSmallPetCard pet={el} />
              // </Grid>
            ))}
          </Grid>
        </Stack>
      )}
    </Box>
  );
}

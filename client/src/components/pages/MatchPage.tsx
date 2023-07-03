import { Box, Grid, Stack, backdropClasses } from '@mui/material';
import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import type { OnePet } from '../../Types/PetsTypes';
import OneSmallPetCard from '../ui/OneSmallPetCard';
import { useAppDispatch, useAppSelector } from '../features/redux/reduxHooks';
import getAllMatchThunk from '../features/thunkAction/petMatchThankAction';

// export type OnePet = {
//   id: number;
//   name: string;
//   img: string;
//   age: number;
//   user_id: number;
//   petType: 'кошка' | 'собака' | 'грызун';
// };
// type AllPetsMatch = OnePet[];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MatchPage(): JSX.Element {
  const petsMatch = useAppSelector((state) => state.petMatch.data);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllMatchThunk(id));
  }, [id]);

  return (
    // <div>{petsMatch}</div>
    <Box
      sx={{
        backgroundColor: '#E890F6',
        minHeight: '100vh',
        padding: '120px',
      }}
    >
      {/* Ваше содержимое страницы */}
      <Stack direction="row" spacing={3}>
        <Grid container spacing={3}>
          {petsMatch.map((el) => (
            <Grid key={el.id} item xs={12} sm={6} md={4} lg={3}>
              <OneSmallPetCard pet={el} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}

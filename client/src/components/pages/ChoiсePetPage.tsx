import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OneNamePetForChoice from '../ui/OneNamePetForChoice';
import { useAppDispatch, useAppSelector } from '../features/redux/reduxHooks';
import { getPetsThunk } from '../features/thunkAction/petThunkActions';
import { setCurrentPet } from '../features/redux/slices/currentPetSlice';

export default function ChoiсePetPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const pets = useAppSelector((state) => state.pets.data);
  console.log(pets, '--------------------');

  useEffect(() => {
    void dispatch(getPetsThunk());
  }, []);
  const navigate = useNavigate();

  const navigateToInfo = (): void => {
    navigate('/info');
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
        backgroundColor: '#DFC645',
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <Button
          sx={{ backgroundColor: '#F3EDED', borderRadius: '10px' }}
          variant="outlined"
          onClick={navigateToInfo}
        >
          Добавить питомца
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {pets.map((el) => (
            <OneNamePetForChoice key={el.id} userPet={el} />
          ))}
        </div>
      </Box>
    </Box>
  );
}

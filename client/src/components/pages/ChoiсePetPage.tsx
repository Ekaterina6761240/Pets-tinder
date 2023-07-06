import { Box, Button, ThemeProvider, Typography, createTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OneNamePetForChoice from '../ui/OneNamePetForChoice';
import { useAppDispatch, useAppSelector } from '../features/redux/reduxHooks';
import { getPetsThunk } from '../features/thunkAction/petThunkActions';
import AppSpinner from '../ui/PetSpinner';
import { setCurrentPet } from '../features/redux/slices/currentPetSlice';
import { userCheckThunk } from '../features/thunkAction/userThunkAction';

export default function ChoiсePetPage(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const pets = useAppSelector((state) => state.pets.data);
  const user = useAppSelector((state) => state.user.data);
  console.log(pets, '--------------------');

  useEffect(() => {
    void dispatch(getPetsThunk());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const navigate = useNavigate();

  const navigateToInfo = (): void => {
    dispatch(setCurrentPet(null));
    navigate('/info');
  };
  const theme = createTheme({
    typography: {
      subtitle1: {
        fontSize: 40,
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontStyle: 'italic',
      },
    },
  });

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
        backgroundColor: '#EABD56',
      }}
      noValidate
      autoComplete="off"
    >
      {isLoading ? (
        <AppSpinner />
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              marginBottom: '2rem',
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography variant="subtitle1" sx={{ marginBottom: '2rem', color: '#000000' }}>
                Привет, {user.name}
              </Typography>
            </ThemeProvider>
            <Button
              sx={{ backgroundColor: 'transparent', borderRadius: '10px', color: '#000000' }}
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
        </>
      )}
    </Box>
  );
}

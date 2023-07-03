import { Box, Button, Card, TextField, Grid, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../features/redux/reduxHooks';
import usePetHook from '../features/Hooks/usePetHook';
import { getOnePetThunk, getPetsThunk } from '../features/thunkAction/petThunkActions';

export type OnePet = {
  id: number;
  name: string;
  type: string;
  age: number;
  img: string;
  sex: string;
  city: string;
  info: string;
  pedigree: string;
  user_id: number;
};
export default function PetCabinetPage(): JSX.Element {

  
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect((): void => {
    void dispatch(getPetsThunk());
  }, []);

  const pets = useAppSelector((store) => store.pets.data);
  const pet = pets.find((newPet) => newPet.id === Number(id));
  console.log(pet, 'pet===============><===============');
  
  console.log(pets, 'pets');

  const { submitHandler } = usePetHook();

  const navigate = useNavigate();

  const handleEditClick = (): void => {
    const petId = Number(pet?.id);
    navigate(`/edit/${petId}`);
  };

  //   const getOnePet = pets.data.filter((pet) => pet.id === user.Pet[0].id)

  //   const [user, setUser] = useState({

  //   const [pet, setPet] = useState({
  //     name: '',
  //     file: '',
  //     type: '',
  //     age: '',
  //     sex: '',
  //     city: '',
  //     info: '',
  //     pedigree: '',
  //   });

  //   const changeHandler = (e: ChangeEventHandler<HTMLInputElement>): void => {
  //     setPet((prev) => ({
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //     }));
  //   };

  //   const uniquePetTypes = [...new Set(petsMatch.map((option) => option.petType))];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '2rem',
        backgroundColor: '#DFC645',
      }}
    >
      <form onSubmit={submitHandler}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} md={4} sx={{ display: 'flex', flex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: 'fit-content',
                marginX: '2rem',
                '& > :not(style)': { marginBottom: '1rem' },
              }}
            >
              <Card sx={{ maxWidth: 500, textAlign: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '200px',
                    width: '100%',
                    borderRadius: '10px',
                  }}
                >
                  <CardMedia
                      component="img"
                      sx={{ height: 140 }}
                      src={`../../../server/public/img/${pet?.image}`}
                      alt="Загруженное изображение"
                    />
                </Box>
              </Card>
              <Box>
                <Button
                  sx={{
                    marginTop: '2rem',
                    backgroundColor: '#F3EDED',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                  type="submit"
                  variant="outlined"
                  onClick={handleEditClick}
                >
                  Изменить
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} sx={{ display: 'flex', flex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                '& > :not(style)': {
                  m: 1,
                  width: 286,
                  height: 53,
                  marginBottom: '1rem',
                  marginTop: '6px',
                },
                marginX: '2rem',
              }}
            >
              <div>
                <TextField
                  id="outlined-select-currency"
                  placeholder={pet?.type}
                  name="type"
                  // onChange={changeHandler}
                  value={pet?.type}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                    sx: {
                      marginBottom: '1rem',
                      backgroundColor: '#F3EDED',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      },
                    },
                  }}
                />
              </div>
              <TextField
                id="outlined-basic"
                placeholder="Кличка"
                name="name"
                // onChange={changeHandler}
                value={pet?.name}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                  sx: {
                    backgroundColor: '#F3EDED',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& .Mui-focused .MuiInputLabel-root': {
                      transform: 'translate(14px, -6px) scale(0.75)',
                    },
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                placeholder="Пол"
                name="sex"
                // onChange={changeHandler}
                value={pet?.sex}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                  sx: {
                    backgroundColor: '#F3EDED',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                placeholder="Возраст"
                name="age"
                // onChange={changeHandler}
                value={pet?.age}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                  sx: {
                    backgroundColor: '#F3EDED',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={4} sx={{ display: 'flex', flex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                '& > :not(style)': {
                  m: 1,
                  width: 286,
                  height: 53,
                  marginBottom: '1rem',
                  marginTop: '6px',
                },
                marginX: '2rem',
              }}
            >
              <TextField
                id="outlined-basic"
                placeholder="Город"
                name="city"
                // onChange={changeHandler}
                value={pet?.city}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                  sx: {
                    backgroundColor: '#F3EDED',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                placeholder="Родословная"
                name="pedigree"
                // onChange={changeHandler}
                value={pet?.pedigree}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                  sx: {
                    backgroundColor: '#F3EDED',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  },
                }}
              />
              <TextField
                id="outlined-multiline-static"
                placeholder="О питомце"
                name="info"
                // onChange={changeHandler}
                value={pet?.info}
                multiline
                rows={4}
                InputProps={{
                  readOnly: true,
                  sx: {
                    width: 286,
                    height: 253,
                    backgroundColor: '#F3EDED',
                    borderRadius: '10px',
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

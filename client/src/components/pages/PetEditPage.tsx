import { Box, Button, Card, TextField, Grid, MenuItem, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePetHook from '../features/Hooks/usePetHook';
import { useAppDispatch, useAppSelector } from '../features/redux/reduxHooks';
import { editPetThunk, getOnePetThunk } from '../features/thunkAction/petThunkActions';
import type { PetFormType } from '../Types/petTypes';

// export type OnePet = {
//   id: number;
//   name: string;
//   image: string;
//   age: number;
//   user_id: number;
//   type: string;
//   sex: string;
//   city: string;
//   info: string;
//   pedigree: string;
// };
export default function PetEditPage(): JSX.Element {
  const newPet = useAppSelector((store) => store.pets.data);
  const dispatch = useAppDispatch();

  const petId = useParams();
  const onePet = newPet.find((pet) => pet.id === Number(petId.id));

  console.log(newPet, '=============');

  const { editHandler } = usePetHook();

  const [pet, setPet] = useState({
    // id: petId.id,
    name: onePet?.name,
    image: null,
    type: onePet?.type,
    age: onePet?.age,
    sex: onePet?.sex,
    city: onePet?.city,
    info: onePet?.info,
    pedigree: onePet?.pedigree,
  });

  // useEffect(() => {
  //   dispatch(editPetThunk({ data: pet, id: Number(petId.id) }));
  // }, [petId.id]);

  //   const changeHandler = (e: ChangeEventHandler<HTMLInputElement>): void => {
  //     setPet((prev) => ({
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //     }));
  //   };
  // console.log(pet, '----------------------');

  const navigate = useNavigate();
  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'image') {
      const file = e.target.files?.[0];
      setPet((prev) => ({
        ...prev,
        file,
      }));
    } else {
      setPet((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  // const saveClick = (): void => {
  //   const petIdnum = Number(petId.id);
  //   navigate(`/cabinet/${petIdnum}`);
  // };

  // const uniquePetTypes = [...new Set(newPet.map((option) => option.type))];
  const uniquePetTypes = ['Грызун', 'Кошка', 'Собака'];
  const sexPet = ['Мужской', 'Женский'];

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
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement & PetFormType>) => editHandler(e, petId.id)}
      >
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
                  <label htmlFor="upload-input">
                    <input
                      id="upload-input"
                      type="file"
                      name="image"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={changeHandler}
                    />
                  </label>
                  {pet.image ? (
                    <CardMedia
                      component="img"
                      defaultValue={onePet?.image}
                      sx={{ height: 140 }}
                      src={URL.createObjectURL(pet.image)}
                      alt="Загруженное изображение"
                    />
                  ) : (
                    <Button component="label" htmlFor="upload-input" size="small">
                      Добавить фото
                    </Button>
                  )}
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
                  // onClick={saveClick}
                >
                  Сохранить
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
                  select
                  placeholder="Вид питомца"
                  name="type"
                  defaultValue={onePet?.type}
                  onChange={changeHandler}
                  value={pet.type}
                  fullWidth
                  sx={{
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
                  }}
                >
                  {uniquePetTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <TextField
                id="outlined-basic"
                placeholder="Кличка"
                name="name"
                onChange={changeHandler}
                value={pet.name}
                variant="outlined"
                sx={{
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
                }}
              />
              <TextField
                id="outlined-basic"
                select
                defaultValue={onePet?.sex}
                placeholder="Пол"
                name="sex"
                onChange={changeHandler}
                value={pet.sex}
                variant="outlined"
                sx={{
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
              >
                {sexPet.map((sex) => (
                  <MenuItem defaultValue={sex} key={sex} value={sex}>
                    {sex}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-basic"
                placeholder="Возраст"
                name="age"
                onChange={changeHandler}
                value={pet.age}
                variant="outlined"
                sx={{
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
                onChange={changeHandler}
                value={pet.city}
                variant="outlined"
                sx={{
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
              />
              <TextField
                id="outlined-basic"
                placeholder="Родословная"
                name="pedigree"
                onChange={changeHandler}
                value={pet.pedigree}
                variant="outlined"
                sx={{
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
              />
              <TextField
                id="outlined-multiline-static"
                placeholder="О питомце"
                name="info"
                onChange={changeHandler}
                value={pet.info}
                multiline
                rows={4}
                InputProps={{
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

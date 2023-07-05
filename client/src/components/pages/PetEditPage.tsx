import { Box, Button, Card, TextField, Grid, MenuItem, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePetHook from '../features/Hooks/usePetHook';
import { useAppDispatch, useAppSelector } from '../features/redux/reduxHooks';
import {
  editPetThunk,
  getOnePetThunk,
  getPetsThunk,
} from '../features/thunkAction/petThunkActions';
import type { PetFormType } from '../Types/petTypes';
import { setCurrentPet } from '../features/redux/slices/currentPetSlice';
import getCurrentPetThunk from '../features/thunkAction/currentPetThank';
import { OnePet } from '../Types/PetsTypes';
import AppSpinner from '../ui/PetSpinner';

export default function PetEditPage(): JSX.Element {
  const currentPet = useAppSelector((store) => store.currentPet.data);
  const { editHandler } = usePetHook();
  // const newPet = useAppSelector((store) => store.pets.data);
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()

  useEffect((): void => {
    void dispatch(getPetsThunk());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // if (currentPet === null) {
    //   navigate('/choice');
    // }
  }, []);

  // const petId = useParams();
  // const onePet = newPet.find((pet) => pet.id === Number(petId.id));

  // console.log(newPet, '=============');

  const [pet, setPet] = useState({
    name: currentPet?.name,
    image: currentPet?.image,
    type: currentPet?.type,
    age: currentPet?.age,
    sex: currentPet?.sex,
    city: currentPet?.city,
    info: currentPet?.info,
    pedigree: currentPet?.pedigree,
  });

  // const clickHandler = () => {
  //   // void dispatch(getCurrentPetThunk(currentPet));
  //   navigate('/cabinet')
  // };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    // const fieldsToCheck = ['image', 'name', 'type', 'age', 'sex', 'city', 'info', 'pedigree'];

    // if (fieldsToCheck.includes(e.target.name)) {
    if (e.target.name === 'image') {
      const file = e.target.files?.[0];
      setPet((prev) => ({
        ...prev,
        image: file,
      }));
    } else {
      setPet((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
    //  else
    // {
    //   setPet((prev) => ({
    //     ...prev,
    //     [e.target.name]: e.target.value ? e.target.value : e.target.files?.[0],
    //   }));
    // }
    // }
  };

  const uniquePetTypes = ['Кошка', 'Собака'];
  const sexPet = ['Мужской', 'Женский'];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '2rem',
        paddingLeft: '10rem',
        backgroundColor: '#DFC645',
      }}
    >
       {isLoading ? (
              <AppSpinner />
              ) : (
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement & PetFormType>) =>
          editHandler(e, Number(currentPet?.id))
        }
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
                      onChange={(e) => changeHandler(e)}
                    />
                  </label>
                  {/* {currentPet?.image ? ( */}
                  {/* <> */}
                  <CardMedia
                    component="img"
                    sx={{ height: 140 }}
                    src={`http://localhost/3001/img/${currentPet?.image}`}
                    alt="Загруженное изображение"
                  />
                  {/* </> */}
                  {/* ) : (
                    <Button component="label" htmlFor="upload-input" size="small">
                    Добавить фото
                  </Button> */}
                  {/* )} */}
                </Box>
              </Card>
              <Button component="label" htmlFor="upload-input" size="small">
                Изменить фото
              </Button>
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
                  // onClick={() => clickHandler()}
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
                  defaultValue={currentPet?.type}
                  onChange={(e) => changeHandler(e)}
                  value={pet?.type}
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
                onChange={(e) => changeHandler(e)}
                value={pet?.name}
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
                defaultValue={pet?.sex}
                placeholder="Пол"
                name="sex"
                onChange={(e) => changeHandler(e)}
                value={pet?.sex}
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
                onChange={(e) => changeHandler(e)}
                value={pet?.age}
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
                onChange={(e) => changeHandler(e)}
                value={pet?.city}
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
                onChange={(e) => changeHandler(e)}
                value={pet?.pedigree}
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
                onChange={(e) => changeHandler(e)}
                value={pet?.info}
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
      )}
    </Box>
  );
}

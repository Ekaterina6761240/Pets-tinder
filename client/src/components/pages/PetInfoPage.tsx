import { Box, Button, Card, TextField, Grid, MenuItem, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddPhotoModal from '../ui/AddPhotoModal';
import usePetHook from '../../hooks/usePetHook';

declare global {
  interface Window {
    Blob: typeof Blob;
  }
};

export type OnePet = {
  id: number;
  name: string;
  img: string;
  age: number;
  user_id: number;
  petType: 'кошка' | 'собака' | 'грызун';
};
export default function PetInfoPage(): JSX.Element {
  
  const { submitHandler } = usePetHook();
  

  const [pet, setPet] = useState({
    name: '',
    image: null,
    type: '',
    age: '',
    sex: '',
    city: '',
    info: '',
    pedigree: '',
  });
  

  // const changeHandler = (e: ChangeEventHandler<HTMLInputElement>): void => {
  //   setPet((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'image') {
      const file = e.target.files?.[0];
      console.log(file.lastModified, '000000000000-------------------');
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
  };

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
                      sx={{ height: 140 }}
                      src={URL.createObjectURL(pet?.image)}
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
                >
                  Добавить
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
                  defaultValue="собака"
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
                  {uniquePetTypes.map((petType) => (
                    <MenuItem key={petType} value={petType}>
                      {petType}
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
                  <MenuItem key={sex} value={sex}>
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

import { Box, Button, Card, TextField, Grid, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddPhotoModal from '../ui/AddPhotoModal';
import usePetHook from '../../hooks/usePetHook';
import { useAppSelector } from '../../features/redux/reduxHooks';

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
  const petsMatch: OnePet[] = [
    {
      id: 1,
      name: 'Бобик',
      type: 'собака',
      sex: 'm',
      city: 'msc',
      info: 'gbbfbgfgf',
      pedigree: '-',
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/7/19/756752350085197.webp',
      age: 3,
      user_id: 1,
    },
    {
      id: 2,
      name: 'Шарик',
      img: 'https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_752x940/697/c500/ed7e52e-ab4d-4d1b-80fe-15e99ffbf6b6.jpeg',
      age: 1,
      user_id: 2,
      type: 'собака',
      sex: 'm',
      city: 'msc',
      info: 'gbbfbgfgf',
      pedigree: '-',
    },
    {
      id: 3,
      name: 'Рекс',
      img: 'https://rg.ru/uploads/images/214/34/08/photorep_imageid_538385_8085b70e8b6927e1575618884.jpg',
      age: 2,
      user_id: 3,
      type: 'собака',
      sex: 'm',
      city: 'msc',
      info: 'gbbfbgfgf',
      pedigree: '-',
    },
    {
      id: 4,
      name: 'Лайка',
      img: 'https://cdnn1.inosmi.ru/img/24985/10/249851004_0:196:2030:1211_1920x0_80_0_0_78318b59d4ce0cde91f76a1b092765e7.jpg',
      age: 4,
      user_id: 4,
      type: 'собака',
      sex: 'm',
      city: 'msc',
      info: 'gbbfbgfgf',
      pedigree: '-',
    },
    {
      id: 5,
      name: 'Барон',
      img: 'https://avatars.dzeninfra.ru/get-zen_doc/1246934/pub_5b9a5b8c341cd400abd07c2c_5b9a5bb69d8b2a00aa9e1ba1/scale_1200',
      age: 6,
      user_id: 5,
      type: 'грызун',
      sex: 'm',
      city: 'msc',
      info: 'gbbfbgfgf',
      pedigree: '-',
    },
    {
      id: 6,
      name: 'Мурка',
      img: 'https://s09.stc.yc.kpcdn.net/share/i/12/12496523/wr-960.webp',
      age: 1,
      user_id: 6,
      type: 'кошка',
      sex: 'm',
      city: 'msc',
      info: 'gbbfbgfgf',
      pedigree: '-',
    },
    {
      id: 7,
      name: 'Багира',
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/4/97/756723916815974.webp',
      age: 8,
      user_id: 2,
      type: 'кошка',
      sex: 'm',
      city: 'msc',
      info: 'gbbfbgfgf',
      pedigree: '-',
    },
    {
      id: 8,
      name: 'Чебурашка',
      img: 'https://zooput.ru/upload/iblock/482/4820791b5f2d5e89fdb1881ca9d10acf.jpg',
      age: 3,
      user_id: 8,
      type: 'грызун',
      sex: 'm',
      city: 'msc',
      info: 'gbbfbgfgf',
      pedigree: '-',
    },
    {
      id: 9,
      name: 'Кузя',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Savannah_Cat_closeup.jpg/800px-Savannah_Cat_closeup.jpg',
      age: 2,
      user_id: 9,
      type: 'кошка',
      sex: 'm',
      city: 'msc',
      info: 'gbbfbgfgf',
      pedigree: '-',
    },
    {
      id: 10,
      name: 'Жучка',
      img: 'https://img.gazeta.ru/files3/677/14468677/Depositphotos_46566737_XL_2-pic_32ratio_1200x800-1200x800-82021.jpg',
      age: 4,
      user_id: 10,
      type: 'собака',
      sex: 'm',
      city: 'msc',
      info: 'gbbfbgfgf',
      pedigree: '-',
    },
  ];

  const pet = {
    id: 10,
    name: 'Жучка',
    image:
      'https://img.gazeta.ru/files3/677/14468677/Depositphotos_46566737_XL_2-pic_32ratio_1200x800-1200x800-82021.jpg',
    age: 4,
    user_id: 10,
    type: 'собака',
    sex: 'm',
    city: 'msc',
    info: 'gbbfbgfgf',
    pedigree: '-',
  };

  const pets = useAppSelector((store) => store.pets);
  console.log(pets, 'pets');

  const { submitHandler } = usePetHook();

  const navigate = useNavigate();

  const handleEditClick = () => {
    const petId = pet.id;
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
                  {pets.data[0].myPet.img}
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
                  placeholder="Вид питомца"
                  name="type"
                  // onChange={changeHandler}
                  // value={pet.type}
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
                // value={pet.name}
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
                // value={pet.sex}
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
                // value={pet.age}
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
                // value={pet.city}
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
                // value={pet.pedigree}
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
                // value={pet.info}
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

import { Box, Button, Card, TextField, Grid, MenuItem } from '@mui/material';
import React from 'react';
import AddPhotoModal from '../ui/AddPhotoModal';

export type OnePet = {
  id: number;
  name: string;
  img: string;
  age: number;
  user_id: number;
  petType: 'кошка' | 'собака' | 'грызун';
};
export default function PetInfoPage(): JSX.Element {
  const petsMatch: OnePet[] = [
    {
      id: 1,
      name: 'Бобик',
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/7/19/756752350085197.webp',
      age: 3,
      user_id: 1,
      petType: 'собака',
    },
    {
      id: 2,
      name: 'Шарик',
      img: 'https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_752x940/697/c500/ed7e52e-ab4d-4d1b-80fe-15e99ffbf6b6.jpeg',
      age: 1,
      user_id: 2,
      petType: 'собака',
    },
    {
      id: 3,
      name: 'Рекс',
      img: 'https://rg.ru/uploads/images/214/34/08/photorep_imageid_538385_8085b70e8b6927e1575618884.jpg',
      age: 2,
      user_id: 3,
      petType: 'собака',
    },
    {
      id: 4,
      name: 'Лайка',
      img: 'https://cdnn1.inosmi.ru/img/24985/10/249851004_0:196:2030:1211_1920x0_80_0_0_78318b59d4ce0cde91f76a1b092765e7.jpg',
      age: 4,
      user_id: 4,
      petType: 'собака',
    },
    {
      id: 5,
      name: 'Барон',
      img: 'https://avatars.dzeninfra.ru/get-zen_doc/1246934/pub_5b9a5b8c341cd400abd07c2c_5b9a5bb69d8b2a00aa9e1ba1/scale_1200',
      age: 6,
      user_id: 5,
      petType: 'грызун',
    },
    {
      id: 6,
      name: 'Мурка',
      img: 'https://s09.stc.yc.kpcdn.net/share/i/12/12496523/wr-960.webp',
      age: 1,
      user_id: 6,
      petType: 'кошка',
    },
    {
      id: 7,
      name: 'Багира',
      img: 'https://s0.rbk.ru/v6_top_pics/media/img/4/97/756723916815974.webp',
      age: 8,
      user_id: 2,
      petType: 'кошка',
    },
    {
      id: 8,
      name: 'Чебурашка',
      img: 'https://zooput.ru/upload/iblock/482/4820791b5f2d5e89fdb1881ca9d10acf.jpg',
      age: 3,
      user_id: 8,
      petType: 'грызун',
    },
    {
      id: 9,
      name: 'Кузя',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Savannah_Cat_closeup.jpg/800px-Savannah_Cat_closeup.jpg',
      age: 2,
      user_id: 9,
      petType: 'кошка',
    },
    {
      id: 10,
      name: 'Жучка',
      img: 'https://img.gazeta.ru/files3/677/14468677/Depositphotos_46566737_XL_2-pic_32ratio_1200x800-1200x800-82021.jpg',
      age: 4,
      user_id: 10,
      petType: 'собака',
    },
  ];
  const uniquePetTypes = [...new Set(petsMatch.map((option) => option.petType))];
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
      <Grid container spacing={2} alignItems="center" >
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
                  borderRadius: '10px'
                }}
              >
                <AddPhotoModal />
              </Box>
            </Card>
            <Box >
              <Button sx={{ marginTop: '2rem', backgroundColor:"#F3EDED", borderRadius: '10px',
    overflow: 'hidden',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    }, }} variant="outlined">Добавить/изменить/вернуться в чат</Button>
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
            defaultValue="собака"
            fullWidth
            sx={{ marginBottom: '1rem', backgroundColor:"#F3EDED", borderRadius: '10px',
            overflow: 'hidden',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },}}
          >
            {uniquePetTypes.map((petType) => (
              <MenuItem key={petType} value={petType}>
                {petType}
              </MenuItem>
            ))}
          </TextField>
        </div>
            <TextField id="outlined-basic" placeholder="Кличка" variant="outlined"
             sx={{backgroundColor:"#F3EDED", borderRadius: '10px',
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
    },}} />
            <TextField id="outlined-basic" placeholder='Пол' variant="outlined" sx={{backgroundColor:"#F3EDED", borderRadius: '10px',
    overflow: 'hidden',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },}} />
            <TextField id="outlined-basic" placeholder="Возраст" variant="outlined" sx={{backgroundColor:"#F3EDED", borderRadius: '10px',
    overflow: 'hidden',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },}} />
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
            <TextField id="outlined-basic" placeholder="Город" variant="outlined" sx={{backgroundColor:"#F3EDED", borderRadius: '10px',
    overflow: 'hidden',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },}} />
            <TextField id="outlined-basic" placeholder="Родословная" variant="outlined" sx={{backgroundColor:"#F3EDED", borderRadius: '10px',
    overflow: 'hidden',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },}} />
            <TextField
              id="outlined-multiline-static"
              placeholder="О питомце"
              multiline
              rows={4}
              InputProps={{
    sx: {
      width: 286,
      height: 253,
      backgroundColor: '#F3EDED',
      borderRadius: '10px'
    },
  }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

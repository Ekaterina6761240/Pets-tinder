import { Box, Button, Card, TextField, Grid, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import { useAppDispatch, useAppSelector } from '../features/redux/reduxHooks';
import usePetHook from '../features/Hooks/usePetHook';
import { getOnePetThunk, getPetsThunk } from '../features/thunkAction/petThunkActions';
import AppSpinner from '../ui/PetSpinner';

export default function PetCabinetPage(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPet = useAppSelector((store) => store.currentPet.data);

  useEffect((): void => {
    void dispatch(getPetsThunk());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    if (currentPet === null) {
      navigate('/choice');
    }
  }, []);

  const { submitHandler } = usePetHook();

  const handleEditClick = (): void => {
    const petId = Number(currentPet?.id);
    navigate(`/edit/${petId}`);
  };

  const handleChoiceClick = (): void => {
    navigate('/choice');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '2rem',
        paddingLeft: '10rem',
        backgroundColor: '#EABD56',
      }}
    >
      {isLoading ? (
        <AppSpinner />
      ) : (
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
                <div>
                  <Zoom>
                    {/* <Card sx={{ maxWidth: 500, textAlign: 'center' }}> */}
                    {/* <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '200px',
                          width: '100%',
                          // borderRadius: '10px',
                          borderRadius: '50%', // Set border radius to 50% for a round shape
                          overflow: 'hidden',
                        }}
                      > */}
                    <CardMedia
                      component="img"
                      sx={{
                        height: 140,
                        width: 140, // Устанавливаем одинаковую высоту и ширину
                        borderRadius: '50%', // Устанавливаем радиус границы в 50% для круглой формы
                        objectFit: 'cover',
                        transition: 'transform 0.7s ease', // Добавляем плавный переход для анимации
                        '&:hover': {
                          transform: 'scale(1.4)', // Увеличиваем масштаб изображения при наведении
                        },
                      }}
                      src={`http://localhost:3001/img/${currentPet?.image}`}
                      alt="Загруженное изображение"
                    />
                    {/* </Box> */}
                    {/* </Card> */}
                  </Zoom>
                </div>
                <Box>
                  <Button
                    sx={{
                      marginTop: '2rem',
                      marginLeft: '5rem',
                      backgroundColor: 'transparent',
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
                      color: '#000000',
                    }}
                    type="submit"
                    variant="outlined"
                    onClick={handleEditClick}
                  >
                    Изменить
                  </Button>
                  <Button
                    sx={{
                      marginTop: '2rem',
                      marginLeft: '3rem',
                      backgroundColor: 'transparent',
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
                      color: '#000000',
                    }}
                    type="button"
                    variant="outlined"
                    onClick={handleChoiceClick}
                  >
                    Выбрать питомца
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
                    placeholder={currentPet?.type}
                    name="type"
                    // onChange={changeHandler}
                    value={`Вид: ${currentPet?.type}`}
                    fullWidth
                    InputProps={{
                      readOnly: true,
                      sx: {
                        marginBottom: '1rem',
                        backgroundColor: 'transparent',
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
                        fontSize: '1.3rem',
                      },
                    }}
                  />
                </div>
                <TextField
                  id="outlined-basic"
                  placeholder="Кличка"
                  name="name"
                  // onChange={changeHandler}
                  value={`Имя: ${currentPet?.name}`}
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                    sx: {
                      backgroundColor: 'transparent',
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
                      fontSize: '1.3rem',
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  placeholder="Пол"
                  name="sex"
                  // onChange={changeHandler}
                  value={`Пол: ${currentPet?.sex}`}
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                    sx: {
                      backgroundColor: 'transparent',
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
                      fontSize: '1.3rem',
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  placeholder="Возраст"
                  name="age"
                  // onChange={changeHandler}
                  value={`Возраст: ${currentPet?.age}`}
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                    sx: {
                      backgroundColor: 'transparent',
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
                      fontSize: '1.3rem',
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
                  marginX: '1.3rem',
                }}
              >
                <TextField
                  id="outlined-basic"
                  placeholder="Город"
                  name="city"
                  // onChange={changeHandler}
                  value={`Город: ${currentPet?.city}`}
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                    sx: {
                      backgroundColor: 'transparent',
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
                      fontSize: '1.3rem',
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  placeholder="Родословная"
                  name="pedigree"
                  // onChange={changeHandler}
                  value={`Родословная: ${currentPet?.pedigree}`}
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                    sx: {
                      backgroundColor: 'transparent',
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
                      fontSize: '1.3rem',
                    },
                  }}
                />
                <TextField
                  id="outlined-multiline-static"
                  placeholder="О питомце"
                  name="info"
                  variant="standard"
                  // onChange={changeHandler}
                  value={`  О питомце: ${currentPet?.info}`}
                  multiline
                  rows={4}
                  inputProps={{
                    readOnly: true,
                    style: {
                      width: 286,
                      height: 253,
                      backgroundColor: 'transparent',
                      fontSize: '1.3rem',
                      outline: 'none',
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

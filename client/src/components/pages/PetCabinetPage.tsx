import { Box, Button, Card, TextField, Grid, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
        backgroundColor: '#DFC645',
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
                      src={`http://localhost:3001/img/${currentPet?.image}`}
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
                    value={currentPet?.type}
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
                  value={currentPet?.name}
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
                  value={currentPet?.sex}
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
                  value={currentPet?.age}
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
                  value={currentPet?.city}
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
                  value={currentPet?.pedigree}
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
                  value={currentPet?.info}
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
      )}
    </Box>
  );
}

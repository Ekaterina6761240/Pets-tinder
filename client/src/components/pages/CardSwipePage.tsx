import React, { useEffect, useMemo, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import PetsIcon from '@mui/icons-material/Pets';
import RestoreIcon from '@mui/icons-material/Restore';
import TinderCard from 'react-tinder-card';
import { ButtonGroup, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CongratulationsModal from '../ui/CongratulationsModal';
import { useAppDispatch, useAppSelector } from '../features/redux/hooks';

import SwipeSmallCard from './SwipeSmallCard';
import getSwipePetThunk, { createSwipePetThunk } from '../features/thunkAction/swipePet';

// const db = [
//   {
//     name: 'Richard Hendricks',
//     image: 'https://www.iwmbuzz.com/wp-content/uploads/2022/02/awesome-pawsome-rubina-dilaik-gets-playful-with-cute-pet-dog-see-photodump-moments-3.jpg',
//     message: 'Привет',
//     status: false,
//   },
//   {
//     name: 'Erlich Bachman',
//     image: 'https://avatars.mds.yandex.net/i?id=88f45152c5585bda08cbd6600d5c88fb_l-5450841-images-thumbs&ref=rim&n=13&w=1080&h=1350',
//     message: 'Экстримальные увлечения',
//     status: false,
//   },
//   {
//     name: 'Monica Hall',
//     image: 'https://i.pinimg.com/736x/bf/18/e5/bf18e5af5575e464a4b602503767a004.jpg',
//     message: 'Пиши',
//     status: true,
//   },
//   {
//     name: 'Jared Dunn',
//     image: 'https://avatars.mds.yandex.net/i?id=b43f164612c20d06ae30680d8a6242d5_l-5509203-images-thumbs&ref=rim&n=13&w=1080&h=1350',
//     message: 'В активном поиске',
//     status: false,
//   },
//   {
//     name: 'Dinesh Chugtai',
//     image: 'https://avatars.mds.yandex.net/i?id=5a3f12ec8e834228ecc923a485fd51ac_l-4835198-images-thumbs&ref=rim&n=13&w=1080&h=1350',
//     message: '89853262112',
//     status: false,
//   },
// ];
export default function CardSwipePage(): JSX.Element {
  const currentPet = useAppSelector((state) => state.currentPet.data);
  console.log('======curpet', currentPet);

  const dispatch = useAppDispatch();
  const petSwipe = useAppSelector((state) => state.petsSwipe.data);

  const clickLikeHandler = (data: { id: number; idMyPet: number }): void => {
    console.log('-------data', data);

    void dispatch(createSwipePetThunk(data));
  };
  // console.log(currentPet, 'currentPet1111');
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/match`);
  };
  useEffect(() => {
    if (currentPet) {
      void dispatch(getSwipePetThunk(currentPet));
    }
  }, [currentPet]);

  console.log(petSwipe, 'petSwipe!!!!!');
  return (
    <div className="container">
      <h1 style={{ fontFamily: 'Kanit, sans-serif', fontSize: '40px', marginBottom: '50px' }}>
        Выбери пару своему питомцу
      </h1>
      <div className="cardContainer" style={{ width: '600px', height: '900px' }}>
        {petSwipe.map((el) => (
          <div className="swipe" key={el.id}>
            <SwipeSmallCard key={el.id} character={el} />
            <ButtonGroup variant="text" aria-label="text button group" className="buttons">
              <div className="">
                <IconButton>
                  <CloseIcon />
                </IconButton>

                <IconButton>
                  <RestoreIcon />
                </IconButton>

                <IconButton
                  onClick={() => clickLikeHandler({ id: el.id, idMyPet: currentPet?.id })}
                >
                  <PetsIcon />
                </IconButton>
              </div>
            </ButtonGroup>
          </div>
        ))}
        <Button
          onClick={handleClick}
          sx={{ backgroundColor: '#F3EDED', borderRadius: '10px' }}
          variant="outlined"
        >
          перейти к метчам
        </Button>
      </div>
    </div>
  );
}

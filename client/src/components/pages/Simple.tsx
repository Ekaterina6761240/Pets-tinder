import React, { useState, useMemo, useRef, useEffect, useLayoutEffect } from 'react';
import TinderCard from 'react-tinder-card';
import PetsIcon from '@mui/icons-material/Pets';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { useAppDispatch, useAppSelector } from '../features/redux/hooks';
import CongratulationsModal from '../ui/CongratulationsModal';

import {
  createDislikeThunk,
  createSwipePetThunk,
  getSwipePetThunk,
} from '../features/thunkAction/swipePet';
import getAllMatchThunk from '../features/thunkAction/petMatchThankAction';
// const petSwipe = [
//   {
//     id: 6,
//     name: 'Багира',
//     type: 'Кошка',
//     sex: 'Женский',
//     age: 6,
//     city: 'Санкт-Петербург',
//     pedigree: 'Пушистая',
//     info: 'Любит изучать композицию, а также изучать их разные исполнители',
//     image: 'c48d31be1c9aad219531240030650bae.jpg',
//     user_id: 3,
//     createdAt: '2023-07-06T15:18:58.494Z',
//     updatedAt: '2023-07-06T15:18:58.494Z',
//   },
//   {
//     id: 7,
//     name: 'Багира',
//     type: 'Кошка',
//     sex: 'Женский',
//     age: 6,
//     city: 'Санкт-Петербург',
//     pedigree: 'Пушистая',
//     info: 'Любит изучать композицию, а также изучать их разные исполнители',
//     image: 'koshka-kot-morda.jpg',
//     user_id: 3,
//     createdAt: '2023-07-06T15:18:58.494Z',
//     updatedAt: '2023-07-06T15:18:58.494Z',
//   },
// ];

function Simple(): JSX.Element {
  const petSwipe = useAppSelector((state) => state.petsSwipe.data);
  const dispatch = useAppDispatch();
  const currentPet = useAppSelector((state) => state.currentPet.data);
  const petMatch = useAppSelector((state) => state.petMatch.data);
  const [matchOpened, setMatchOpened] = useState(false);
  // вызывать функцию обновления состояния тех с кем метч и если метч то открывать модалку
  // как вызвать функцию на кликхендлере?
  const [currentIndex, setCurrentIndex] = useState(petSwipe.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const [open, setOpen] = useState<boolean>(false);

  const childRefs = useMemo(
    () =>
      Array(petSwipe.length)
        .fill(0)
        .map((i) => React.createRef()),
    [petSwipe],
  );

  // const [match, setMatch] = useState(petMatch.length);

  // useEffect(() => {
  //   if (match < petMatch.length) {
  //     setOpen(true);
  //     setMatch(petMatch.length);
  //   }
  // }, [petMatch]);

  useEffect(() => {
    if (currentPet) {
      console.log(currentPet);
      void dispatch(getSwipePetThunk(currentPet));
    }
  }, [currentPet]);

  useEffect(() => {
    setCurrentIndex(petSwipe.length - 1);
  }, [petSwipe]);

  // useEffect(() => {
  //   if (petMatch.length > 0 && !matchOpened) {
  //     setOpen(true);
  //     setMatchOpened(true);
  //   }
  // }, [petMatch, matchOpened]);

  console.log(childRefs);
  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < petSwipe.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    console.log('index', index);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);

    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < petSwipe.length) {
      console.log(childRefs);
      console.log('petSwipre', petSwipe, petSwipe[currentIndex]);
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };
  const clickDislikeHandler = (data: { id: number; idMyPet: number }): void => {
    swipe('left');
    void dispatch(createDislikeThunk(data));
  };

  const clickLikeHandler = (data: { id: number; idMyPet: number }): void => {
    swipe('right');
    void dispatch(createSwipePetThunk(data));
    // void dispatch(getAllMatchThunk(idMatch));
  };

  // useEffect(() => {
  //   setOpen(true);
  // }, [petMatch]);

  const onClose = () => {
    setOpen(false);
  };

  const goBack = async (): Promise<void> => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  // if (!childRefs.length) return null;

  return (
    <div
      style={{
        backgroundColor: '#EABD56',
        width: '130%',
        height: '150%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <link href="https://fonts.googleapis.com/css?family=Damion&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Alatsi&display=swap" rel="stylesheet" />
      <h1
        style={{
          fontFamily: 'Kanit, sans-serif',
          fontSize: '40px',
          marginBottom: '50px',
          color: 'black',
        }}
      >
        Выбери пару своему питомцу
      </h1>
      <div
        className="cardContainer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '150px',
        }}
      >
        {petSwipe.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={character.id}
            onSwipe={(dir) => swiped(dir, character.id, index)}
            onCardLeftScreen={() => outOfFrame(character.id, index)}
          >
            <div className="card">
              <img
                src={`http://localhost:3001/img/${character.image}`}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '5%',
                }}
              />
              <h1
                style={{
                  color: 'black',
                  backgroundColor: '#EABD56',
                  fontFamily: 'Kanit, sans-serif',
                }}
              >
                {character.name}
              </h1>
            </div>
          </TinderCard>
        ))}
      </div>
      <div style={{ marginLeft: '100px' }}>
        <IconButton size="large">
          <CloseIcon
            variant="contained"
            onClick={() =>
              clickLikeHandler({ id: petSwipe[currentIndex]?.id, idMyPet: currentPet?.id })
            }
            style={{
              margin: '30px',
              fontSize: '50px',
              color: 'red',
            }}
            size="large"
            className="roundButton"
          />
        </IconButton>

        <IconButton size="large">
          <YoutubeSearchedForIcon
            variant="contained"
            onClick={() => goBack()}
            size="large"
            style={{
              margin: '30px',
              fontSize: '50px',
            }}
            className="roundButton"
          />
        </IconButton>

        <IconButton size="large">
          <PetsIcon
            variant="contained"
            onClick={() =>
              clickLikeHandler({ id: petSwipe[currentIndex]?.id, idMyPet: currentPet?.id })
            }
            size="large"
            className="roundButton"
            style={{
              margin: '30px',
              fontSize: '40px',
              color: 'green',
            }}
          />
        </IconButton>
      </div>

      <CongratulationsModal open={open} onClose={onClose} />
    </div>
  );
}

export default Simple;

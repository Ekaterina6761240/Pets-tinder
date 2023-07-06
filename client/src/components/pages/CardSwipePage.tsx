import React, { useMemo, useRef, useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import PetsIcon from '@mui/icons-material/Pets';
import RestoreIcon from '@mui/icons-material/Restore';
import CongratulationsModal from '../ui/CongratulationsModal';
import { useAppDispatch, useAppSelector } from '../features/redux/hooks';
import {
  createDislikeThunk,
  createSwipePetThunk,
  getSwipePetThunk,
} from '../features/thunkAction/swipePet';

export default function CardSwipePage(): JSX.Element {
  const currentPet = useAppSelector((state) => state.currentPet.data);
  const dispatch = useAppDispatch();
  const petSwipe = useAppSelector((state) => state.petsSwipe.data);

  const [currentIndex, setCurrentIndex] = useState(petSwipe.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const [open, setOpen] = useState<boolean>(false);

  const childRefs = useMemo(
    () =>
      Array(petSwipe.length)
        .fill(0)
        .map((i) => React.createRef()),
    [petSwipe.length],
  );

  const updateCurrentIndex = (val: number): void => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < petSwipe.length - 1;
  const canSwipe = currentIndex >= 0;

  const swiped = (direction: string, image: string, index: number) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (image: string, idx: number) => {
    console.log(`${image} (${idx}) left the screen!`, currentIndexRef.current);
    if (currentIndexRef.current >= idx) {
      childRefs[idx].current?.restoreCard();
    }
  };

  const swipe = async (dir: string) => {
    if (canSwipe && currentIndex < petSwipe.length) {
      await childRefs[currentIndex].current?.swipe(dir);
    }
    if (dir === 'right') {
      setOpen(true);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current?.restoreCard();
  };

  const onClose = () => {
    setOpen(false);
  };

  const clickDislikeHandler = (data: { id: number; idMyPet: number }): void => {
    void dispatch(createDislikeThunk(data));
    swipe('left');
    if (canSwipe) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const clickLikeHandler = (data: { id: number; idMyPet: number }): void => {
    void dispatch(createSwipePetThunk(data));
    swipe('right');
    if (canGoBack) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    if (currentPet) {
      void dispatch(getSwipePetThunk(currentPet));
    }
  }, [currentPet]);

  return (
    <div className="container">
      <h1 style={{ fontFamily: 'Kanit, sans-serif', fontSize: '40px', marginBottom: '50px' }}>
        Выбери пару своему питомцу
      </h1>
      <div className="cardContainer" style={{ width: '600px', height: '900px' }}>
        {petSwipe.map((el, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={el.image}
            onSwipe={(dir) => swiped(dir, el.image, index)}
            onCardLeftScreen={() => outOfFrame(el.image, index)}
          >
            <div className={`card ${index === currentIndex ? 'active' : ''}`}>
              <div className="imageContainer" style={{ backgroundImage: `#EABD56` }} />
              <img
                src={`http://localhost:3001/img/${el?.image}`}
                alt=""
                style={{ width: '600px', height: '900px' }}
              />
              <h4 className="overlay-text">{el.name}</h4>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <Button
          variant="contained"
          startIcon={<CloseIcon />}
          onClick={() =>
            clickDislikeHandler({ id: petSwipe[currentIndex]?.id, idMyPet: currentPet?.id })
          }
          size="large"
          className="roundButton"
        />
        <Button
          variant="contained"
          startIcon={<RestoreIcon />}
          onClick={goBack}
          size="large"
          className="roundButton"
        />
        <Button
          variant="contained"
          startIcon={<PetsIcon />}
          onClick={() =>
            clickLikeHandler({ id: petSwipe[currentIndex]?.id, idMyPet: currentPet?.id })
          }
          size="large"
          className="roundButton"
        />
      </div>
    </div>
  );
}

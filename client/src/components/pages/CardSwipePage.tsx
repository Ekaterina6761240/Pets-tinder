import React, { useEffect, useMemo, useRef, useState } from 'react';
import TinderCard from 'react-tinder-card';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import PetsIcon from '@mui/icons-material/Pets';
import RestoreIcon from '@mui/icons-material/Restore';
import CongratulationsModal from '../ui/CongratulationsModal';
import { useAppDispatch, useAppSelector } from '../features/redux/hooks';
import getSwipePetThunk from '../features/thunkAction/swipePet';

const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://www.iwmbuzz.com/wp-content/uploads/2022/02/awesome-pawsome-rubina-dilaik-gets-playful-with-cute-pet-dog-see-photodump-moments-3.jpg',
    message: 'Привет',
    status: false,
  },
  {
    name: 'Erlich Bachman',
    url: 'https://avatars.mds.yandex.net/i?id=88f45152c5585bda08cbd6600d5c88fb_l-5450841-images-thumbs&ref=rim&n=13&w=1080&h=1350',
    message: 'Экстримальные увлечения',
    status: false,
  },
  {
    name: 'Monica Hall',
    url: 'https://i.pinimg.com/736x/bf/18/e5/bf18e5af5575e464a4b602503767a004.jpg',
    message: 'Пиши',
    status: true,
  },
  {
    name: 'Jared Dunn',
    url: 'https://avatars.mds.yandex.net/i?id=b43f164612c20d06ae30680d8a6242d5_l-5509203-images-thumbs&ref=rim&n=13&w=1080&h=1350',
    message: 'В активном поиске',
    status: false,
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://avatars.mds.yandex.net/i?id=5a3f12ec8e834228ecc923a485fd51ac_l-4835198-images-thumbs&ref=rim&n=13&w=1080&h=1350',
    message: '89853262112',
    status: false,
  },
];
export default function CardSwipePage(): JSX.Element {
  const currentPet = useAppSelector((state) => state.currentPet.data);

  console.log(currentPet, 'currentPet1111');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentPet) {
      void dispatch(getSwipePetThunk(currentPet));
    }
  }, [currentPet]);

  const petSwipe = useAppSelector((state) => state.petsSwipe.data);

  console.log(petSwipe, 'petSwipe!!!!!');

  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const [open, setOpen] = useState<boolean>(false);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    [],
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;
  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (url, idx) => {
    console.log(`${url} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir, status) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
    if (dir === 'right') {
      setOpen(true);
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="container">
      <h1 style={{ fontFamily: 'Kanit, sans-serif', fontSize: '40px', marginBottom: '50px' }}>
        Make your choice
      </h1>
      <div className="cardContainer" style={{ width: '600px', height: '900px' }}>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={character.url}
            onSwipe={(dir) => swiped(dir, character.url, index)}
            onCardLeftScreen={() => outOfFrame(character.url, index)}
          >
            <div className={`card ${index === currentIndex ? 'active' : ''}`}>
              <div
                className="imageContainer"
                style={{ backgroundImage: `url(${character.url})` }}
              />
              <img src={character.url} alt="" style={{ width: '400px', height: '500px' }} />
              <h4 className="overlay-text">{character.message}</h4>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>
          Swipe left!
        </button> */}
        <Button
          variant="contained"
          startIcon={<CloseIcon />}
          onClick={() => swipe('left')}
          size="large"
          className="roundButton"
        />
        <Button
          variant="contained"
          startIcon={<RestoreIcon />}
          onClick={() => goBack()}
          size="large"
          className="roundButton"
        />
        <Button
          variant="contained"
          startIcon={<PetsIcon />}
          onClick={() => swipe('right')}
          size="large"
          className="roundButton"
        />
      </div>
      {/* {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText">
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )} */}
      <CongratulationsModal open={open} onClose={onClose} />
    </div>
  );
}

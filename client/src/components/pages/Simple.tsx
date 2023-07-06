import React, { useState, useMemo, useRef, useEffect, useLayoutEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { useAppDispatch, useAppSelector } from '../features/redux/hooks';
import {
  createDislikeThunk,
  createSwipePetThunk,
  getSwipePetThunk,
} from '../features/thunkAction/swipePet';
import getAllMatchThunk from '../features/thunkAction/petMatchThankAction';
import CongratulationsModal from '../ui/CongratulationsModal';

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
    <div>
      <link href="https://fonts.googleapis.com/css?family=Damion&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Alatsi&display=swap" rel="stylesheet" />
      <h1>React Tinder Card</h1>
      <div className="cardContainer">
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
                }}
              />
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button
          type="button"
          style={{ backgroundColor: !canSwipe && '#c3c4d3' }}
          onClick={() =>
            clickDislikeHandler({ id: petSwipe[currentIndex]?.id, idMyPet: currentPet?.id })
          }
        >
          Свайп влево!
        </button>
        <button
          type="button"
          style={{ backgroundColor: !canGoBack && '#c3c4d3' }}
          onClick={() => goBack()}
        >
          Вернуть
        </button>
        <button
          type="button"
          style={{ backgroundColor: !canSwipe && '#c3c4d3' }}
          onClick={() =>
            clickLikeHandler(
              { id: petSwipe[currentIndex]?.id, idMyPet: currentPet?.id }
              // petSwipe[currentIndex]?.id,
            )
          }
        >
          Свайп вправо!
        </button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText" />
      ) : (
        <h2 className="infoText">
          Делай свайп вправо, если хочешь поставить лайк потенциальному партнеру!
        </h2>
      )}
      <CongratulationsModal open={open} onClose={onClose} />
    </div>
  );
}

export default Simple;

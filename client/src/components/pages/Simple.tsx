import React, { useState, useMemo, useRef, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { useAppDispatch, useAppSelector } from '../features/redux/hooks';
import {
  createDislikeThunk,
  createSwipePetThunk,
  getSwipePetThunk,
} from '../features/thunkAction/swipePet';

function Simple(): JSX.Element {
  const petSwipe = useAppSelector((state) => state.petsSwipe.data);
  const dispatch = useAppDispatch();
  const currentPet = useAppSelector((state) => state.currentPet.data);
  // вызывать функцию обновления состояния тех с кем метч и если метч то открывать модалку
  // как вызвать функцию на кликхендлере?

  useEffect(() => {
    if (currentPet) {
      void dispatch(getSwipePetThunk(currentPet));
    }
  }, [currentPet]);

  const [currentIndex, setCurrentIndex] = useState(petSwipe.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(petSwipe.length)
        .fill(0)
        .map((i) => React.createRef()),
    [],
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < petSwipe.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < petSwipe.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };
  const clickLikeHandler = async (data: { id: number; idMyPet: number }): Promise<void> => {
    await (() => swipe('right'));
    void dispatch(createSwipePetThunk(data));
  };

  const clickDislikeHandler = async (data: { id: number; idMyPet: number }): Promise<void> => {
    await (() => swipe('left'));
    void dispatch(createDislikeThunk(data));
  };
  // increase current index and show card
  const goBack = async (): Promise<void> => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

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
          onClick={() => swipe('left')}
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
          onClick={() => swipe('right')}
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
    </div>
  );
}

export default Simple;

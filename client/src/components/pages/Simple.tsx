import React, { useState, useMemo, useRef, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { useAppDispatch, useAppSelector } from '../features/redux/hooks';
import { getSwipePetThunk } from '../features/thunkAction/swipePet';

const db = [
  {
    name: 'Richard Hendricks',
    url: './img/richard.jpg',
  },
  {
    name: 'Erlich Bachman',
    url: './img/erlich.jpg',
  },
  {
    name: 'Monica Hall',
    url: './img/monica.jpg',
  },
  {
    name: 'Jared Dunn',
    url: './img/jared.jpg',
  },
  {
    name: 'Dinesh Chugtai',
    url: './img/dinesh.jpg',
  },
];

function Simple(): JSX.Element {
  const petSwipe = useAppSelector((state) => state.petsSwipe.data);
  const dispatch = useAppDispatch();
  const currentPet = useAppSelector((state) => state.currentPet.data);

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

  // increase current index and show card
  const goBack = async () => {
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
            <div
              style={{
                backgroundImage: `http://localhost:3001/img/${character.image}`,
              }}
              className="card"
            >
              <img src={`http://localhost:3001/img/${character.image}`} alt="" />
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>
          Swipe left!
        </button>
        <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>
          Undo swipe!
        </button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>
          Swipe right!
        </button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText">
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
    </div>
  );
}

export default Simple;

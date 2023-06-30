import Button from '@mui/material/Button';
import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import { useTrail, animated } from 'react-spring';

export default function MainPage(): JSX.Element {
  const items = ['footprint1'];
  const trail = useTrail(items.length, {
    to: { opacity: 1, transform: 'translateX(0)' },
    from: { opacity: 0, transform: 'translateX(100%)' },
  });
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        {trail.map((style, index) => (
          <animated.div key={index} style={style}>
            <h4 style={{ fontFamily: 'Kanit, sans-serif', fontSize: '40px', marginBottom: '50px' }}>
              Pet's Tinder
            </h4>
          </animated.div>
        ))}
      </div>
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Kanit, sans-serif', fontSize: '40px', marginBottom: '50px' }}>
          Сервис для поиска пары своему питомцу
        </p>
      </div>
      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button
          variant="outlined"
          size="large"
          startIcon={<PetsIcon />}
          style={{ borderRadius: '10px', width: '200px', margin: '10px' }}
          href="/auth/login"
        >
          Войти
        </Button>
        <Button
          variant="outlined"
          size="large"
          style={{ borderRadius: '10px', width: '300px', margin: '10px' }}
          href="/auth/reg"
        >
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
}

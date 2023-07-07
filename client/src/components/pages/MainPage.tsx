import React from 'react';
import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { useTrail, animated } from 'react-spring';
import { Parallax } from 'react-parallax';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: 'theme.palette.getContrastText(purple[500])',
  backgroundColor: 'purple[500]',
  '&:hover': {
    backgroundColor: 'purple[700]',
  },
}));

export default function MainPage(): JSX.Element {
  const items = ['footprint1'];
  const trail = useTrail(items.length, {
    to: { opacity: 1, transform: 'translateX(0)' },
    from: { opacity: 0, transform: 'translateX(100%)' },
  });
  const gradientColors = 'linear-gradient(to right, #1a202c, #4a5568)';
  const footerStyles = {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#1a202c',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div
      style={{
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Parallax bgImage="/last.png" strength={50}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '180vh',
            color: '#fff',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
            backgroundSize: 'contain',
          }}
        >
          <div>
            {trail.map((style, index) => (
              <animated.div key={index} style={style}>
                <motion.h4
                  style={{
                    fontFamily: 'Kanit, sans-serif',
                    fontSize: '40px',
                    background: `${gradientColors}`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: '0%' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  Pet's Tinder
                </motion.h4>
              </animated.div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'Kanit, sans-serif',
                fontSize: '40px',
                background: `${gradientColors}`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Сервис для поиска пары своему питомцу
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              
}}
>
<motion.div
style={{
display: 'flex',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
}}
initial={{ opacity: 0, y: 100 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.5 }}
>
<ColorButton
variant="contained"
size="large"
startIcon={<PetsIcon />}
style={{ borderRadius: '10px', width: '200px', margin: '10px' }}
href="/auth/login"
>
Войти
</ColorButton>
<Button
variant="contained"
size="large"
style={{ borderRadius: '10px', width: '300px', margin: '10px' }}
href="/auth/reg"
>
Зарегистрироваться
</Button>
</motion.div>
</div>
</div>
</Parallax>
<footer style={footerStyles}>
<p>Ваш суперанимированный футер здесь</p>
</footer>
</div>
);
}
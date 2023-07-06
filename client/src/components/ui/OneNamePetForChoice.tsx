import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setCurrentPet } from '../features/redux/slices/currentPetSlice';
import { useAppDispatch } from '../features/redux/reduxHooks';
import type { OnePet } from '../Types/PetsTypes';

export type PetProps = {
  userPet: OnePet;
};

export default function OneNamePetForChoice({ userPet }: PetProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleClick = (currentPet: OnePet): void => {
    dispatch(setCurrentPet(currentPet));
    navigate(`/cabinet`);
  };
  return (
    <Button
      onClick={() => handleClick(userPet)}
      sx={{
        backgroundColor: 'transparent',
        borderRadius: '10px',
        marginBottom: '1rem',
        color: '#000000',
      }}
      variant="outlined"
    >
      {userPet.type === 'Кошка' && userPet.sex === '♂'
        ? 'Кот'
        : userPet.type === 'Кошка' && userPet.sex === '♀'
        ? 'Кошка'
        : 'Собака'}{' '}
      {userPet.name}
    </Button>
  );
}

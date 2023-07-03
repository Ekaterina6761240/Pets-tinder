import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { PetType } from '../Types/petTypes';
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
    navigate(`/match`);
  };
  return (
    <Button
      onClick={() => handleClick(userPet)}
      sx={{ backgroundColor: '#F3EDED', borderRadius: '10px' }}
      variant="outlined"
    >
      {userPet.name}
    </Button>
  );
}

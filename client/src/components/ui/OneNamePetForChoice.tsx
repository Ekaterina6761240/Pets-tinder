import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { PetType } from '../Types/petTypes';

export type PetProps = {
  userPet: PetType;
};

export default function OneNamePetForChoice({ userPet }: PetProps): JSX.Element {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/cabinet/${userPet.id}`);
  };
  return (
    <Button
      onClick={handleClick}
      sx={{ backgroundColor: '#F3EDED', borderRadius: '10px' }}
      variant="outlined"
    >
      {userPet.name}
    </Button>
  );
}

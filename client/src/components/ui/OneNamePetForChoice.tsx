import React from 'react';
import { Button } from '@mui/material';
import type { PetType } from '../../types';

export type PetProps = {
    userPet: PetType;
};

export default function OneNamePetForChoice({ userPet }): JSX.Element {
  return (
    <Button sx={{ backgroundColor: '#F3EDED', borderRadius: '10px' }} variant="outlined">
      {userPet.name}
    </Button>
  );
}

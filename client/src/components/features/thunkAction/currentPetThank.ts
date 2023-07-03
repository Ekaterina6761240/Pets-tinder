import { createAsyncThunk } from '@reduxjs/toolkit';
import type { OnePet } from '../../Types/PetsTypes';
import getCurrentPage from '../../services/apiCurrentPet';

const getCurrentPetThunk = createAsyncThunk<OnePet>('pets/getCurrentPet', async () =>
  getCurrentPage()
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);
export default getCurrentPetThunk;

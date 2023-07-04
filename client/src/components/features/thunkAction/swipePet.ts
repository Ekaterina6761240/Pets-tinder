import { createAsyncThunk } from '@reduxjs/toolkit';
import type { OnePet } from '../../Types/PetsTypes';
import getSwipePets from '../../services/apiSwipe';

const getSwipePetThunk = createAsyncThunk<OnePet[], OnePet>('pets/getSwipePets', async (pet) =>
  getSwipePets(pet)
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);
export default getSwipePetThunk;

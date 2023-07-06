import { createAsyncThunk } from '@reduxjs/toolkit';
import type { OnePet } from '../../Types/PetsTypes';
import getMatchPets from '../../services/apiGetPetMatch';

const getAllMatchThunk = createAsyncThunk<OnePet[], number>('pets/getPets', async (id) =>
  getMatchPets(id)
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);
export default getAllMatchThunk;

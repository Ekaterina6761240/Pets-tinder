import { createAsyncThunk } from '@reduxjs/toolkit';
import type { OnePet } from '../../Types/PetsTypes';
import getPets from '../../services/apiGetPetMatch';

const getAllMatchThunk = createAsyncThunk<OnePet[], number>('pets/getPets', async (id) =>
  getPets(id)
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);
export default getAllMatchThunk;

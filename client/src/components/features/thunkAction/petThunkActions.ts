import { createAsyncThunk } from '@reduxjs/toolkit';
import { createPet, editPet, getOnePetType } from '../../services/apiPetService';
import type { EditFormType, PetType } from '../../Types/petTypes';

export const addPetThunk = createAsyncThunk<PetType, FormData>('pets/addPet', async (data) =>
  createPet(data)
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

export const editPetThunk = createAsyncThunk<PetType, { data: PetType; id: PetType['id'] }>(
  'pets/edit',
  async ({ data, id }) =>
    editPet(data, id)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

export const getAnimalsTypeThunk = createAsyncThunk<PetType[], void, { rejectValue: Error }>(
  'petsOneType',
  async (_, { rejectWithValue }) => {
    try {
      const res = getOnePetType();
      return await res;
    } catch (err) {
      return rejectWithValue(err as Error);
    }
  },
);

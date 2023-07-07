import { createAsyncThunk } from '@reduxjs/toolkit';
import { createPet, editPet, getOnePets, getPets } from '../../services/apiPetService';
import type { EditFormType, PetType } from '../../Types/petTypes';
import type { OnePet } from '../../Types/PetsTypes';

export const getPetsThunk = createAsyncThunk<OnePet[]>('pets/getPets', async () =>
  getPets()
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

export const getOnePetThunk = createAsyncThunk<OnePet, number>('pets/getOnePet', async (id) =>
  getOnePets(id)
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

export const addPetThunk = createAsyncThunk<OnePet, FormData>('pets/addPet', async (data) =>
  createPet(data)
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

// export const editPetThunk = createAsyncThunk<PetType, { data: PetType; id: PetType['id'] }>(
//   'pets/edit',
//   async ({ data, id }) =>
//     editPet(data, id)
//       .then((res) => res)
//       .catch((err) => Promise.reject(err)),
// );

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

export const editPetThunk = createAsyncThunk<PetType, { data: FormData; id: PetType['id'] }>(
  'pets/edit',
  async (data, { dispatch }) =>
    editPet(data)
      .then((res) => {
        void dispatch(getPetsThunk());
        return res;
      })
      .catch((err) => Promise.reject(err)),
);

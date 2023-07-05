import { createAsyncThunk } from '@reduxjs/toolkit';
import { createPet, editPet, getOnePets, getPets } from '../../services/apiPetService';
import type { EditFormType, PetType } from '../../Types/petTypes';

export const getPetsThunk = createAsyncThunk<PetType[]>('pets/getPets', async () =>
  getPets()
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

export const getOnePetThunk = createAsyncThunk<PetType, number>('pets/getOnePet', async (id) =>
  getOnePets(id)
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

export const addPetThunk = createAsyncThunk<PetType, FormData>('pets/addPet', async (data) =>
  createPet(data)
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
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

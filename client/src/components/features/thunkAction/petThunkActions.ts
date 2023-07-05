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

export const editPetThunk = createAsyncThunk<OnePet, { data: FormData; id: OnePet['id'] }>(
  'pets/edit',
  async (data) =>
    editPet(data)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

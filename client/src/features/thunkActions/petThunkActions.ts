import { createAsyncThunk } from '@reduxjs/toolkit';
import type { EditFormType, PetType } from '../../types/petTypes';
import { createPet, editPet } from '../../services';

export const addPetThunk = createAsyncThunk<PetType, FormData>('pets/addPet', async (data) =>
  createPet(data)
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

export const editPetThunk = createAsyncThunk<PetType, EditFormType>('pets/edit', async (data) =>
editPet(data)
.then(res => res)
.catch(err => Promise.reject(err))
);

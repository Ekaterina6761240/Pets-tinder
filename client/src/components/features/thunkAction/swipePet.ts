import { createAsyncThunk } from '@reduxjs/toolkit';
import type { OnePet } from '../../Types/PetsTypes';
import { createDislikePets, createLikePets, getSwipePets } from '../../services/apiSwipe';

export const getSwipePetThunk = createAsyncThunk<OnePet[], OnePet>(
  'pets/getSwipePets',
  async (pet) =>
    getSwipePets(pet)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

export const createSwipePetThunk = createAsyncThunk<OnePet['id'], { id: number; idMyPet: number }>(
  'pets/createSwipePets',
  async (data) =>
    createLikePets(data)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

export const createDislikeThunk = createAsyncThunk<OnePet['id'], { id: number; idMyPet: number }>(
  'pets/createDislikeSwipePets',
  async (data) =>
    createDislikePets(data)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

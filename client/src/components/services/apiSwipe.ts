import type { OnePet } from '../Types/PetsTypes';
import apiInstance from './apiConfig';

export const getSwipePets = (pet: OnePet): Promise<OnePet[]> =>
  apiInstance
    .post<OnePet[]>('/swipe', { pet })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const createLikePets = (data: { id: number; idMyPet: number }): Promise<OnePet['id']> =>
  apiInstance
    .post<OnePet['id']>('/swipe/like', data)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

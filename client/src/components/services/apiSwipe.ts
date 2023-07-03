import type { OnePet } from '../Types/PetsTypes';
import apiInstance from './apiConfig';

const getSwipePets = (pet: OnePet | null): Promise<OnePet[]> =>
  apiInstance
    .post<OnePet[]>('/swipe', pet)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export default getSwipePets;

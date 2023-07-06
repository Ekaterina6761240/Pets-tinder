import type { OnePet } from '../Types/PetsTypes';
import apiInstance from './apiConfig';

const getMatchPets = (id: number): Promise<OnePet[]> =>
  apiInstance
    .post<OnePet[]>(`/match`, { id })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export default getMatchPets;

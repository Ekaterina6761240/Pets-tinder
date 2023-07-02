import type { OnePet } from '../Types/PetsTypes';
import apiInstance from './apiConfig';

const getPets = (id: number): Promise<OnePet[]> =>
  apiInstance
    .get<OnePet[]>(`/match/${id}`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export default getPets;

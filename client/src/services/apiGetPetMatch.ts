import type { OnePet } from '../Types/PetsTypes';
import apiInstance from './apiConfig';

const getPets = (): Promise<OnePet[]> =>
  apiInstance
    .get<OnePet[]>('/match')
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export default getPets;

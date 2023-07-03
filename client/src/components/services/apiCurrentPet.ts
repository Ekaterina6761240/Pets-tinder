import type { OnePet } from '../Types/PetsTypes';
import apiInstance from './apiConfig';

const getCurrentPage = (): Promise<OnePet> =>
  apiInstance
    .post<OnePet>(`/current`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export default getCurrentPage;

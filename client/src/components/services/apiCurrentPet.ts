import type { OnePet } from '../Types/PetsTypes';
import apiInstance from './apiConfig';

const getCurrentPage = (id: number): Promise<OnePet> =>
  apiInstance
    .post<OnePet>(`/current`, id)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

const getAllCurrentPage = (): Promise<OnePet[]> =>
  apiInstance
    .get<OnePet[]>(`/current`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export { getCurrentPage, getAllCurrentPage };

export default getCurrentPage;

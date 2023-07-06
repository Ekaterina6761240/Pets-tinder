import apiInstance from './apiConfig';
import type { EditFormType, PetType } from '../Types/petTypes';

export const createPet = (data: FormData): Promise<PetType> =>
  apiInstance
    .post<PetType>('api/pets', data)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const editPet = (data: PetType, id: PetType['id']): Promise<PetType> =>
  apiInstance
    .patch<PetType>(`/api/pets/${id}`, data)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const getOnePetType = (): Promise<PetType[]> =>
  apiInstance<PetType[]>(`/api/pets/:type/getPets`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

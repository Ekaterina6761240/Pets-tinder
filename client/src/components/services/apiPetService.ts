import apiInstance from './apiConfig';

import type { EditFormType, PetType } from '../Types/petTypes';

export const getPets = (): Promise<PetType[]> =>
  apiInstance
    .get<PetType[]>('api/pets')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const getOnePets = (id: number): Promise<PetType> =>
  apiInstance
    .get<PetType>(`api/pets/${id}`)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const createPet = (data: FormData): Promise<PetType> =>
  apiInstance
    .post<PetType>('api/pets', data)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const editPet = (data: {data: FormData, id: number}): Promise<PetType> =>
  apiInstance
    .post<PetType>(`/api/pets/${data.id}`, data.data )
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

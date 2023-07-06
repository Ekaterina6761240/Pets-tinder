import apiInstance from './apiConfig';

import type { EditFormType, PetType } from '../Types/petTypes';
import type { OnePet } from '../Types/PetsTypes';

export const getPets = (): Promise<OnePet[]> =>
  apiInstance
    .get<OnePet[]>('api/pets')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const getOnePets = (id: number): Promise<OnePet> =>
  apiInstance
    .get<OnePet>(`api/pets/${id}`)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const createPet = (data: FormData): Promise<OnePet> =>
  apiInstance
    .post<OnePet>('api/pets', data)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

// export const editPet = (data: PetType, id: PetType['id']): Promise<PetType> =>
//   apiInstance
//     .patch<PetType>(`/api/pets/${id}`, data)
//     .then((res) => res.data)
//     .catch((err) => Promise.reject(err));

export const getOnePetType = (): Promise<PetType[]> =>
  apiInstance<PetType[]>(`/api/pets/:type/getPets`)
  
export const editPet = (data: { data: FormData; id: number }): Promise<OnePet> =>
  apiInstance
    .post<OnePet>(`/api/pets/${data.id}`, data.data)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

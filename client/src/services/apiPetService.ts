import type { EditFormType, PetType } from '../types';
import apiInstance from './apiConfig';

export const createPet = (data: FormData): Promise<PetType> =>
  apiInstance
    .post<PetType>('api/pets', data)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

export const editPet = ({
  id,
  name,
  type,
  age,
  // img,
  sex,
  city,
  about,
  pedigree,
}: EditFormType): Promise<PetType> =>
  apiInstance
    .patch<PetType>(`/pets/${id}`, { name, type, age, sex, city, about, pedigree })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

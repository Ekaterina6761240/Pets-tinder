import apiInstance from './apiConfig';
import type { EditFormType, PetType } from '../Types/petTypes';

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
  image,
  sex,
  city,
  info,
  pedigree,
}: EditFormType): Promise<PetType> =>
  apiInstance
    .patch<PetType>(`/api/pets/${id}`, { name, type, age, image, sex, city, info, pedigree })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));

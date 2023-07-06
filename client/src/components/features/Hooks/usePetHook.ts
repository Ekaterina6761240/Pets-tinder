import type React from 'react';
import type { PetFormType, PetType } from '../../Types/petTypes';
import { useAppDispatch } from '../redux/reduxHooks';
import { addPetThunk, editPetThunk, getAnimalsTypeThunk } from '../thunkAction/petThunkActions';

export type SubmitHandler = {
  submitHandler: (e: React.FormEvent<HTMLFormElement & PetFormType>) => void;
  editHandler: (e: React.FormEvent<HTMLFormElement & PetFormType>, id: PetType['id']) => void;
};

export default function usePetHook(): SubmitHandler {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement & PetFormType>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    void dispatch(addPetThunk(formData));
  };

  const editHandler = (
    e: React.FormEvent<HTMLFormElement & PetFormType>,
    id: PetType['id'],
  ): void => {
    e.preventDefault();
    const data = {
      name: e.currentTarget.name.value,
      type: e.currentTarget.type.value,
      age: e.currentTarget.age.value,
      sex: e.currentTarget.sex.value,
      image: e.currentTarget.image.value,
      city: e.currentTarget.city.value,
      info: e.currentTarget.info.value,
      pedigree: e.currentTarget.pedigree.value,
      id,
    };
    console.log(id, data, e.currentTarget.image.value, 'id, data:-----++++++-----');

    void dispatch(editPetThunk(data));
  };

  const getAnimalsTypeHandler = async (): Promise<PetType[]> => dispatch(getAnimalsTypeThunk());

  return { submitHandler, editHandler };
}

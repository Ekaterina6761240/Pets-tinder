import type React from 'react';
import { useAppDispatch } from '../features/redux/reduxHooks';
import { addPetThunk, editPetThunk } from '../features/thunkActions/petThunkActions';
import type { PetFormType, PetType } from '../types';

export type SubmitHandler = {
  submitHandler: (e: React.FormEvent<HTMLFormElement & PetFormType>) => void;
  editHandler: (e: React.FormEvent<HTMLFormElement & PetFormType>, id: PetType['id']) => void;
};

export default function usePetHook(): SubmitHandler {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement & PetFormType>): void => {
    e.preventDefault();

    // if (!e.currentTarget.name.value ||!e.currentTarget.type.value ||!e.currentTarget.age.value ||!e.currentTarget.sex.value ||!e.currentTarget.city.value ||!e.currentTarget.about.value ||!e.currentTarget.pedigree.value ) return;
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    // const formData = new FormData();
    // formData.append('file', e.currentTarget.file.files[0]);
    // formData.append('name', e.currentTarget.name.value);
    // formData.append('type', e.currentTarget.type.value);
    // formData.append('age', e.currentTarget.age.value);
    // formData.append('sex', e.currentTarget.sex.value);
    // formData.append('city', e.currentTarget.city.value);
    // formData.append('info', e.currentTarget.info.value);
    // formData.append('pedigree', e.currentTarget.pedigree.value);
    void dispatch(addPetThunk(formData));
    console.log(formData, '-------------');
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

  return { submitHandler, editHandler };
}

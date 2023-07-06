import type React from 'react';
import { useNavigate } from 'react-router-dom';
import type { PetFormType, PetType } from '../../Types/petTypes';
import { useAppDispatch } from '../redux/reduxHooks';
import { addPetThunk, editPetThunk, getAnimalsTypeThunk } from '../thunkAction/petThunkActions';

import type { OnePet } from '../../Types/PetsTypes';

export type SubmitHandler = {
  submitHandler: (e: React.FormEvent<HTMLFormElement & PetFormType>) => void;
  editHandler: (e: React.FormEvent<HTMLFormElement & PetFormType>, id: OnePet['id']) => void;
};

export default function usePetHook(): SubmitHandler {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement & PetFormType>): void => {
    e.preventDefault();
    // const formData = Object.fromEntries(new FormData(e.currentTarget));
    const formData = new FormData();
    formData.append('name', e.currentTarget.name.value);
    formData.append('type', e.currentTarget.type.value);
    formData.append('age', e.currentTarget.age.value);
    formData.append('sex', e.currentTarget.sex.value);
    formData.append('image', e.currentTarget.image.files[0]);
    formData.append('city', e.currentTarget.city.value);
    formData.append('info', e.currentTarget.info.value);
    formData.append('pedigree', e.currentTarget.pedigree.value);
    void dispatch(addPetThunk(formData)).then(() => {
      const isFormValid = Array.from(formData.values()).every((value) => Boolean(value));
      if (isFormValid) {
        navigate('/choice');
      }
    });
  };

  const editHandler = (
    e: React.FormEvent<HTMLFormElement & PetFormType>,
    id: OnePet['id'],
  ): void => {
    e.preventDefault();
    console.log('change');

    const formData = new FormData();

    formData.append('name', e.currentTarget.name.value);
    formData.append('type', e.currentTarget.type.value);
    formData.append('age', e.currentTarget.age.value);
    formData.append('sex', e.currentTarget.sex.value);
    formData.append('image', e.currentTarget.image.files[0]);
    formData.append('city', e.currentTarget.city.value);
    formData.append('info', e.currentTarget.info.value);
    formData.append('pedigree', e.currentTarget.pedigree.value);
    console.log(formData, '==========');

    void dispatch(editPetThunk({ data: formData, id }));

    navigate('/cabinet');
  };

  const getAnimalsTypeHandler = async (): Promise<PetType[]> => dispatch(getAnimalsTypeThunk());

  return { submitHandler, editHandler };
}

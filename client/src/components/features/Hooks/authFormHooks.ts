import type React from 'react';
import { useState } from 'react';
import type { UserLoginType, UserRegType } from '../../Types/userTypes';
import { useAppDispatch } from '../reduxHooks';
import { userLoginThunk, userRegThunk } from '../thunkAction/userThunkAction';

export type SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;

export type AuthHookReturnedType = {
  regHandler: SubmitHandler;
  loginHandler: SubmitHandler;
  redirectToChoice: boolean;
};

export default function useFormHook(): AuthHookReturnedType {
  const [redirectToChoice, setRedirectToChoice] = useState(false);
  const dispatch = useAppDispatch();
  const regHandler: SubmitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserRegType;
    void dispatch(userRegThunk(formData));
    setRedirectToChoice(true);
  };

  const loginHandler: SubmitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserLoginType;
    void dispatch(userLoginThunk(formData));
  };

  return { regHandler, loginHandler, redirectToChoice };
}

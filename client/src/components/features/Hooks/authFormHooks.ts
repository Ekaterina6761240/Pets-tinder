import type React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import type { UserLoginType, UserRegType } from '../../Types/userTypes';
import { useAppDispatch } from '../redux/reduxHooks';
import { userLoginThunk, userRegThunk } from '../thunkAction/userThunkAction';

export type SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;

export type ReCapchaHandler = (value: string) => () => void;

export type AuthHookReturnedType = {
  regHandler: SubmitHandler;
  loginHandler: SubmitHandler;
  reCapchaHandler: ReCapchaHandler;
  disabled: boolean;
  type: string | undefined;
};

export default function useFormHook(): AuthHookReturnedType {
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState(true);
  const { type } = useParams();
  const regHandler: SubmitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserRegType;
    void dispatch(userRegThunk(formData));
    navigate('/choice', { replace: true });
  };

  const loginHandler: SubmitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserLoginType;
    void dispatch(userLoginThunk(formData));

    navigate('/choice', { replace: true });
  };

  const reCapchaHandler = (value: string): (() => void) => {
    if (value) {
      const timer = setTimeout(() => {
        setDisabled(false);
      }, 500);
      return () => clearTimeout(timer);
    }
    return () => {};
  };

  return { regHandler, loginHandler, reCapchaHandler, disabled, type };
}

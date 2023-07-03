import type React from 'react';
import { useNavigate } from 'react-router-dom';
import type { UserLoginType, UserRegType } from '../../Types/userTypes';
import { useAppDispatch } from '../redux/reduxHooks';
import { userLoginThunk, userRegThunk } from '../thunkAction/userThunkAction';

export type SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => void;

export type AuthHookReturnedType = {
  regHandler: SubmitHandler;
  loginHandler: SubmitHandler;
};

export default function useFormHook(): AuthHookReturnedType {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const regHandler: SubmitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserRegType;
    void dispatch(userRegThunk(formData));
    window.location.href = 'http://localhost:3001/app/choice';
    // navigate('app/choice', { replace: true });
  };

  const loginHandler: SubmitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserLoginType;
    void dispatch(userLoginThunk(formData));
    // window.location.href = 'http://localhost:3001/app/choice';
    window.location.assign('http://localhost:3001/app/choice');
    navigate('app/choice', { replace: true });
  };

  return { regHandler, loginHandler };
}

import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkUser, loginUser, regUser } from '../../services/userService';
import type { UserLoginType, UserRegType, UserType } from '../../Types/userTypes';

export const userCheckThunk = createAsyncThunk<UserType>('user/check', async () =>
  checkUser()
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

export const userRegThunk = createAsyncThunk<UserType, UserRegType>('user/reg', async (data) =>
  regUser(data)
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

export const userLoginThunk = createAsyncThunk<UserType, UserLoginType>(
  'user/login',
  async (data) =>
    loginUser(data)
      .then((res) => res)
      .catch((err) => Promise.reject(err)),
);

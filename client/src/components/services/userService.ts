import type { UserLoginType, UserRegType, UserType } from '../Types/userTypes';
import apiInstanse from './apiConfig';

export const checkUser = (): Promise<UserType> =>
  apiInstanse
    .get<UserType>('/api/auth/check')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const regUser = (data: UserRegType): Promise<UserType> =>
  apiInstanse
    .post<UserType>('/api/auth/reg', data)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const loginUser = (data: UserLoginType): Promise<UserType> =>
  apiInstanse
    .post<UserType>('/api/auth/login', data)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

export const logoutUser = (): Promise<UserType> =>
  apiInstanse
    .get<UserType>('/api/auth/logout')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { UserStateType, UserType } from '../../../Types/userTypes';
import {
  logoutThunk,
  userCheckThunk,
  userLoginThunk,
  userRegThunk,
} from '../../thunkAction/userThunkAction';
import type { AppThunk } from '../hooks';
import apiInstance from '../../../services/apiConfig';

export type UserState = UserType & { status: boolean };

const initialState: UserStateType = {
  status: 'pending',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserStateType,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(userCheckThunk.fulfilled, (state, action) => ({
      status: 'success',
      data: action.payload,
    }));
    builder.addCase(userCheckThunk.rejected, (state, action) => ({
      status: 'guest',
    }));
    builder.addCase(userRegThunk.fulfilled, (state, action) => ({
      status: 'success',
      data: action.payload,
    }));
    builder.addCase(userLoginThunk.fulfilled, (state, action) => ({
      status: 'success',
      data: action.payload,
    }));
    builder.addCase(logoutThunk.fulfilled, (state, action) => ({ status: 'guest' }));
  },
});

export default userSlice.reducer;

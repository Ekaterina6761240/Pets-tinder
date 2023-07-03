import { createSlice } from '@reduxjs/toolkit';
import type { UserStateType } from '../../../Types/userTypes';
import { userCheckThunk, userLoginThunk, userRegThunk } from '../../thunkAction/userThunkAction';

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
  },
});

export default userSlice.reducer;

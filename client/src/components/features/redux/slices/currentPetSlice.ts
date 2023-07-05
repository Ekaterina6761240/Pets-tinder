import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { OnePet } from '../../../Types/PetsTypes';
import getCurrentPetThunk from '../../thunkAction/currentPetThank';

export type InitialState = {
  data: OnePet | null;
};

const initialState: InitialState = {
  data: null,
};

const currentPetSlice = createSlice({
  name: 'currentPet',
  initialState,
  reducers: {
    setCurrentPet: (state, action: PayloadAction<OnePet>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentPetThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    // builder.addCase(getCurrentAllPetThunk.fulfilled, (state, action) => {
    //   state.data = action.payload;
    // });
  },
});

export const { setCurrentPet } = currentPetSlice.actions;

export default currentPetSlice.reducer;

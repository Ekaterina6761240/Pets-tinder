import { createSlice } from '@reduxjs/toolkit';
import type { Pet } from '../../../Types/PetsTypes';
import getSwipePetThunk from '../../thunkAction/swipePet';

export type InitialState = {
  data: Pet;
};

const initialState: InitialState = {
  data: [],
};

const petSwipeSlice = createSlice({
  name: 'petsSwipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSwipePetThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default petSwipeSlice.reducer;

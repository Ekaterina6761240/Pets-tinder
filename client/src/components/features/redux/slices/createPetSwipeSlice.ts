import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { OnePet, Pet } from '../../../Types/PetsTypes';
import { createSwipePetThunk } from '../../thunkAction/swipePet';

export type InitialState = {
  data: Pet;
};

const initialState: InitialState = {
  data: [],
};

const petSwipeSlice = createSlice({
  name: 'addPetsSwipe',
  initialState,
  reducers: {
    addSwipePet: (state, action: PayloadAction<OnePet>) => {
      state.data.push(action.payload);
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(createSwipePetThunk.fulfilled, (state, action) => {
  //     state.data = action.payload;
  //   });
  // },
});

// напиши другую фанку которая будет отдавать предыдущее сзначение рет которое мы свайпнули.она не нужна мы сохраняем это значение на фронте.
export const { addSwipePet } = petSwipeSlice.actions;
export default petSwipeSlice.reducer;

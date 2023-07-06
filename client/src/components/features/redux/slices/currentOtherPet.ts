import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { OnePet } from '../../../Types/PetsTypes';

export type InitialState = {
  data: OnePet | null;
};

const initialState: InitialState = {
  data: null,
};

const currentOtherPetSlice = createSlice({
  name: 'currentOtherPet',
  initialState,
  reducers: {
    setCurrentOtherPet: (state, action: PayloadAction<OnePet>) => {
      state.data = action.payload;
    },
  },
});
export const { setCurrentOtherPet } = currentOtherPetSlice.actions;

export default currentOtherPetSlice.reducer;

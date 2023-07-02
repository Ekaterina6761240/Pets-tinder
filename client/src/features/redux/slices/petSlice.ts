import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { PetType } from '../../../types/petTypes';

export type InitialState = {
  data: PetType[];
};

const initialState: InitialState = {
  data: [],
};

const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    getPets: (state, action: PayloadAction<PetType[]>) => {
      state.data = action.payload;
    },
    addPet: (state, action: PayloadAction<PetType>) => {
      state.data.push(action.payload);
    },
    editPet: (state, action: PayloadAction<PetType>) => {
      state.data = state.data.map((pet) => (pet.id === action.payload.id ? action.payload : pet));
    },
  },
});

export default petSlice.reducer;

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { PetType } from '../../../types/petTypes';
import { addPetThunk, editPetThunk, getPetsThunk } from '../../thunkActions/petThunkActions';

export type InitialState = {
  data: PetType[];
};

const initialState: InitialState = {
  data: [],
};

const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPetsThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(addPetThunk.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(editPetThunk.fulfilled, (state, action) => {
      state.data = state.data.map((pet) => (pet.id === action.payload.id ? action.payload : pet));
    });
  },
});

export default petSlice.reducer;

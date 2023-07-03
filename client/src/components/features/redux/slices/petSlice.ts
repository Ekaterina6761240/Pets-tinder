import { createSlice } from '@reduxjs/toolkit';
import {
  addPetThunk,
  editPetThunk,
  getOnePetThunk,
  getPetsThunk,
} from '../../thunkAction/petThunkActions';
import type { PetType } from '../../../Types/petTypes';

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
    builder.addCase(getOnePetThunk.fulfilled, (state, action) => {
      state.data[0] = action.payload;
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
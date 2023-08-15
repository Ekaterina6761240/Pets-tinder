import { createSlice } from '@reduxjs/toolkit';
import {
  addPetThunk,
  editPetThunk,
  getOnePetThunk,
  getPetsThunk,
  getAnimalsTypeThunk,
} from '../../thunkAction/petThunkActions';
import type { OnePet } from '../../../Types/PetsTypes';

export type InitialState = {
  data: OnePet[];
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

    builder.addCase(getAnimalsTypeThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default petSlice.reducer;

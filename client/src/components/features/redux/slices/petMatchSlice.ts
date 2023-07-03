import { createSlice } from '@reduxjs/toolkit';
import type { Pet } from '../../../Types/PetsTypes';
import getAllMatchThunk from '../../thunkAction/petMatchThankAction';

export type InitialState = {
  data: Pet;
};

const initialState: InitialState = {
  data: [],
};

const petMatchSlice = createSlice({
  name: 'petMatch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMatchThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default petMatchSlice.reducer;

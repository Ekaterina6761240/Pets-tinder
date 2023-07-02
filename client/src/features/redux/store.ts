import { configureStore } from '@reduxjs/toolkit';
import petSlice from './slices/petSlice';
import petMatchSlice from './slices/petMatchSlice';

const store = configureStore({
  reducer: {
    pets: petMatchSlice,
  },
});

export default store;
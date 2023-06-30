import { configureStore } from '@reduxjs/toolkit';
import petSlice from './slices/petSlice';

const store = configureStore({
  reducer: {
    pets: petSlice,
  },
});

export default store;
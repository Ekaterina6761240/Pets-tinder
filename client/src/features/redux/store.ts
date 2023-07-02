import { configureStore } from '@reduxjs/toolkit';
import petSlice from './slices/petSlice';
import petMatchSlice from './slices/petMatchSlice';

const store = configureStore({
  reducer: {
    pets: petSlice,
    petMatch: petMatchSlice,
  },
});

export default store;

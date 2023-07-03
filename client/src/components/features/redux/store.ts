import { configureStore } from '@reduxjs/toolkit';
import petMatchSlice from './slices/petMatchSlice';
import petSlice from './slices/petSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    pets: petSlice,
    petMatch: petMatchSlice,
  },
});

export default store;

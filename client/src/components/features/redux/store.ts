import { configureStore } from '@reduxjs/toolkit';
import petMatchSlice from './slices/petMatchSlice';
import petSlice from './slices/petSlice';
import userSlice from './slices/userSlice';
import currentPetSlice from './slices/currentPetSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    pets: petSlice,
    petMatch: petMatchSlice,
    currentPet: currentPetSlice,
  },
});

export default store;

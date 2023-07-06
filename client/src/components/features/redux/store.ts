import { configureStore } from '@reduxjs/toolkit';
import petMatchSlice from './slices/petMatchSlice';
import petSlice from './slices/petSlice';
import userSlice from './slices/userSlice';
import wsSlice from './slices/wsSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    pets: petSlice,
    petMatch: petMatchSlice,
    ws: wsSlice,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import petMatchSlice from './slices/petMatchSlice';
import petSlice from './slices/petSlice';
import userSlice from './slices/userSlice';
import wsSlice from './slices/wsSlice';
import currentPetSlice from './slices/currentPetSlice';
import petSwipeSlice from './slices/petSwipeSlice';
import currentOtherPetSlice from './slices/currentOtherPet';

const store = configureStore({
  reducer: {
    user: userSlice,
    pets: petSlice,
    petMatch: petMatchSlice,
    ws: wsSlice,
    currentPet: currentPetSlice,
    petsSwipe: petSwipeSlice,
    currentOtherPet: currentOtherPetSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import petMatchSlice from './slices/petMatchSlice';
import petSlice from './slices/petSlice';
import userSlice from './slices/userSlice';
import currentPetSlice from './slices/currentPetSlice';
import petSwipeSlice from './slices/petSwipeSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    pets: petSlice,
    petMatch: petMatchSlice,
    currentPet: currentPetSlice,
    petsSwipe: petSwipeSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

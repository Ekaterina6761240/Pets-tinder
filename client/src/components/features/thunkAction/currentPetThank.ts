import { createAsyncThunk } from '@reduxjs/toolkit';
import type { OnePet } from '../../Types/PetsTypes';
import getCurrentPage from '../../services/apiCurrentPet';

const getCurrentPetThunk = createAsyncThunk<OnePet, number>('pets/getCurrentPet', async (id) =>
  getCurrentPage(id)
    .then((res) => res)
    .catch((err) => Promise.reject(err)),
);

// const getCurrentAllPetThunk = createAsyncThunk<OnePet[]>('pets/getCurrentAllPet', async () =>
//   getAllCurrentPage()
//     .then((res) => res)
//     .catch((err) => Promise.reject(err)),
// );

// export { getCurrentAllPetThunk };
export default getCurrentPetThunk;

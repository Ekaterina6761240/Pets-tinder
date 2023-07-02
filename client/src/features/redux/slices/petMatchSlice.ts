import { createSlice } from '@reduxjs/toolkit';
import type { Pet } from '../../../Types/PetsTypes';
import getAllMatchThunk from '../../thunkActions/petMatchThankAction';

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

// const MOKlike: PetMatch[] = [
//   {
//     myPet: {
//       id: 1,
//       name: 'Бобик',
//       img: 'https://s0.rbk.ru/v6_top_pics/media/img/7/19/756752350085197.webp',
//       age: 3,
//       user_id: 2,
//       petType: 'собака',
//     },
//     whoPet: {
//       id: 2,
//       name: 'Шарик',
//       img: 'https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_752x940/697/c500/ed7e52e-ab4d-4d1b-80fe-15e99ffbf6b6.jpeg',
//       age: 1,
//       user_id: 1,
//       petType: 'собака',
//     },
//   },
// ];
// type PetMatch = {
//   myPet: OnePet;
//   whoPet: OnePet;
// };

// like [{user_id and my_pet_id которого лайкнули who_pet}]
export default petMatchSlice.reducer;

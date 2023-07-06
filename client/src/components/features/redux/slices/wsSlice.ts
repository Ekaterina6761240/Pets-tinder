import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../../Types/userTypes';
import type { InitWsType, WsMessages } from '../../../Types/wsTypes';

const initialState: InitWsType = {
  status: false,
  users: [],
  messages: [],
};

const wsSlice = createSlice({
  name: 'ws',
  initialState,
  reducers: {
    setWs: (state, action: PayloadAction<boolean>) => {
      if (action.payload === false) {
        return { status: false, users: [], messages: [] };
      }
      state.status = true;
    },

    setUsersOnline: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },

    setMessage: (state, action: PayloadAction<WsMessages>) => {
      console.log('state');
      state.messages.push(action.payload);
    },
  },
});

export default wsSlice.reducer;
export const { setWs, setUsersOnline, setMessage } = wsSlice.actions;

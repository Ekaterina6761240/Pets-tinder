import type React from 'react';
import type { UserType } from './userTypes';

export type WsMessages = {
  user: UserType;
  message: string;
  id: number;
};

export type InitWsType = {
  status: boolean;
  messages: WsMessages[];
  users: UserType[];
};

export type WsUsersOnline = {
  type: 'USERS_ONLINE';
  payload: UserType[];
};

export type WsChatMessage = {
  type: 'CHAT_MESSAGE';
  payload: WsMessages;
};

export type WsFormType = React.FormEvent<HTMLFormElement & { message: HTMLInputElement }>;

export type WsRecivedMessagesType = WsUsersOnline | WsChatMessage;

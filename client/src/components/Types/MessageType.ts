export type MessageType = {
  id: number;
  user_id: number;
  message: string;
  timestamp: object;
  match_id: number;
};

export type WsFormType = React.FormEvent<HTMLFormElement & { message: HTMLInputElement }>;

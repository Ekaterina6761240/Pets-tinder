export type UserType = {
  id: number;
  name: string;
  email: string;
};

export type FetchingUserType = {
  status: 'pending';
};

export type FetchedUserType = {
  status: 'success';
};

export type FailedUserType = {
  status: 'guest';
};

export type UserRegType = {
  name: string;
  email: string;
  password: string;
};

export type UserLoginType = Omit<UserRegType, 'name'>;

export type UserStateType = FetchingUserType | FetchedUserType | FailedUserType;

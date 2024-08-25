import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;

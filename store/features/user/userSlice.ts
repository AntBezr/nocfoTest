import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Asset } from 'expo-asset';

import { NotificationsType, User } from '../../../types/store';
const initialState: User = {
  id: '1',
  theme: 'default',
  image: Asset.fromModule(require('@assets/images/user.jpg')).uri,
  name: 'John Doe',
  email: 'asdas@gmail.com',
  bio: 'Just a chill guy who loves plants',
  notifications: {
    waterPlant: true,
    friendRequest: true,
    plantBirthday: true,
    plantCareTips: true,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editUser: (state, action: PayloadAction<User>) => {
      return { ...state, ...action.payload };
    },
    editNotifications: (state, action: PayloadAction<NotificationsType>) => {
      state.notifications = { ...state.notifications, ...action.payload };
    },
  },
});

export const { editUser, editNotifications } = userSlice.actions;
export default userSlice.reducer;

import { NotificationsType, User } from 'types/store';

import { editNotifications, editUser } from '@store/features/user/userSlice';
import { useAppDispatch } from './useAppDispatch';

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  return {
    editNotifications: (notifications: NotificationsType) =>
      dispatch(editNotifications(notifications)),
    editUser: (user: User) => dispatch(editUser(user)),
  };
};

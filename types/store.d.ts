export type Plant = {
  id: string;
  name: string;
  dateAdded: string;
  image: string;
  description: string;
};

export type User = {
  id: string;
  theme: string;
  image: string;
  name: string;
  email: string;
  bio: string;
  notifications: NotificationsType;
};

export type NotificationsType = {
  waterPlant: boolean;
  friendRequest: boolean;
  plantBirthday: boolean;
  plantCareTips: boolean;
};

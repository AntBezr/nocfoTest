import { Plant } from './store';

export type TabBarIconProps = {
  tabName: string;
  color: string;
};

export type BottomTabParamList = {
  index: ListStackParamList;
  Settings: SettingsStackParamList;
  Profile: ProfileStackParamList;
};

export type ListStackParamList = {
  List: undefined;
  ScanView: undefined;
  DetailView: { plant: Plant };
  EditView: { plant: Plant };
};

export type ProfileStackParamList = {
  ProfileView: undefined;
  EditProfileView: undefined;
};

export type SettingsStackParamList = {
  SettingsView: undefined;
  ChangePasswordView: undefined;
  NotificationView: undefined;
  RecomendationsView: undefined;
};

import { Plant } from "./store.d";

export type TabBarIconProps = {
  tabName: string;
  color: string;
};

export type BottomTabParamList = {
  index: ListStackParamList;
  Settings: undefined;
  Profile: undefined;
};

export type ListStackParamList = {
  List: undefined;
  ScanView: undefined;
  DetailView: { plant: Plant };
  EditView: { plant: Plant };
};

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  EditProfile: undefined;
};

export default {};

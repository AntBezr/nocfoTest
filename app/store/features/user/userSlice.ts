import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plant, User } from "../../../types/store.d";
import { useColorScheme } from "app/hooks/useColorScheme.web";
import { Asset } from "expo-asset";
const initialState: User = {
  id: "1",
  theme: useColorScheme(),
  image: Asset.fromModule(require("@assets/images/user.jpg")).uri,
  name: "John Doe",
  email: "asdas@gmail.com",
  bio: "Just a chill guy who loves plants",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editUser: (state, action: PayloadAction<User>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { editUser } = userSlice.actions;
export default userSlice.reducer;

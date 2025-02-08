import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Asset } from "expo-asset";

import { User } from "../../../types/store.d";
const initialState: User = {
  id: "1",
  theme: "default",
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

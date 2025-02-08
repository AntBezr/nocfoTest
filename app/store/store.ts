import { configureStore } from "@reduxjs/toolkit";
import plantsReducer from "./features/plants/plantsSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    plants: plantsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

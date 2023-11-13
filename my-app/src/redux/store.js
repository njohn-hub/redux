import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Feature/Counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

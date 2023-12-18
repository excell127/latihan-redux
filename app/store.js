import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counter";

export const store = configureStore({
  reducer: { counter: counterSlice },
});

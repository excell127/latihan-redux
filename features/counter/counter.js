import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByNumber: (state, actions) => {
      state.value = actions.payload.value;
    },
  },
});

export const { increment, decrement, incrementByNumber } = counterSlice.actions;

export const useCounterValue = () => {
  const value = useSelector((state) => state.counter.value);
  return value;
};

export default counterSlice.reducer;

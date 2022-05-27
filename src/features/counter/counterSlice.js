import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //ACTIONS
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload; //payload (similar to old way)
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions; //for our logic

export default counterSlice.reducer; //for the store

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const sliceCounter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //actions
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    //reset action
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      //increase by amount passed in
      state.count += action.payload;
    },
  },
});
//destucture actions to export

export const { increment, decrement, reset, incrementByAmount } =
  sliceCounter.actions;
//export entire reducer - for use by store
export default sliceCounter.reducer;

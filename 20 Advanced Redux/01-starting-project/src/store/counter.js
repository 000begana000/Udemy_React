import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// preparing slice of global state
const counter = createSlice({
  name: "counter",
  initialState: initialCounterState, //initialState: initialState
  // methods - we don't need actions becuase these methods will automatically be called for you depending on which action was triggered.
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counter.reducer;
export const counterActions = counter.actions;

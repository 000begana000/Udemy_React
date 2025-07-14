import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
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
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// configuration : 배열, 환경설정
const store = configureStore({
  reducer: counterSlice.reducer,
});

// conterSlice.actions.toggle() returns an action object of this shape: {type: 'some auto-generated unique identifier'}
// we don't need to worry about typo or anything
// export counter actions
export const counterActions = counterSlice.actions;

export default store;

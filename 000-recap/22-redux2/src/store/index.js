import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// prepare slice of our global state
createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // we can mutate the state here
      state.counter++; // redux toolkit will clone the state automatically so we don't need to worry about mutation
      // redux toolkit also keeps the states we don't use but apply changes only
    },
    decrement(state) {
      state.counter--;
    },
    // action is needed when we have payload only
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increse") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;

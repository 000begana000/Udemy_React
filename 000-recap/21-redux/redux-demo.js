const redux = require("redux"); // import redux package

// reducer function - should be a pure function
// input : 2 parameters (oldState, dispatchAction)
// output : new state object {}
// (state = { counter: 0 } => default value of state
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    // structure is totally up to us
    counter: state.counter + 1, // old state counter + 1
  };
};

// create store
const store = redux.createStore(counterReducer); // store need to know which reducer is responsible for changing that store

// action
const counterSubscriber = () => {
  const latestState = store.getState(); // give us latest state snapshot after updating
  console.log(latestState);
};

store.subscribe(counterSubscriber); // counterSubsriber will get triggered whenever our state changes

// dispatch an action
store.dispatch({ type: "increment" });

// 1. import redux
const redux = require("redux"); // node js syntax to import a third party package

// 3. create reducer => should be a pure function, no side effect inside this function
// 7. give a default value (initial value) to the state
const counterReducer = (state = { counter: 0 }, action) => {
  // return new state
  return {
    counter: state.counter + 1,
  };
};

// 2. create store
// 4. pass the reducer function
const store = redux.createStore(counterReducer);

console.log(store.getState());

// 5. create subscriber function
const conterSubscriber = () => {
  // getState() will give us latest snapshot of the state
  const latestState = store.getState();
  console.log(latestState);
};

// 6. subscribe the subscriber function
// redux will trigger this subscriber function whenever the data in store changes
store.subscribe(conterSubscriber);

// 8. create dispatch to dispatch action
store.dispatch({ type: "increment" });

const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  // 1. set the action by type
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

// what subscribtion do inside
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// 3. the counter comes out from our subscribtion
store.subscribe(counterSubscriber);

// 2. dispatch actions by type of actions
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

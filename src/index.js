import { createStore } from 'redux';

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  // console.log(action);
  if (action.type === "add") {
    console.log('add count');
    return count + 1;
  } else if (action.type === 'minus') {
    console.log('minus count');
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({type: "add"});
countStore.dispatch({type: "add"});
countStore.dispatch({type: "add"});
countStore.dispatch({type: "minus"});

console.log(countStore.getState())
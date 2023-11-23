import { createStore } from 'redux';

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');

const countModifier = (count = 0) => {
  // modify state
  return count;
};
const countStore = createStore(countModifier);

console.log(countStore);
console.log(countStore.getState());

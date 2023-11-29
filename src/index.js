import { createStore } from 'redux';

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case "add":
      return count + 1;
    case "minus":
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange)

plus.addEventListener('click', () => { countStore.dispatch({type: "add"}) });
minus.addEventListener('click', () => { countStore.dispatch({type: "minus"}) });

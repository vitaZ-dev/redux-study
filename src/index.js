import { createStore } from "redux";

const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $ul = document.querySelector('ul');

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
  const now = Date.now();
  return { type: ADD_TODO, text, id: now };
}
const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
}
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))

const dispatchDeleteTodo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteTodo(id));
}
const paintTodos = () => {
  const todos = store.getState();
  $ul.innerHTML = '';
  todos.forEach((todo) => {
    const $li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = "DEL"
    btn.addEventListener('click', dispatchDeleteTodo)
    $li.id = todo.id;
    $li.innerText = todo.text;
    $li.appendChild(btn);
    $ul.appendChild($li);
  });
}

store.subscribe(paintTodos);

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
}
const onSubmit = (e) => {
  e.preventDefault();
  const todo = $input.value;
  $input.value = '';
  dispatchAddTodo(todo);
}
$form.addEventListener('submit', onSubmit);
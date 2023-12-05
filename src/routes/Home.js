import React, { useState } from "react";
import { connect } from 'react-redux';
import { add } from "../store";
import TodoItem from '../components/TodoItem';

const Home = ({ todos, addTodo }) => {
  const [text, setText] = useState('');;
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  }
  return (
    <>
      <h1>React Todo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>
        {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
      </ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  // store로부터 state를 가져다준다 = mapStateToProps
  // console.log(state, ownProps);
  return { todos: state };
}
function mapDispatchToProps(dispatch) {
  // dispatch=store.dispatch()
  return { addTodo: text => dispatch(add(text)) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
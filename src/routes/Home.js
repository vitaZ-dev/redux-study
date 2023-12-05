import React, { useState } from "react";
import { connect } from 'react-redux';

const Home = ({ todos }) => {
  const [text, setText] = useState('');;
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDetault();
    console.log(text);
  }
  return (
    <>
      <h1>React Todo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>
        {JSON.stringify(todos)}
      </ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  // store로부터 state를 가져다준다 = mapStateToProps
  // console.log(state, ownProps);
  return { todos: state };
}
export default connect(mapStateToProps)(Home);
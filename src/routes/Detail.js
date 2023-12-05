import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const Detail = ({ todos }) => {
  const myId = useParams().id;
  const todoDetail = todos.find((todo) => todo.id === parseInt(myId));

  return (
    <>
      <h1>Detail</h1>
      <ul>
        <li>contents : {todoDetail?.text}</li>
        <li>Created at : {todoDetail?.id}</li>
      </ul>
    </>
  )
}

function mapStateToProps(state) {
  return {todos: state};
}
export default connect(mapStateToProps)(Detail);
import { useState } from "react";

function Child(props) {
  console.log(props);

  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}
export default Child;
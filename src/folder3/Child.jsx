// Child.jsx

import React from "react";

function Child(props) {
  return (
    <div>
      <h3>Child 컴포넌트 영역</h3>
      <p>부모 컴포넌트에서 전달받은 값 : {props.value}</p>
    </div>
  );
}

export default Child;

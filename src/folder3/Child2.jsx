// Child2.jsx
import React from "react";

// Child2 컴포넌트는 부모컴포넌트에서 전달받은 2개의 키가 존재함
// props에 value, childValue 키를 전달받았고, 해당 키에 1:1로 매칭된 데이터가 존재함
// value : "부모 데이터", childValue : setState() 함수가 들어있음
function Child2(props) {

  // 부모 컴포넌트에서 props를 통해서 전달받은 함수를 실행
  // 부모 컴포넌트에서 전달받은 함수가 부모의 state를 수정할 수 있는 setState() 함수임
  const sendData = () => {
    props.childValue('자식 데이터');
  }

  return (
    <div>
      <h3>Child 컴포넌트 영역</h3>
      {/* 부모 컴포넌트에서 props를 통해서 전달받은 데이터 출력 */}
      <p>부모 컴포넌트에서 전달받은 값 : {props.value}</p>
      {/* 버튼 클릭 시 지정한 함수 실행 */}
      <button onClick={sendData} className={"btn btn-primary"}>클릭 시 데이터 전달</button>
    </div>
  );
}

export default Child2;

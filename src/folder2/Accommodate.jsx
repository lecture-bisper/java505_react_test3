// Accommodate.jsx

import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
  // state를 사용하기 위해 useState()를 설정
  const [isFull, setIsFull] = useState(false);
  // 해당 컴포넌트 내부에서 생성해야할 state 객체 및 setState를 커스텀 훅을 통해서 생성함
  // 커스텀 훅을 사용했기 때문에 재활용이 가능함
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // 리액트 생명주기 함수를 사용하기 위해서 useEffect를 설정함
  // 의존성 배열이 없을 경우 componentDidMount, componentWillUnmount 를 실행하는 것과 같은 효과
  useEffect(() => {
    console.log("===============");
    console.log("useEffect() is called");
    console.log(`isFull : ${isFull}`);
  });

  // 의존송 배열에 count를 설정하여 count값이 수정되면 componentDidUpdate 를 실행하는 것과 같은 효과
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log("현재 count 값 : " + count);
  }, [count]);

  return (
    <div>
      {/* 현재 state로 설정된 count의 값을 출력 */}
      <p>{`총 ${count}명 수용했습니다.`}</p>
      {/* 커스텀 훅을 통해서 만들어진 사용자 입장/퇴장 함수를 버튼에 등록 */}
      <button className={"btn btn-primary"} onClick={increaseCount} disabled={isFull}>입장</button>
      <button className={"btn btn-success"} onClick={decreaseCount}>퇴장</button>
      {/*  */}
      {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
    </div>
  )
}

export default Accommodate;

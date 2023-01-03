// ClassComponent.jsx

// 1. 모든 컴포넌트는 React를 import해서 사용함
// 2. 클래스 컴포넌트는 React.Component 상속받아 클래스를 생성
// 3. 클래스 컴포넌트를 export default로 설정
// 4. 클래스 컴포넌트에는 render() 메소드가 존재함, render() 메소드에서 jsx문법을 사용함
// 5. 클래스 컴포넌트는 리액트 생명주기 메소드를 사용할 수 있음
// 6. 생성자 사용 가능, 상태 표현을 위한 state를 설정

import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return (
      <div>
        <p>클래스 컴포넌트 화면</p>
      </div>
    );
  }

  componentDidMount() {
    console.log("마운트 후 출력");
  }
}

export default ClassComponent;

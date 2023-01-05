// LandingPage.jsx
import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  // isLoggedIn을 state로 설정
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // state 값 수정을 위한 함수 생성
  const onClickLogin = () => {
    setIsLoggedIn(true);
  }

  const onClickLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
      <div style={{padding: 16}}>베너 확인</div>
    </div>
  )
}

export default LandingPage;

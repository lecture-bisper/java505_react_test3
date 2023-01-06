// DarkOrLight.jsx
import React, {useState, useCallback} from "react";
import ThemeContext from "./ThemeContext";
// 파일로 생성된 컨텍스트를 import하여 사용, 여러 컴포넌트에서 활용이 가능함
import MainContent from "./MainContent";

function DarkOrLight(props) {
  // state로 등록
  const [theme, setTheme] = useState('light');

  // useCallback() : 콜백함수를 반환하는 리액트 훅, 메모이제이션 기능을 사용할 수 있어 지정한 의존성 배열에 등록된 데이터가 변경되었을 경우에만 동작
  const toggleTheme = useCallback(() => {
    // state로 지정된 theme 값이 변경될 경우에만 동작
    if (theme == "light") {
      setTheme("dark");
    }
    else if (theme == "dark") {
      setTheme("light");
    }
  }, [theme]);

  return (
    // 컨텍스트 provider로 해당 컴포넌트 아래의 자손 컴포넌트에서 지정한 데이터를 사용할 수 있도록 함
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;

import React from "react";
import AxiosTest from "./folder5/AxiosTest";
import DailyBoxOffice from "./folder5/DailyBoxOffice";
import AsyncAwait from "./folder5/AsyncAwait";
import AxiosRestServer from "./folder5/AxiosRestServer";

function App8(props) {
  return (
    <div>
      <h1>App8 화면.</h1>
      <AxiosTest />
      <DailyBoxOffice />
      <AsyncAwait />
      <hr />
      <AxiosRestServer />
    </div>
  );
}

export default App8;

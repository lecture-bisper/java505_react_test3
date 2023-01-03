import React from "react";
import Contents from "./Contents";
import Footer from "./Footer";
import Header from "./Header";
import Navigate from "./Navigate";
import LinkList from "./LinkList";
import Info from "./Info";

const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: "#aaa",
  },
};

function App2() {
  return (
    <div>
      <Header />
      <Navigate />
      <div className={"container mt-5"}>
        <div className={"row"}>
          <div className={"col-sm-4"}>
            <Info />
            <LinkList />
            <hr className={"d-sm-none"}/>
          </div>
          <div className={"col-sm-8"}>
            <Contents />
            <Contents />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App2;

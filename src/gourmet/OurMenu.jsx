import React from "react";
import TableSetting1 from "../assets/images/tablesetting.png";
import TableSetting from "./TableSetting";
import MenuDetail from "./MenuDetail";

function OurMenu() {
  return (
    <div className={"row justify-content-center my-5 py-5 border-top"}>
      <MenuDetail />
      <TableSetting img={TableSetting1}/>
    </div>
  );
}

export default OurMenu;

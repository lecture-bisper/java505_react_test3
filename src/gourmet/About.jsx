import React from "react";
import TableSetting2 from "../assets/images/tablesetting2.png";
import TableSetting from "./TableSetting";
import AboutDetail from "./AboutDetail";

function About() {
  return (
    <div className={"row justify-content-center my-5 py-5"}>
      <TableSetting img={TableSetting2} />
      <AboutDetail />
    </div>
  );
}

export default About;

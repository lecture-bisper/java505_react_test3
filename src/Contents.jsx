import React from "react";

const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: "#aaa",
  },
};

function Contents() {
  return (
    <div>
      <h2>제목 부분</h2>
      <h5>부 제목 부분,  2023-01-03</h5>
      <div style={styles.fakeImg}></div>
      <p>그냥 글자...</p>
      <p>내용 아무꺼나 막막 적는거....</p>
    </div>
  );
}

export default Contents;

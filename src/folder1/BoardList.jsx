import React from "react";
import BoardItem from "./BoardItem";

const boardItemList = [
  {boardIdx: 100, boardTitle: "게시판 글 제목 100번", boardUserId: "test1", boardCreateDate: "2023-01-03 12:40:00"},
  {boardIdx: 101, boardTitle: "게시판 글 제목 101번", boardUserId: "test2", boardCreateDate: "2023-01-03 12:41:30"},
  {boardIdx: 102, boardTitle: "게시판 글 제목 102번", boardUserId: "test3", boardCreateDate: "2023-01-03 12:43:00"},
];

function BoardList() {
  return (
    <div className={"container mx-auto"}>
      <table className={"table table-hover table-striped"}>
        <thead>
          <tr>
            <th>글번호</th>
            <th>글제목</th>
            <th>사용자</th>
            <th>등록시간</th>
          </tr>
        </thead>
        <tbody>
          {/*<BoardItem idx={"100"} title={"테스트 제목100"} userId={"test1"} createDt={"2023-01-03 12:40:00"}/>*/}
          {/*<BoardItem idx={"101"} title={"테스트 제목101"} userId={"test2"} createDt={"2023-01-03 12:41:00"}/>*/}
          {/*<BoardItem idx={"102"} title={"테스트 제목102"} userId={"test3"} createDt={"2023-01-03 12:42:00"}/>*/}
          {boardItemList.map((item) => {
            return <BoardItem idx={item.boardIdx} title={item.boardTitle} userId={item.boardUserId} createDt={item.boardCreateDate} />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;

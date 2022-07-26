import React from "react";
import { CommentBox } from "./styled";

const Comment = (props) => {
  return (
    <>
      <CommentBox>
        <div className="contentDetail">
          <div className="contentDetail__username">{props.info.nickname}</div>
          <div className="contentDetail__timeStamp">{props.info.createdAt}</div>
          <div className="contentDetail__editBtn">
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
        <div>{props.info.comment}</div>
      </CommentBox>
    </>
  );
};

export default Comment;

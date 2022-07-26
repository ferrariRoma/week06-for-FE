import React from "react";
import { CommentBox } from "./styled";
import { useSelector } from "react-redux";

const Comment = (props) => {
  const checked__comment = useSelector((state) => state);
  return (
    <>
      <CommentBox>
        <div className="contentDetail">
          <div className="contentDetail__username__time">
            <div className="contentDetail__username">{props.info.nickname}</div>
            <div className="contentDetail__timeStamp">
              {props.info.createdAt}
            </div>
          </div>
          {/* <div className="contentDetail__editBtn">
            <button>수정</button>
            <button>삭제</button>
          </div> */}
          {checked__comment === props.info.nickname ? (
            <>
              <div className="contentDetail__editBtn">
                <button>수정</button>
                <button>삭제</button>
              </div>
            </>
          ) : null}
        </div>
        <div className="comment__content">{props.info.comment}</div>
      </CommentBox>
    </>
  );
};

export default Comment;

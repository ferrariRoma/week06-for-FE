import React, { useRef, useState } from "react";
import { CommentBox, StyledPostCommentBox } from "./styled";
import { useSelector } from "react-redux";
import axios from "axios";
import "../pages/post.css";
import { useNavigate } from "react-router-dom";

const Comment = ({ info, setCommentsInfo }) => {
  const { commentId } = info;
  const [editState, setEditState] = useState(false);
  const textareaRef = useRef(info.comment);
  const checked__comment = useSelector((state) => state);
  const navigate = useNavigate();

  const editCommentBtn = () => {
    const stortoken = JSON.parse(localStorage.getItem("user"));
    if (stortoken === null) {
      alert("로그인이 필요합니다.");
      return navigate("/login");
    }
    return setEditState(true);
  };

  const deleteCommentBtn = async () => {
    const stortoken = JSON.parse(localStorage.getItem("user"));
    if (stortoken === null) {
      alert("로그인이 필요합니다.");
      return navigate("/login");
    }
    await axios.delete(`http://localhost:5001/api/comments/${commentId}`);
    setCommentsInfo((prev) => {
      const deleteTargetId = commentId;
      const prevData = {
        ...prev,
      };
      let targetIndex;
      prevData.comments.map((el, i) =>
        el.commentId == deleteTargetId ? (targetIndex = i) : el
      );
      prevData.comments.splice(targetIndex, 1);
      return prevData;
    });
  };

  const editCompletedBtn = async () => {
    const stortoken = JSON.parse(localStorage.getItem("user"));
    if (stortoken === null) {
      alert("로그인이 필요합니다.");
      return navigate("/login");
    }
    setEditState(false);
    const modifiedComment = {
      comment: textareaRef.current.value,
    };
    await axios.put(
      `http://localhost:5001/api/comments/${commentId}`,
      modifiedComment
    );
    setCommentsInfo((prev) => {
      const editTargetId = commentId;
      const prevData = {
        ...prev,
      };
      let targetIndex;
      prevData.comments.map((el, i) =>
        el.commentId == editTargetId ? (targetIndex = i) : el
      );
      prevData.comments.map((el, i) =>
        i == targetIndex ? (el.comment = modifiedComment.comment) : el
      );
      return prevData;
    });
  };

  const cancelEditBtn = () => {
    return setEditState(false);
  };

  return (
    <>
      <CommentBox>
        <div className="contentDetail">
          <div className="contentDetail__username__time">
            <div className="contentDetail__username">{info.nickname}</div>
            <div className="contentDetail__timeStamp">{info.createdAt}</div>
          </div>
          {/* 테스트 용 */}
          {/* {editState ? null : (
            <>
              <div className="contentDetail__editBtn">
                <button
                  className="originBtn complete__btn__custom "
                  onClick={editCommentBtn}
                >
                  수정
                </button>
                <button
                  className="originBtn complete__btn__custom "
                  onClick={deleteCommentBtn}
                >
                  삭제
                </button>
              </div>
            </>
          )} */}

          {checked__comment === info.nickname ? (
            editState ? null : (
              <>
                <div className="contentDetail__editBtn">
                  <button
                    className="originBtn complete__btn__custom "
                    onClick={editCommentBtn}
                  >
                    수정
                  </button>
                  <button
                    className="originBtn complete__btn__custom "
                    onClick={deleteCommentBtn}
                  >
                    삭제
                  </button>
                </div>
              </>
            )
          ) : null}
        </div>
        {editState ? (
          <>
            <StyledPostCommentBox className="editVer">
              <textarea
                wrap="hard"
                cols="20"
                ref={textareaRef}
                defaultValue={info.comment}
              ></textarea>
              <button
                className="originBtn complete__btn__custom "
                onClick={editCompletedBtn}
              >
                수정
              </button>
              <button
                className="originBtn complete__btn__custom "
                onClick={cancelEditBtn}
              >
                취소
              </button>
            </StyledPostCommentBox>
          </>
        ) : (
          <div className="comment__content">{info.comment}</div>
        )}
      </CommentBox>
    </>
  );
};

export default Comment;

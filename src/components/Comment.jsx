import React, { useRef, useState } from "react";
import { CommentBox, StyledPostCommentBox } from "./styled";
import { useSelector } from "react-redux";
import axios from "axios";
import "../pages/post.css";
import { useNavigate } from "react-router-dom";
import instance from "../axiosConfig";

const Comment = ({ info, setCommentsInfo }) => {
  const { commentId } = info;
  const [editState, setEditState] = useState(false);
  const textareaRef = useRef(info.comment);
  const checked__comment = useSelector((state) => state);
  const navigate = useNavigate();

  // 상세 페이지에서 댓글 수정 버튼 눌렀을 때 핸들러
  const editCommentBtn = () => {
    const stortoken = JSON.parse(localStorage.getItem("user"));
    if (stortoken === null) {
      alert("로그인이 필요합니다.");
      return navigate("/login");
    }
    return setEditState(true);
  };

  // 댓글 삭제 버튼 눌렀을 때 핸들러
  const deleteCommentBtn = async () => {
    const stortoken = JSON.parse(localStorage.getItem("user"));
    if (stortoken === null) {
      alert("로그인이 필요합니다.");
      return navigate("/login");
    }
    try {
      await instance.delete(`/api/comments/${commentId}`);
      return setCommentsInfo((prev) => {
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
    } catch (err) {
      return console.log(err);
    }
  };

  // 댓글 수정 완료 버튼 핸들러
  const editCompletedBtn = async () => {
    const stortoken = JSON.parse(localStorage.getItem("user"));
    if (stortoken === null) {
      alert("로그인이 필요합니다.");
      return navigate("/login");
    }

    try {
      const modifiedComment = {
        comment: textareaRef.current.value,
      };
      await instance.put(`/api/comments/${commentId}`, modifiedComment);
      setEditState(false);
      return setCommentsInfo((prev) => {
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
    } catch (err) {
      console.log(err);
    }
  };

  // 수정 취소 핸들러
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

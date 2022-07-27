import React, { useEffect, useRef, useState } from "react";
import {
  StyledPostCommentBox,
  StyledPostContainer,
  StyledPostInnerContainer,
} from "../components/styled";
import { useLocation, useNavigate } from "react-router-dom";
import Comment from "../components/Comment";
import axios from "axios";
import { useSelector } from "react-redux";
import "./post.css";

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contentData = location.state;
  const [commentsInfo, setCommentsInfo] = useState();
  const checked__mine = useSelector((state) => state);
  const textareaRef = useRef("");

  useEffect(() => {
    const requestData = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/${contentData.id}`
      );
      setCommentsInfo(response.data);
    };
    requestData();
  }, []);

  // 삭제 버튼 핸들러
  const contentDeleteBtn = async () => {
    // 토큰 가져와서 없으면 로그인 할 수 있도록 하기
    const stortoken = JSON.parse(localStorage.getItem("user"));
    if (stortoken !== null) {
      await axios.delete(`http://localhost:5001/api/${contentData.id}`);
      return navigate("/");
    } else {
      alert("로그인을 해주세요");
      return navigate("/login");
    }
  };

  // 완료 버튼 핸들러
  const contentCompleteBtn = async (completedValue) => {
    // 토큰 가져와서 없으면 로그인 할 수 있도록 하기
    const stortoken = JSON.parse(localStorage.getItem("user"));
    if (stortoken !== null) {
      // true일 땐 false로, false일 땐 true로
      const requestValue = completedValue ? "uncompleted" : "completed";
      // state수정
      setCommentsInfo((prev) => {
        const modified = {
          ...prev,
          completed: !completedValue,
        };
        return modified;
      });

      // DB에 수정 정보 전달
      return await axios({
        url: `http://localhost:5001/api/${contentData.id}`,
        method: "PUT",
        data: {
          completed: requestValue,
        },
      });
    } else {
      alert("로그인을 해주세요");
      return navigate("/login");
    }
  };

  // 댓글 등록 핸들러
  const postCommentBtn = async () => {
    const stortoken = JSON.parse(localStorage.getItem("user"));
    if (stortoken === null) {
      alert("로그인이 필요합니다.");
      return navigate("/login");
    }
    if (textareaRef.current.value.trim().length === 0) {
      return alert("댓글을 입력하세요!");
    }
    const comment = { comment: textareaRef.current.value.trim() };
    await axios.post(`http://localhost:5001/api/${contentData.id}`, comment);
    const requestUpdateComment = async () => {
      const response = await axios.get(`http://localhost:5001/api/IWusFld`);
      setCommentsInfo(response.data);
      console.log(response.data);
    };
    requestUpdateComment();
  };

  return (
    <>
      <StyledPostContainer>
        <div className="content__district">
          <div>{contentData.title}</div>
        </div>
        <StyledPostInnerContainer>
          <div className="img__container">
            {contentData.imageURL && (
              <img alt="itemImage" src={contentData.imageURL}></img>
            )}
          </div>
          <div className="content__title">
            {contentData.gadaoda === "oda" ? "습득 위치" : "분실 위치"}:{" "}
            {contentData.district}
          </div>
          <div className="content__content">{contentData.content}</div>
          {checked__mine?.nickname === commentsInfo?.nickname ? (
            <>
              <div className="modified__btn__container">
                {contentData.completed ? (
                  <button
                    className="btn left__btn complete__btn__custom completed"
                    onClick={() => contentCompleteBtn(contentData.completed)}
                  >
                    해결완료
                  </button>
                ) : (
                  <button
                    className="btn left__btn complete__btn__custom "
                    onClick={() => contentCompleteBtn(contentData.completed)}
                  >
                    해결완료
                  </button>
                )}
                {commentsInfo && (
                  <button
                    className="btn complete__btn__custom"
                    onClick={() =>
                      navigate(`/posts/${contentData.postId}/edit`, {
                        state: commentsInfo,
                      })
                    }
                  >
                    수정
                  </button>
                )}
                <button
                  className="btn complete__btn__custom "
                  onClick={contentDeleteBtn}
                >
                  삭제
                </button>
                <button className="btn complete__btn__custom ">뒤로</button>
              </div>
            </>
          ) : (
            <>
              <div className="modified__btn__container">
                {contentData.completed ? (
                  <button className="originBtn left__btn complete__btn__custom completed">
                    해결완료
                  </button>
                ) : (
                  <button className="originBtn left__btn complete__btn__custom not__mine">
                    해결완료
                  </button>
                )}
                <button className="originBtn complete__btn__custom ">
                  뒤로
                </button>
              </div>
            </>
          )}
        </StyledPostInnerContainer>
        <StyledPostCommentBox>
          <textarea wrap="hard" cols="20" ref={textareaRef}></textarea>
          <button
            className="originBtn complete__btn__custom"
            onClick={postCommentBtn}
          >
            등록
          </button>
        </StyledPostCommentBox>
      </StyledPostContainer>
      {commentsInfo?.comments.map((el) => (
        <Comment
          key={el.createAt}
          info={el}
          setCommentsInfo={setCommentsInfo}
        />
      ))}
    </>
  );
};

export default Detail;

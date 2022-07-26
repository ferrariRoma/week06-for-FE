import React, { useEffect, useRef, useState } from "react";
import {
  StyledPostContainer,
  StyledPostInnerContainer,
} from "../components/styled";
import { useLocation, useNavigate } from "react-router-dom";
import Comment from "../components/Comment";
import axios from "axios";
import LoadingSpinner from "../components/Spinner";

const Detail = ({ loading, setLoading }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const contentData = location.state;
  const [commentsInfo, setCommentsInfo] = useState();

  useEffect(() => {
    const requestData = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/${contentData.id}`
      );
      console.log("response::: ", response.data);
      setCommentsInfo(response.data);
    };
    requestData();
    console.log("commentsInfo::: ", commentsInfo);
  }, []);

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
          <div className="modified__btn__container">
            {contentData.completed ? (
              <button className="btn left__btn complete__btn__custom completed">
                해결완료
              </button>
            ) : (
              <button className="btn left__btn complete__btn__custom ">
                해결완료
              </button>
            )}
            {commentsInfo && (
              <button
                className="btn complete__btn__custom"
                onClick={() =>
                  navigate(`/posts/${contentData.id}/edit`, {
                    state: commentsInfo,
                  })
                }
              >
                수정
              </button>
            )}
            <button className="btn complete__btn__custom ">삭제</button>
            <button className="btn complete__btn__custom ">뒤로</button>
          </div>
        </StyledPostInnerContainer>
      </StyledPostContainer>

      {commentsInfo?.comments.map((el) => (
        <Comment info={el} />
      ))}
    </>
  );
};

export default Detail;

import React, { useEffect, useState } from "react";
import {
  StyledPostContainer,
  StyledPostInnerContainer,
} from "../components/styled";
import { useLocation, useNavigate } from "react-router-dom";
import Comment from "../components/Comment";
import axios from "axios";
import { useSelector } from "react-redux";

/* 

*/

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contentData = location.state;
  const [commentsInfo, setCommentsInfo] = useState();
  const checked__mine = useSelector((state) => state);

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

  // 토큰 가져와서
  const contentDeleteBtn = async () => {
    const stortoken = JSON.parse(localStorage.getItem("user"));
    await axios.delete(`http://localhost:5001/api/${contentData.id}`);
    navigate("/");
  };

  const contentCompleteBtn = async (completedValue) => {
    const requestValue = completedValue ? "uncompleted" : "completed";
    console.log(requestValue);
    // const result =await axios("asdfadsfadsf")
    // true;
    await axios({
      url: `http://localhost:5001/api/${contentData.id}`,
      method: "PUT",
      data: {
        completed: requestValue,
      },
    });
    setCommentsInfo((prev) => {
      return console.log(prev);
    });
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
          {/* {checked__mine?.nickname === commentsInfo?.nickname ? ( */}
          {checked__mine?.nickname === "" ? (
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
                      navigate(`/posts/${contentData.id}/edit`, {
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
                <button className="btn complete__btn__custom ">뒤로</button>
              </div>
            </>
          )}
        </StyledPostInnerContainer>
      </StyledPostContainer>

      {commentsInfo?.comments.map((el) => (
        <Comment info={el} />
      ))}
    </>
  );
};

export default Detail;

import React from "react";
import {
  StyledPostContainer,
  StyledPostInnerContainer,
  StylePostBtn,
} from "../components/styled";
import { useParams, useLocation } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const location = useLocation();
  const contentData = location.state;
  console.log(contentData);

  return (
    <>
      <StyledPostContainer>
        <div className="content__title">{contentData.title}</div>
        <div className="content__district">
          <div>{contentData.district}</div>
          <button className="btn complete__btn">해결완료</button>
        </div>
        <StyledPostInnerContainer>
          <div>{contentData.des}</div>
          <div className="img__container">
            {contentData.imageURL && (
              <img alt="itemImage" src={contentData.imageURL}></img>
            )}
          </div>
          <div className="content__content">{contentData.content}</div>
        </StyledPostInnerContainer>
      </StyledPostContainer>
    </>
  );
};

export default Detail;

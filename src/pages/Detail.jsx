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
  console.log(params);
  console.log(location);
  return (
    <>
      {/* <StyledPostContainer>
        <StyledPostInnerContainer>
          {fileImage && (
            <img
              alt=""
              src={fileImage.preview_url}
              style={{ width: "39.9rem", height: "25rem" }}
            ></img>
          )}
          <input
            name="imageUpload"
            type="file"
            accept="image/*"
            onChange={saveFileImage}
            ref={(refParam) => (inputRef = refParam)}
            style={{ display: "none" }}
            onClick={(e) => (e.target.value = null)}
          ></input>
          <StylePostBtn>
            <button onClick={() => inputRef.click()}>파일 찾기</button>
            <button
              style={{ width: "5rem", height: "3rem" }}
              onClick={deleteFileImage}
            >
              이미지 삭제
            </button>
          </StylePostBtn>
          제목
          <input type="text" style={{ height: "2.5rem" }} ref={title}></input>
          내용
          <input
            type="textarea"
            style={{ height: "15rem" }}
            ref={content}
          ></input>
          <StylePostBtn>
            <button
              onClick={() => {
                sendImageToServer();
                sendContentToServer();
              }}
            >
              작성하기
            </button>
            <button onClick={() => navigate("/")}>취소</button>
          </StylePostBtn>
        </StyledPostInnerContainer>
      </StyledPostContainer> */}
    </>
  );
};

export default Detail;

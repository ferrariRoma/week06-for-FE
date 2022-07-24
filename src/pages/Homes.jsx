import React from "react";
import { StyledMainGrid } from "../components/styled";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <StyledMainGrid>
        <ItemContainer>
          <div>사진</div>
          <div>제목</div>
        </ItemContainer>
        <ItemContainer>
          <div>사진</div>
          <div>제목</div>
        </ItemContainer>
        <ItemContainer>
          <div>사진</div>
          <div>제목</div>
        </ItemContainer>
        <ItemContainer>
          <div>사진</div>
          <div>제목</div>
        </ItemContainer>
      </StyledMainGrid>
    </>
  );
};

export default Home;

const ItemContainer = styled.div`
  background: green;

  div:first-child {
    height: 70%;
    background: yellow;
  }
  div:last-child {
    height: 30%;
    background: gray;
  }
`;

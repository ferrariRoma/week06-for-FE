import React, { memo } from "react";
import { StyledItemContainer } from "./styled";

const MainItemContainer = memo(({ post }) => {
  return (
    <>
      <StyledItemContainer>
        <div>{post.imageURL}</div>
        <div>{post.title}</div>
      </StyledItemContainer>
    </>
  );
});

export default MainItemContainer;

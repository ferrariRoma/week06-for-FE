import React, { memo } from "react";
import { StyledItemContainer } from "./styled";
import { useNavigate } from "react-router-dom";

const MainItemContainer = memo(({ post }) => {
  const navigate = useNavigate();
  const onClickPost = (id) => {
    navigate(`/api/posts/${id}`, { state: post });
  };
  return (
    <>
      <StyledItemContainer onClick={() => onClickPost(post.id)}>
        <div>{post.imageURL}</div>
        <div>{post.title}</div>
      </StyledItemContainer>
    </>
  );
});

export default MainItemContainer;

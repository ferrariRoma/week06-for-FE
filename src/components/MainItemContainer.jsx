import React, { memo } from "react";
import { StyledItemContainer } from "./styled";
import { useNavigate } from "react-router-dom";

const MainItemContainer = memo(({ post }) => {
  const navigate = useNavigate();
  // 메인 페이지에서 게시물 눌렀을 때 세부 페이지로 가는 핸들러
  const onClickPost = (id) => {
    navigate(`/api/posts/${id}`, { state: post });
  };
  return (
    <>
      <StyledItemContainer onClick={() => onClickPost(post.postId)}>
        <div>{/* <img src=`${post.imageURL}`></img> */}</div>
        <div>{post.title}</div>
      </StyledItemContainer>
    </>
  );
});

export default MainItemContainer;

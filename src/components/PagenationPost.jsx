import React, { memo } from "react";
import { StyledMainGrid } from "./styled";
import MainItemContainer from "./MainItemContainer";

const PagenationPost = memo(({ posts }) => {
  return (
    <>
      <StyledMainGrid>
        {posts.map((el) => {
          return (
            <>
              <MainItemContainer
                post={el}
                key={Date.now() + Math.random() * 100}
              />
            </>
          );
        })}
      </StyledMainGrid>
    </>
  );
});

export default PagenationPost;

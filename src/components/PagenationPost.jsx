import React, { memo } from "react";
import { StyledMainGrid } from "./styled";
import MainItemContainer from "./MainItemContainer";

const PagenationPost = memo(({ loading, posts }) => {
  return (
    <>
      <StyledMainGrid>
        {posts.map((el) => {
          return (
            <>
              <MainItemContainer post={el} key={el.id} />
            </>
          );
        })}
      </StyledMainGrid>
    </>
  );
});

export default PagenationPost;

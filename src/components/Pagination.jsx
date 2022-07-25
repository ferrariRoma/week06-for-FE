import React, { memo } from "react";
import { StyledPageUl, StyledPageLi } from "./styled";

const Pagination = memo(({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage.current); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div
        style={{
          position: "relative",
          bottom: "0",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <nav>
          <StyledPageUl>
            {pageNumbers.map((el) => {
              return (
                <>
                  <StyledPageLi key={el}>
                    <span onClick={() => paginate(el)}>{el}</span>
                  </StyledPageLi>
                </>
              );
            })}
          </StyledPageUl>
        </nav>
      </div>
    </>
  );
});

export default Pagination;

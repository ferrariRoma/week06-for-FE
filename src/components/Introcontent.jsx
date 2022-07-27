import React from "react";
import { StyledIntroContent } from "./styled";

const Introcontent = () => {
  return (
    <>
      <StyledIntroContent>
        <div className="title">FindById!</div>
        <div className="introduce">
          물건을 잃어버렸나요?
          <br />
          분실물을 등록하여 물건을 찾아보세요!
        </div>
        <div className="introduce">
          누가 잃어버린 물건을 습득하였나요?
          <br />
          습득물을 등록하여 주인을 찾아주세요!
        </div>
        <div className="introduce">
          이 프로젝트는 대구광역시 내에서 발생한 유실물을 등록하여 서로 공유할 수 있는 커뮤니티입니다.
        </div>
      </StyledIntroContent>
    </>
  );
};

export default Introcontent;



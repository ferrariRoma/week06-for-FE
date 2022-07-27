import React from "react";
import styled from "styled-components";

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

export const StyledIntroContent = styled.div`
  margin: auto;
  margin-top: 8rem;
  margin-bottom: 10rem;
  color: white;
  .title {
    letter-spacing: 0.3rem;
  }
  @media (min-width: 390px) and (max-width: 576px) {
    .title {
      margin-top: 1rem;
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    .introduce {
      margin-top: 1rem;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 576px) and (max-width: 767px) {
    .title {
      margin-top: 2rem;
      font-size: 6rem;
      margin-bottom: 2rem;
    }
    .introduce {
      margin-top: 1.5rem;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .title {
      margin-top: 2rem;
      font-size: 8rem;
      margin-bottom: 2rem;
    }
    .introduce {
      margin-top: 2rem;
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .title {
      margin-top: 4rem;
      font-size: 10rem;
      margin-bottom: 4rem;
    }
    .introduce {
      margin-top: 2rem;
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1200px) {
    .title {
      margin-top: 5rem;
      font-size: 12rem;
      margin-bottom: 5rem;
    }
    .introduce {
      margin-top: 2rem;
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

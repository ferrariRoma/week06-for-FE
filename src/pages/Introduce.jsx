import React from "react";
import styled from "styled-components";
import Introcontent from "../components/Introcontent";

const Introduce = () => {
  return (
    <StyledIntroContainer>
      <Introcontent />
    </StyledIntroContainer>
  );
};
export default Introduce;

const StyledIntroContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url("https://mblogthumb-phinf.pstatic.net/20150430_83/croxriver_1430364615321VA6xy_JPEG/DSC_3994.jpg?type=w800");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode : darken;
`;

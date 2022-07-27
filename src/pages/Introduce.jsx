import React from "react";
import styled from "styled-components";

const Introduce = () => {
    return (
        <StyledIntroContainer>
            <StyledIntroInnerContainer>
            안녕하냐 친구들
            야호
            </StyledIntroInnerContainer>
        </StyledIntroContainer>
);
};
export default Introduce;

const StyledIntroContainer = styled.div`
width :100%;
display: flex;
height : 200rem;
background-image: url("https://mblogthumb-phinf.pstatic.net/20150430_83/croxriver_1430364615321VA6xy_JPEG/DSC_3994.jpg?type=w800");
background-repeat: no-repeat;
background-position: top center;
background-size: cover;
background-attachment: fixed;
opacity: 0.8;
`;

const StyledIntroInnerContainer = styled.div`
margin : 10rem;
padding-top : 10rem;
width: 100%;
height: 70%;
font-size : 10rem;
justify-content: center;
color:white;
`;



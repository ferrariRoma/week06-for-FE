import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
  background-color: white;
  top: 0;
  right: 0;
  width: 100vw;
  height: 5rem;
  display: flex;
  background-color: #15203f;
  color: white;
  justify-content: space-between;
  padding: 0 5rem;
  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      margin-left: 1rem;
      display: flex;
      align-items: center;
    }
  }
`;

export const StyledMainGrid = styled.div`
  margin-top: 8rem;
  width: 100%;
  padding: 0 4rem;

  display: grid;
  grid-template-columns: repeat(4, minmax(13rem, 15rem));
  grid-auto-rows: 13rem;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(4, minmax(13rem, 15rem));
    grid-auto-rows: 13rem;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(13rem, 15rem));
    grid-auto-rows: 11rem;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(13rem, 15rem));
    grid-auto-rows: 11rem;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(13rem, 15rem));
    grid-auto-rows: 11rem;
  }
  gap: 1.2rem;
  justify-content: center;
`;

export const StyledItemContainer = styled.div`
  background: green;

  div:first-child {
    height: 70%;
    background: yellow;
  }
  div:last-child {
    height: 30%;
  }
`;

export const StyledPageUl = styled.ul`
  height: 3rem;

  margin: auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
  padding: 0.1rem;

  background-color: rgba(0, 0, 0, 0.4);

  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;

  float: left;
  list-style: none;
  text-align: center;
  border-radius: 1rem;
`;

export const StyledPageLi = styled.li`
  width: 2rem;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.7rem;
  border-radius: 1rem;
  transition: all 0.2s linear;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: rgba(38, 58, 108, 0.6);
  }
`;

export const StyledPostBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
`;

export const StyledSelect = styled.select`
  width: 5rem;
  padding: 0.8em 0.5em;
  border: 1px solid #15203f;
  background: url("https://t1.daumcdn.net/cfile/tistory/99761B495C84AA8716")
    no-repeat 95% 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0.5rem;
`;

export const StylePostTitle = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const StyledPostSubtitle = styled.div`
  font-size: 1.5rem;
  margin: 1rem;
  font-weight: bold;
  text-align: left;
`;

export const StyledInputTitle = styled.input`
  height: 2.5rem;
  border: transparent;
  box-shadow: 1px 1px 1px 1px lightgray;
  outline: none;
  box-sizing: border-box;
  padding: 1rem;
`;

export const StyledInputContent = styled.textarea`
  height: 15rem;
  border: transparent;
  box-shadow: 1px 1px 1px 1px lightgray;
  outline: none;
  box-sizing: border-box;
  padding: 1rem;
`;


export const StyledIntroContainer = styled.div`
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

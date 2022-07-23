import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
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

export const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20vw;
  height: 100vh;
  background-color: yellow;
`;

export const StyledMainGrid = styled.div`
  margin-top: 8rem;
  width: 100%;
  padding: 0 4rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-auto-rows: 13rem;
  gap: 1.2rem;
  justify-contents: center;
`;

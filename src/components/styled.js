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

export const StyledMainGrid = styled.div`
  margin-top: 8rem;
  width: 100%;
  padding: 0 4rem;

  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); */
  grid-template-columns: repeat(4, minmax(5rem, 15rem));
  grid-auto-rows: 13rem;
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

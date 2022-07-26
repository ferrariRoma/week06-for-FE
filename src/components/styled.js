import styled from "styled-components";



export const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
  background-color: white;
  background-color: #15203f;
  color:white;
  top: 0;
  right: 0;
  width: 100vw;
  height: 5rem;
  display: flex;
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
  button{
    color:white;
    background-color: transparent;
    border: 3px solid white;
    font-weight: bold;
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
export const StyledPostContainer = styled.div`
  margin-top: 5rem;
  position: fixed;
  top: 5rem;
  left: 50%;
  transform: translate(-50%, 0);
  border: 1px solid black;
  width: 40rem;
  height: 60rem;
`;

export const StyledPostInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StylePostBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const Row = styled.div`
display: flex;
align-items: center;
margin-top: 15px;
border-bottom: 1px solid #555;
label {
  display: inline-block;
  width: 100px;
}
input {
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  &::placeholder {
    padding: 0 5px;
    font-style: italic;
    text-align: right;
  }
}
`;

export const SignupDiv = styled.div`
border: 0.1rem solid rgba(0, 0, 0, 0.2);
border-radius: 0.1rem;
box-shadow: rgba(0, 0, 0, 0.3) 0.4rem 0.4rem 4rem 0rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10rem;
padding: 2rem;

h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}
button{
  font-size: 1rem;
}
input{
  width: 100%
}
label{
  font-size: 0.8rem;
}
`;

export const LoginDiv = styled.div`
border: 0.1rem solid rgba(0, 0, 0, 0.2);
border-radius: 0.1rem;
box-shadow: rgba(0, 0, 0, 0.3) 0.4rem 0.4rem 4rem 0rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10rem;
padding: 2rem;
h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

button {
font-size: 25px;
padding: 15px 30px;
border: 3px solid #15203f;
background-color: transparent;
color: #15203f;
text-transform: uppercase;
letter-spacing: 5px;
font-weight: bold;
position: relative;
transition: all 0.4s;
overflow: hidden;
border-radius: 10px;
}

button:focus {
outline: none;
}

button::before {
content: "";
position: absolute;
height: 100%;
width: 100%;
background-color: #15203f;
top: 0;
left: -100%;
transition: all 0.4s;
z-index: -1;
}

button:hover::before {
transform: translateX(100%);
}

button:hover {
color: #3c3e70;
}



input{
  width: 100%
}
`
;

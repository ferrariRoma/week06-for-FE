import styled from "styled-components";



export const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
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
    font-size: 1rem;
    margin: 1rem;
    div {
      margin-left: 5rem;
      display: flex;
      align-items: center;
    }
  }
  span {
    display: flex;
    align-items: center;
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
  margin: auto;
  margin-top: 8rem;
  margin-bottom: 10rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  width: 50rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0.4rem 0.4rem 4rem 0rem;
  .content__district {
    width: 30rem;
    margin: auto;

    display: flex;
    flex-direction: column;

    div:first-child {
      letter-spacing: 0.3rem;
      font-weight: bold;
      font-size: 2.5rem;
      text-align: start;
      margin: 2rem 0 1rem 0;
    }
  }

  .modified__btn__container {
    width: 30rem;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
  @media screen and (max-width: 850px) {
    width: 35rem;
    .content__district {
      width: 25rem;
    }
    .modified__btn__container {
      width: 25rem;
      font-size: 1rem;
      button {
        padding: 0.2rem;
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 22rem;
    .content__district {
      width: 15rem;
    }
  }
`;

export const StyledPostInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
  border-radius: 1rem;

  .img__container {
    width: 30rem;
    margin: auto;
    margin-bottom: 2rem;

    img {
      width: 100%;
      border-radius: 1rem;
      object-fit: contain;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.3);
        box-shadow: rgba(0, 0, 0, 0.2) 0.4rem 0.4rem 4rem 0.8rem;
      }
    }
  }
  .content__title {
    width: 30rem;

    margin: auto;
    margin-bottom: 2rem;

    font-size: 1.5rem;
    font-weight: 600;
    text-align: start;
  }
  .content__content {
    width: 30rem;

    margin: auto;
    margin-bottom: 2rem;

    font-size: 1.23rem;
    text-align: start;
    line-height: 1.6rem;
    white-space: pre-wrap;
  }
  @media screen and (max-width: 850px) {
    .content__content,
    .content__title,
    .img__container {
      width: 25rem;
    }
  }
  @media screen and (max-width: 600px) {
    .content__content,
    .content__title,
    .img__container {
      width: 15rem;
    }
  }
  .modified__btn__container {
    @media screen and (max-width: 850px) {
      width: 70%;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 600px) {
      width: 70%;
      flex-wrap: wrap;
    }
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

export const CommentBox = styled.div`
  width: 50rem;
  margin: auto;
  margin-bottom: 1rem;

  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0.4rem 0.4rem 1rem 0rem;
  padding: 1rem;

  .contentDetail {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .contentDetail__username__time {
      display: flex;
      justify-content: space-around;
      margin-left: 2rem;
    }

    .contentDetail__username {
      height: 3rem;
      font-size: 1.2rem;
      font-weight: 500;

      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
    }

    .contentDetail__timeStamp {
      width: 10rem;
      font-size: 0.8rem;
      font-weight: 600;
      font-style: italic;

      display: flex;
      align-items: center;
    }
    .contentDetail__editBtn {
      width: 30%;
      display: flex;
      justify-content: space-around;
      button {
        width: 5rem;
        height: 2rem;
      }
    }
  }
  .comment__content {
    font-size: 1.23rem;
    text-align: start;
    line-height: 1.6rem;
    white-space: pre-wrap;
    padding: 2rem;
  }

  @media screen and (max-width: 850px) {
    width: 35rem;
    .contentDetail {
      flex-wrap: wrap;
    }
    .contentDetail__editBtn {
      margin: auto;
    }
  }

  @media screen and (max-width: 600px) {
    width: 22rem;
    .contentDetail__username__time {
      flex-direction: column;
      margin: 0;
      margin-bottom: 2rem;
      /* align-items: center;
      justify-content: center;
       */
    }
    .contentDetail {
      flex-wrap: wrap;
    }
  }
`;

export const StyledPostCommentBox = styled.div`
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 30rem;

  display: flex;

  textarea {
    width: 80%;
    height: 5rem;
    resize: none;
    border: 0.1rem solid rgba(0, 0, 0, 0.4);
    border-radius: 1rem;
    padding: 1rem;

    margin-right: 1rem;
    font-size: 1.4rem;
  }
  button {
    width: 20%;
  }

`;

export const Btnset = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 1.8rem;


/* button {
  border-radius: 0.3rem;
  background-color: transparent;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  color:  #15203f;
  font-size: 1.3rem;
  padding: 0.5rem;
  height: 2.5rem;
  width: 5rem;
} */


button {
  font-size: 1.3rem;
  text-align: center;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  padding: 0.7rem;
  border: 3px solid #15203f;
  background-color: transparent;
  color: #15203f;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
  border-radius: 0.3rem;
}

button:focus {
outline: none;
}

button::before {
content: "";
position: absolute;
height: 100%;
width: 100.2%;
background-color: #15203f;
top: 0;
left: -100.2%;
transition: all 0.4s;
z-index: -1;
}

button:hover::before {
transform: translateX(100%);
}

button:hover {
color: white;
}

input{
  width: 100%
}

`

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
button{
  font-size: 0.7rem;
  width: 5rem;
  height: 2rem;
  background-color: transparent;
  border-radius: 0.3rem;
  color:  #15203f;
}
`;

export const SignupDiv = styled.div`
border: 0.1rem solid rgba(0, 0, 0, 0.2);
border-radius: 1rem;
box-shadow: rgba(0, 0, 0, 0.3) 0.4rem 0.4rem 4rem 0rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10rem;
padding: 3rem;

h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
  color:  #15203f;
}

input{
  width: 100%
}
label{
  font-size: 0.8rem;
  text-align: left;
}
span{
  font-size: 0.8rem;
  color:  gray;
  margin-top: 0.5rem;
  text-align: left;
  margin-left: 0.2rem;
}
`;




export const LoginDiv = styled.div`
border: 0.1rem solid rgba(0, 0, 0, 0.2);
border-radius: 1rem;
box-shadow: rgba(0, 0, 0, 0.3) 0.4rem 0.4rem 4rem 0rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10rem;
padding: 3rem;
h2 {
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-size: 2rem;
}

button {
font-size: 1rem;
padding: 1rem 1.5rem;
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
margin: 3rem 0.8rem;
}

button:focus {
outline: none;
}

button::before {
content: "";
position: absolute;
height: 101%;
width: 100.2%;
background-color: #15203f;
top: 0;
left: -100.2%;
transition: all 0.4s;
z-index: -1;
}

button:hover::before {
transform: translateX(100%);
}

button:hover {
color: white;
}

input{
  width: 100%
}
`
;

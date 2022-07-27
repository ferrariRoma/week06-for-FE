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
  background-color: #15203f;
  color: white;

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

//   @media (min-width: 576px) and (max-width: 767px) {
//     overflow: auto;
//     width: 500px;
//   }

//   @media (min-width: 768px) and (max-width: 991px) {
//     width: 700px;
//     overflow: auto;
//   }

//   @media (min-width: 992px) and (max-width: 1199px) {
//     width: 900px;
//     overflow: auto;
//   }

//   @media (min-width: 1200px) {
//     width: 1100px;
//     overflow: auto;
//   }
// `;

// export const StyledPostInnerContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

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

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledPostContainer,
  StyledPostInnerContainer,
  StyledPostBtn,
  StyledSelect,
  StylePostTitle,
  StyledPostSubtitle,
  StyledInputContent,
  StyledInputTitle,
} from "../components/styled";
import "./post.css";
import instance from "../axiosConfig";

const Post = () => {
  const navigate = useNavigate();
  const title = useRef();
  const content = useRef();
  const [gadaOda, setGadaOda] = useState("");
  const [district, setDistrict] = useState("");
  const [user, setUser] = useState("");
  let inputRef;
  const [fileImage, setFileImage] = useState({
    image_file: "",
    preview_url: "https://memegenerator.net/img/instances/80735467.jpg",
  });

  useEffect(()=>{
    const stortoken = JSON.parse(sessionStorage.getItem("user"));
    setUser(stortoken.nickname);
  },[]);

  //파일 저장
  const saveFileImage = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      URL.revokeObjectURL(fileImage.preview_url);
      const preview_url = URL.createObjectURL(e.target.files[0]);

      setFileImage(() => ({
        image_file: e.target.files[0],
        preview_url: preview_url,
      }));
    }
  };

  //파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage.preview_url);
    setFileImage({
      image_file: "",
      preview_url: "https://memegenerator.net/img/instances/80735467.jpg",
    });
  };
  //저장되어 있던 이미지 값 언마운트
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(fileImage.preview_url);
    };
  }, []);
  //서버로 이미지 보내기
  const sendImageToServer = async () => {  
    if (fileImage.image_file) {
      const formData = new FormData();
      formData.append("file", fileImage.image_file);
      await instance.post(`/api/posts`, formData);
      alert("게시글이 작성되었습니다.");
      setFileImage({
        image_file: "",
        preview_URL: "https://memegenerator.net/img/instances/80735467.jpg",
      });
      navigate("/");
      window.location.reload();
    } else {
      alert("사진을 등록하세요!");
    }
  };

  //서버로 제목, 글내용, 습득or분실, 구 정보 보내기
  const sendContentToServer = async () => {
    const contentBox = {
      user: user,
      title: title.current.value,
      content: content.current.value,
      district: district,
      gadaoda: gadaOda,
      completed: false,
    };
    await instance.post(`/api/posts`, contentBox);
  };

  const OPTIONS = [
    { value: "수성구", name: "수성구" },
    { value: "동구", name: "동구" },
    { value: "서구", name: "서구" },
    { value: "남구", name: "남구" },
    { value: "북구", name: "북구" },
    { value: "달서구", name: "달서구" },
    { value: "달성군", name: "달성군" },
    { value: "중구", name: "중구" },
  ];

  const GADAODA = [
    { value: "gada", name: "분실" },
    { value: "oda", name: "습득" },
  ];
  //드롭다운 벨류값 저장
  const SelectBox = (props) => {
    const handleChange = (e) => {
      setDistrict(e.target.value);
    };

    useEffect(() => {}, [district]);

    return (
      <StyledSelect onChange={handleChange} value={district}>
        {props.options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={props.defaultValue === option.value}
          >
            {option.name}
          </option>
        ))}
      </StyledSelect>
    );
  };

  //드롭다운 벨류값 저장
  const GadaodaBox = (props) => {
    const handleChange = (e) => {
      setGadaOda(e.target.value);
    };

    useEffect(() => {}, [gadaOda]);
    //희정님이 짠 코드입니다.
    return (
      <StyledSelect onChange={handleChange} value={gadaOda}>
        {props.options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={props.defaultValue === option.value}
          >
            {option.name}
          </option>
        ))}
      </StyledSelect>
    );
  };

  return (
    <>
      <StyledPostContainer>
        <StylePostTitle>게시글 작성하기</StylePostTitle>
        <br />
        <SelectBox options={OPTIONS} />
        <GadaodaBox options={GADAODA} />
        <StyledPostInnerContainer>
          {fileImage && <img alt="" src={fileImage.preview_url}></img>}
          <input
            name="imageUpload"
            type="file"
            accept="image/*"
            onChange={saveFileImage}
            ref={(refParam) => (inputRef = refParam)}
            style={{ display: "none" }}
            onClick={(e) => (e.target.value = null)}
          ></input>
          <StyledPostBtn>
            <button className="btn" onClick={() => inputRef.click()}>
              파일찾기
            </button>
            <button className="btn2" onClick={deleteFileImage}>
              이미지삭제
            </button>
          </StyledPostBtn>
          <StyledPostSubtitle>제목</StyledPostSubtitle>
          <StyledInputTitle
            type="text"
            ref={title}
            placeholder="제목을 입력해주세요."
          />
          <StyledPostSubtitle>내용</StyledPostSubtitle>
          <StyledInputContent
            wrap="hard"
            cols="20"
            ref={content}
            placeholder="내용을 입력해주세요."
          />
          <StyledPostBtn>
            <button
              className="btn"
              onClick={() => {
                sendImageToServer();
                sendContentToServer();
              }}
            >
              작성하기
            </button>
            <button className="btn2" onClick={() => navigate("-1")}>
              취소
            </button>
          </StyledPostBtn>
        </StyledPostInnerContainer>
      </StyledPostContainer>
    </>
  );
};

export default Post;

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledPostContainer,
  StyledPostInnerContainer,
  StylePostBtn,
} from "../components/styled";
import axios from "axios";

const Post = () => {
  const navigate = useNavigate();
  const title = useRef();
  const content = useRef();
  const [gadaOda, setGadaOda] = useState("");
  const [district, setDistrict] = useState("");
  const test = useRef(null);
  let inputRef;
  const [fileImage, setFileImage] = useState({
    image_file: "",
    preview_url: "https://memegenerator.net/img/instances/80735467.jpg",
  });

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
      await axios.post("http://localhost:5001/posts", formData);
      alert("서버에 등록이 완료되었습니다!");
      setFileImage({
        image_file: "",
        preview_URL: "https://memegenerator.net/img/instances/80735467.jpg",
      });
      navigate("/");
    } else {
      alert("사진을 등록하세요!");
    }
  };
  //서버로 제목, 글내용, 습득or분실, 구 정보 보내기
  const sendContentToServer = async () => {
    const contentBox = {
      title: title.current.value,
      content: content.current.value,
      district: district,
      gadaoda: gadaOda,
      completed: false,
    };
    console.log(contentBox);
    await axios.post("http://localhost:5001/posts", contentBox);
  };

  const OPTIONS = [
    { value: "susung", name: "수성구" },
    { value: "east", name: "동구" },
    { value: "west", name: "서구" },
    { value: "south", name: "남구" },
    { value: "north", name: "북구" },
    { value: "dalseo", name: "달서구" },
    { value: "dalsung", name: "달성군" },
    { value: "middle", name: "중구" },
  ];

  const GADAODA = [
    { value: "hide", name: "분실" },
    { value: "seek", name: "습득" },
  ];
  //드롭다운 벨류값 저장
  const SelectBox = (props) => {
    const handleChange = (e) => {
      setDistrict(e.target.value);
    };

    useEffect(() => {}, [district]);

    return (
      <select onChange={handleChange} ref={test} value={district}>
        {props.options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={props.defaultValue === option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
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
      <select onChange={handleChange} value={gadaOda}>
        {props.options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={props.defaultValue === option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    );
  };

  return (
    <>
      <StyledPostContainer>
        <hl>게시글 작성하기</hl>
        <br />

        <SelectBox options={OPTIONS} />
        <GadaodaBox options={GADAODA} />
        <StyledPostInnerContainer>
          {fileImage && (
            <img
              alt=""
              src={fileImage.preview_url}
              style={{ width: "39.9rem", height: "25rem" }}
            ></img>
          )}
          <input
            name="imageUpload"
            type="file"
            accept="image/*"
            onChange={saveFileImage}
            ref={(refParam) => (inputRef = refParam)}
            style={{ display: "none" }}
            onClick={(e) => (e.target.value = null)}
          ></input>
          <StylePostBtn>
            <button onClick={() => inputRef.click()}>파일 찾기</button>
            <button
              style={{ width: "5rem", height: "3rem" }}
              onClick={deleteFileImage}
            >
              이미지 삭제
            </button>
          </StylePostBtn>
          제목
          <input type="text" style={{ height: "2.5rem" }} ref={title}></input>
          내용
          <input
            type="textarea"
            style={{ height: "15rem" }}
            ref={content}
          ></input>
          <StylePostBtn>
            <button
              onClick={() => {
                sendImageToServer();
                sendContentToServer();
              }}
            >
              작성하기
            </button>
            <button onClick={() => navigate("/")}>취소</button>
          </StylePostBtn>
        </StyledPostInnerContainer>
      </StyledPostContainer>
    </>
  );
};

export default Post;

import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
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
import axios from "axios";
import "./post.css";


const EditPost = (prop) => {
  const { edit } = useParams();
  const navigate = useNavigate();
  // const location = useLocation();
  const title = useRef();
  const content = useRef();
  const [gadaOda, setGadaOda] = useState("");
  const [district, setDistrict] = useState("");
  const [completed, setCompleted] = useState("");
  let inputRef;
  const [fileImage, setFileImage] = useState({
    image_file: "",
    preview_url: "https://memegenerator.net/img/instances/80735467.jpg",
  });

  // const {result} = location.state
  // setFileImage(result.fileImage.preview_url)
  // setGadaOda(result.gadaoda)
  // setDistrict(result.district)
  // const title = useRef(result.title);
  // const content = useRef(result.content);
  // setCompleted(result.completed)

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(`http://localhost:5001/posts/${edit}`);
      return data;
    };
    const getImage = async () => {
      const { data } = await axios.get(``);
      return data;
    };
    getPost().then((result) => {
      setGadaOda(result.gadaOda);
      setDistrict(result.setDistrict);
      title.current.value = result.title;
      content.current.value = result.content;
    });
    getImage().then((result) => {
      setFileImage({ ...fileImage, preview_url: `` });
    });
  }, []);
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
      await axios.put("/api/", formData);
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
      content: content.current.value.replace(/(?:\r\n|\r|\n)/g, "<br/>"),
      district: district,
      gadaoda: gadaOda,
      completed: completed,
    };
    await axios.put("http://localhost:5001/posts/${edit}", contentBox);
  };
  // 폼데이터로 보낼경우
  // const sendContentToServer = async () => {
  // const formData = new FormData();
  // formData.append("title", title.current.value);
  // formData.append("content", content.current.value);
  // formData.append("district", distrct);
  // formData.append("gadaoda", gadaOda);
  // formData.append("completed", completed);
  // await api.put("http://localhost:5001/posts/${edit}", formData);
  //}
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
        <StylePostTitle>게시글 수정하기</StylePostTitle>
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
            <button onClick={() => inputRef.click()}>파일 찾기</button>
            <button onClick={deleteFileImage}>이미지 삭제</button>
          </StyledPostBtn>
          <StyledPostSubtitle>제목</StyledPostSubtitle>
          <StyledInputTitle type="text" ref={title} />
          <StyledPostSubtitle>내용</StyledPostSubtitle>
          <StyledInputContent wrap="hard" cols="20" ref={content} />
          <StyledPostBtn>
            <button className="btn"
              onClick={() => {
                sendImageToServer();
                sendContentToServer();
              }}
            >
              수정하기
            </button>
            <button  className="btn2" 
            onClick={() => navigate(-1)}>취소</button>
          </StyledPostBtn>
        </StyledPostInnerContainer>
      </StyledPostContainer>
    </>
  );
};

export default EditPost;

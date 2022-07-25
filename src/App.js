import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { StyledHeader } from "./components/styled";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import LoadingSpinner from "./components/Spinner";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegiserPage";
import Post from "./pages/Posts";


function App() {
  // 페이지네이션 관련 state. 페이지네이션이 이루어지는 Home component에 props로 전달.
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // mount할 때 mockAPI에서 데이터 요청
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:5001/posts");
      setPosts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {loading && <LoadingSpinner />}
      <StyledHeader>
        <div>
          <div>로고</div>
          <div>오다 주웠다</div>
          <div>가다 흘렸다</div>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} style={{ fontSize: "3rem" }} />
        </div>
      </StyledHeader>
      <Routes>
        <Route path="/" element={<Home posts={posts} loading={loading} />} />
        <Route path="/api/posts/:postId" element={<Detail />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/regist" element={<RegisterPage />} />
        <Route path="/posts" element={<Post/>}/>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { StyledHeader } from "./components/styled";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import instance from "./axiosConfig";
import LoadingSpinner from "./components/Spinner";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegiserPage";
import Post from "./pages/Posts";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, loginUser } from "./redux/modules/userSlice";
import EditPost from "./pages/EditPosts";
import Introduce from "./pages/Introduce";

function App() {
  // 페이지네이션 관련 state. 페이지네이션이 이루어지는 Home component에 props로 전달.
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigater = useNavigate();
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.isLogged);
  const user_nick = useSelector((state) => state.nickname);

  const logout = () => {
    dispatch(clearUser());
    localStorage.removeItem("user");
    navigater("/");
  };

  useEffect(() => {
    const stortoken = JSON.parse(localStorage.getItem("user"));
    if (user_data === false && stortoken !== null) {
      instance
        .get("/user/userinfo", {
          headers: { Authorization: stortoken },
        })
        .then((response) => {
          dispatch(
            loginUser({
              email: response.data.email,
              nickname: response.data.nickname,
            })
          );
        });
    }
  });

  // 13.209.4.223
  // 오다 주웠다 클릭
  // 실험
  /* useEffect(() => {
    // mount할 때 mockAPI에서 데이터 요청
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:5001/posts");
      setPosts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []); */
  const onClickOdaBtn = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/api/posts", {
        data: {
          gadaoda: "oda",
        },
      });
      setPosts(response.data);
      setLoading(false);
      return navigater("/");
    } catch (err) {
      return console.log(err);
    }
  };
  // 가다 흘렸다 버튼 핸들러
  const onClickGadaBtn = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/api/posts", {
        data: {
          gadaoda: "gada",
        },
      });
      setPosts(response.data);
      setLoading(false);
      return navigater("/");
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <div className="App">
      {loading && <LoadingSpinner />}
      <StyledHeader>
        <div>
          <div>로고</div>
          <div onClick={onClickOdaBtn}>오다 주웠다</div>
          <div onClick={onClickGadaBtn}>가다 흘렸다</div>
        </div>
        {user_data === true ? (
          <>
            <span>{user_nick} 님</span>
            <div>
              <button onClick={logout}>로그아웃</button>
            </div>
          </>
        ) : (
          <>
            <div onClick={() => navigater("/login")}>
              <FontAwesomeIcon icon={faUser} style={{ fontSize: "3rem" }} />
            </div>
          </>
        )}
      </StyledHeader>
      <Routes>
        <Route path="/" element={<Home posts={posts} loading={loading} />} />

        <Route
          path="/api/posts/:postId"
          element={<Detail loading={loading} setLoading={setLoading} />}
        />
        <Route path="/intro" element={<Introduce />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/posts/:postId/:edit" element={<EditPost />} />
        <Route path="/api/posts/:postId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

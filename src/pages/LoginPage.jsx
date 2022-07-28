import React from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/modules/userSlice";
import { useDispatch } from "react-redux";
import { LoginDiv, Row } from "../components/styled";
import instance from "../axiosConfig";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigater = useNavigate();
  const dispatch = useDispatch();

  const loginAxios = () => {
    const data = {
      email,
      password,
    };

    instance.get("/login/true", data).then((response) => {
      sessionStorage.setItem("user", JSON.stringify(response.data.cookie));
      dispatch(
        loginUser({
          mail: response.data.cookie.email,
          nickname: response.data.cookie.nickname,
        })
      );
      navigater("/");
    });

    instance
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(
          loginUser({
            email: response.data.email,
            nickname: response.data.nickname,
          })
        );
        navigater("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <LoginDiv>
      <h2>Log In</h2>
      <form onSubmit={onSubmit}>
        <Row>
          <label> 이메일 </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onEmailHandler}
          />
        </Row>
        <Row>
          <label> 패스워드 </label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onPasswordHandler}
          />
        </Row>
        <br />
        <button type="submit" onClick={loginAxios}>
          로그인하기
        </button>
        <button onClick={() => navigater("/signup")}> 회원가입</button>
      </form>
    </LoginDiv>
  );
};

export default LoginPage;

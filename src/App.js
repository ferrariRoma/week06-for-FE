import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homes";
import { StyledHeader} from "./components/styled";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegiserPage";
import React from "react";

function App() {
  // React.useEffect (()=>{
  //   sessionStorage.getItem("cookie")
  // })

  return (
    <div className="App">
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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/regist" element={<RegisterPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

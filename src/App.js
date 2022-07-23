import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homs";
import { StyledHeader, StyledSidebar } from "./components/styled";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
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
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

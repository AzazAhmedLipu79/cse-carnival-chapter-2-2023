import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Errorpage from "./Errorpage";
import Nav from "./comonent/Nav";
import LoginPage from "./comonent/LoginPage";
import SigninPage from "./comonent/SigninPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<>hello</>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Errorpage from "./Errorpage";
import Nav from "./comonent/Nav";
import LoginPage from "./comonent/LoginPage";
import SigninPage from "./comonent/SigninPage";
import Profile from "./comonent/Profile";
import HomePage from "./comonent/HomePage";
import { SinglePost } from "./comonent/SinglePost";
// import Post from "./comonent/Post";
import { DirectMessage } from "./comonent/DirectMessage";
import Footer from "./comonent/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/posts/" element={<HomePage />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/direct_message" element={<DirectMessage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

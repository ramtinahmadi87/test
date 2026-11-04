
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Form from "./pages/Form";
import OTP from "./pages/OTP";
import Profile from "./pages/Profile";
import Header from "./Header/Header";
import Footer from "./footer/footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/footer" element={< Footer/>} />
        <Route path="/header" element={<Header />} />

      </Routes>
    </>
  )
}

export default App

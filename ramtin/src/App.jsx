
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Form from "./pages/Form";
import OTP from "./pages/OTP";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App

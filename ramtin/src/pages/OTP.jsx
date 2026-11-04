import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usecontext } from "../context/Context";

function OTP() {
  const [otp, setOtp] = useState("")
  const { user, saveUser } = usecontext()
  const navigate = useNavigate()

  function check() {
    if (otp === "1234") {
      saveUser({ ...user, isVerified: true })


      navigate("/profile")


    } else {
      alert("wrong")
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">


      <div className="bg-slate-900 p-8 rounded-xl w-full max-w-sm space-y-4">

        <h1 className="text-2xl text-white text-center">

         OTP
        </h1>

        <input type="Number" maxLength={4} className="w-full bg-slate-800 text-white p-3 rounded-lg text-center outline-none focus:ring-2 focus:ring-blue-500" placeholder="OTP code" value={otp} onChange={(e) => setOtp(e.target.value)} />

        <button onClick={check} className="w-full bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-lg">

         Ok
        </button>
      </div>
    </div>
  )
}

export default OTP
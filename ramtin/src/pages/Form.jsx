import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usecontext } from "../context/Context";

function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  const { saveUser } = usecontext()
  const navigate = useNavigate()

  function next(e) {
    e.preventDefault()

    saveUser({ name: name ,email: email ,number: number ,isVerified: false})

    navigate("/otp")
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <form onSubmit={next} className="bg-slate-900 p-8 rounded-xl w-full max-w-sm space-y-4">

        <h1 className="text-2xl font-medium text-white text-center">
          Fill The Form
        </h1>

        <input className="w-full bg-slate-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />

        <input className="w-full bg-slate-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input className="w-full bg-slate-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" type="number" placeholder="Number Phone" value={number} onChange={(e) => setNumber(e.target.value)} required />

        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-lg">
          Next
        </button>
      </form>
    </div>
  )
}

export default Form
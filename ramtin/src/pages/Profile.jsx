import { Link } from "react-router-dom";
import { usecontext } from "../context/Context";

function Profile() {
  const { user, logout } = usecontext()


  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="bg-slate-900 p-8 rounded-xl w-full max-w-sm space-y-4">
        <h1 className="text-2xl text-white text-center">
          Info User
        </h1>

        <p className="text-slate-300">
          Name : {user.name}
        </p>

        <p className="text-slate-300 break-all">
          Email : {user.email}
        </p>

        <p className="text-slate-300">
          Namber Phone : {user.number}
        </p>
        <Link to={"/"}>
          <button onClick={() => { logout() }} className="w-full bg-red-600 hover:bg-red-500 text-white p-3 rounded-lg">
            Exit
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Profile;
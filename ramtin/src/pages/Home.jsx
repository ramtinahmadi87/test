import { Link } from "react-router-dom";

function Home() {


    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
            <div className="bg-slate-900 p-8 rounded-xl text-center">
                <h1 className="text-3xl text-white mb-4">
                    Home
                </h1>
                <Link to={"/form"}>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                       Get Start
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home 
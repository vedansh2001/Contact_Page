import { Link } from "react-router-dom"
export const Appbar = () => {
    return <div className="shadow-md h-14 flex justify-between bg-slate-500 rounded">
        <div className="flex flex-col justify-center h-full ml-4 text-white font-bold text-2xl">
             App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 text-white font-bold text-xl">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-400 flex justify-center mt-1 mr-3">
                <div className="flex flex-col justify-center h-full text-2xl ">
                    U
                </div>
            </div>
            <div className="font-bold text-white pt-2 pr-2">
                <button className="bg-green-600 rounded ">
                    <div className="pl-3 pr-3 pb-2 pt-1 text-xl">
                    <Link to={`/signin`} >Signin</Link>
                        
                        
                    </div>
                </button>
            </div>
        </div>
    </div>
}
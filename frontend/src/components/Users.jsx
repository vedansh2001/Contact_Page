import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
            },[filter])

    return <>
        <div className="font-bold mt-6 text-xl">
            Users
        </div>
        <div className="my-2 ">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded shadow-md border-slate-200"></input>
        </div>
        <div className="mt-8 ">
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({user}) {
    const navigate = useNavigate();

    return <div className=" mb-4 flex justify-between bg-slate-200 rounded-md shadow-md ">
        <div className="flex pl-1 ">
            <div className="rounded-full  h-12 w-12 bg-slate-400 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-2xl font-semibold">
                    {user.firstName[0].toUpperCase()}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful pt-2 pr-2">
            <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"} />
        </div>
    </div>
}
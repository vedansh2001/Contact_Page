import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    return < >
    <div className="h-screen bg-slate-50">
    <div className="w-4/5 ml-32 pt-20">

        <Appbar label={"payTM"} />
        <Balance label={"Balance"} />
        <Users label={"users"} />
    </div>
    </div>
    </>
}
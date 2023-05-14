import { ClockType } from "../../../types/types"
import { getClockData } from "../../../util/getClockData"
import ClockSelect from "../components/ClockSelect"
import NavBar from "../components/NavBar"

const page = () => {

    const clocksData: ClockType[] = getClockData()
    return (
        <div className="min-h-screen bg-zinc-800">
            <NavBar />
            <ClockSelect clocks={clocksData} />
        </div>
    )
}

export default page
import { ClockType } from "../../../../types/types"
import { getClockData } from "../../../../util/getClockData"
import ClockSelect from "../../components/ClockSelect"

const page = () => {

    const clocksData: ClockType[] = getClockData()
    return (
        <ClockSelect clocks={clocksData} />
    )
}

export default page
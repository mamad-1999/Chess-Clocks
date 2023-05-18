"use client"

import { ChangeEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { ClockType } from "../../../types/types"
import { useAppDispatch } from "@/redux/hook"
import { useAppSelector } from "@/redux/hook"
import { setTimer } from "@/redux/features/timerSlice"
import { setLocalStorageItem } from "../../../util/storage"

type ClockSelectType = {
    clocks: ClockType[]
}

const ClockSelect = ({ clocks }: ClockSelectType) => {
    const timerState = useAppSelector(state => state.timer)
    const settingState = useAppSelector(state => state.setting)
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [clockValue, setClockValue] = useState<number>(timerState.player1.time)

    const handelClockChange = (e: ChangeEvent<HTMLInputElement>) => {
        const timeValue = e.target.value
        setClockValue(+timeValue)
        setLocalStorageItem("time", timeValue)
    }

    const handelStartWithNewClock = () => {
        dispatch(setTimer(clockValue))
        router.push("/")
    }

    return (
        <main className="pt-4 max-w-2xl mx-auto flex flex-col justify-center items-center">
            {clocks.map((clock: ClockType) => (
                <div key={clock.id} className="w-full flex justify-between px-8 py-2">
                    <label className="text-white" htmlFor={clock.title}>{clock.title}</label>
                    <input className={`bg-zinc-800 border-2 border-zinc-500 text-lime-700 focus:ring-lime-700 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:text-lime-700 cursor-pointer`}
                        type="radio"
                        id={clock.title}
                        name="clock"
                        checked={clockValue === clock.time}
                        value={clock.time}
                        onChange={handelClockChange} />
                </div>
            ))}
            <button onClick={handelStartWithNewClock} className={`${settingState.themeColor} w-10/12 mt-8 h-10 rounded-lg shadow-xl text-white text-xl font-bold first-letter:text-2xl`}>Start</button>
        </main>
    )
}

export default ClockSelect
"use client"
import { ClockType } from "../../../types/types"

type ClockSelectType = {
    clocks: ClockType[]
}

const ClockSelect = ({ clocks }: ClockSelectType) => {
    return (
        <main className="pt-4 max-w-2xl mx-auto flex flex-col justify-center items-center">
            {clocks.map((clock: ClockType) => (
                <div key={clock.id} className="w-full flex justify-between px-8 py-2">
                    <label className="text-white" htmlFor={clock.title}>{clock.title}</label>
                    <input className="bg-zinc-800 border-2 border-zinc-500 text-lime-600 focus:ring-lime-600 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:bg-lime-600 cursor-pointer" type="radio" id={clock.title} name="clock" />
                </div>
            ))}
            <button className="bg-lime-600 w-10/12 mt-8 h-10 rounded-lg shadow-xl text-white text-xl font-bold first-letter:text-2xl">Start</button>
        </main>
    )
}

export default ClockSelect
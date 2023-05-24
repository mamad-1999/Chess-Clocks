"use client"

import { useAppSelector } from "@/redux/hook"
import { formatTime } from "../../../util/formatTime"

type PropColor = {
    color: string,
    click: () => void,
    changeTime: () => void,
    time: number,
    playing: boolean,
    moveCount: number,
    mobileStyle?: string
}

const NumberBox = (
    { color,
        click,
        time,
        playing,
        mobileStyle,
        moveCount,
        changeTime
    }: PropColor
) => {
    const toolBarState = useAppSelector(state => state.toolBar)
    return (
        <div className="w-full flex  justify-center md:w-1/2 md:h-screen h-1/2 relative select-none">
            {!toolBarState.playStatus ? <button onClick={() => changeTime()} className="absolute bottom-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-10 w-8 md:h-10 h-8 stroke-zinc-900">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            </button> : null}
            <button
                disabled={playing}
                onClick={() => click()}
                className={`w-full ${color} md:h-screen h-full flex items-center justify-center cursor-pointer`}>
                <span
                    className={`absolute ${mobileStyle ? "bottom-3 right-3 md:top-3 md:right-3" : "top-3 right-3 "} text-zinc-800 ${mobileStyle}`}>
                    Move = {moveCount}
                </span>
                <h3
                    className={`text-8xl md:text-8xl text-center font-semibold ${color === "bg-stone-500" ? "text-zinc-900" : "text-white"} ${mobileStyle}`}>
                    {formatTime(time).substring(-1, 5)}
                    {/* example => 5:00 */}
                    <span className="text-5xl">{formatTime(time).substring(5, 9)}</span>
                    {/* example => 000 => milliSecond */}
                </h3>
            </button >

        </div>
    )
}

export default NumberBox 
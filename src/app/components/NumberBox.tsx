import { formatTime } from "../../../util/formatTime"

type PropColor = {
    color: string,
    click: () => void,
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
        moveCount
    }: PropColor
) => {

    const handelClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        click()
    }
    return (
        <div className="w-full md:w-1/2 md:h-screen h-1/2 relative select-none">
            <div className="absolute bottom-3 right-2/4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            </div>

            <button
                disabled={playing}
                onClick={(e) => handelClick(e)}
                className={`w-full ${color} md:h-screen h-full flex items-center justify-center cursor-pointer`}>
                <h3 className={`absolute md:top-3 md:right-3${mobileStyle ? "bottom-3 right-3" : "top-3 right-3"} text-zinc-800 ${mobileStyle}`}>Move = {moveCount}</h3>
                <h3 className={`text-8xl md:text-8xl text-center font-semibold ${color === "bg-stone-500" ? "text-zinc-900" : "text-white"} ${mobileStyle}`}>
                    {formatTime(time).substring(-1, 4)}
                    {/* example => 5:00 */}
                    <span className="text-5xl">{formatTime(time).substring(5, 9)}</span>
                    {/* example => 000 => milliSecond */}
                </h3>
            </button >

        </div>
    )
}

export default NumberBox 
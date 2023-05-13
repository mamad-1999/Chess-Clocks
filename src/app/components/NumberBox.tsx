import { formatTime } from "../../../util/formatTime"

type PropColor = {
    color: string,
    click: () => void,
    time: number,
    playing: boolean,
    mobileStyle?: string,
    moveCount: number
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
    return (
        <button
            disabled={playing}
            onClick={() => click()}
            className={`w-full md:w-1/2 ${color} md:h-screen h-1/2 flex items-center justify-center cursor-pointer select-none relative`
            }>
            <span className={`absolute md:top-3 md:right-3 ${mobileStyle ? "bottom-3 right-3" : "top-3 right-3"} text-zinc-800 ${mobileStyle}`}>Move = {moveCount}</span>
            <h3 className={`text-8xl md:text-8xl text-center font-semibold ${color === "bg-stone-500" ? "text-zinc-900" : "text-white"} ${mobileStyle}`}>
                {formatTime(time).substring(-1, 4)}
                <span className="text-5xl">{formatTime(time).substring(5, 9)}</span>
            </h3>
        </button >
    )
}

export default NumberBox 
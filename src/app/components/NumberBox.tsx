import { formatTime } from "../util/formatTime"

type PropColor = {
    color: string,
    click: () => void,
    time: number,
    playing: boolean
}

const NumberBox = (
    { color,
        click,
        time,
        playing
    }: PropColor
) => {
    return (
        <button
            disabled={playing}
            onClick={() => click()}
            className={`w-full md:w-1/2 ${color} md:h-screen h-1/2 flex items-center justify-center cursor-pointer select-none`
            }>
            <h3 className="text-8xl font-semibold text-zinc-900">
                {formatTime(time)}
            </h3>
        </button >
    )
}

export default NumberBox 

type PropColor = {
    color: string,
    onSwitch: () => void,
    time: number
}

const NumberBox = ({ color, onSwitch, time }: PropColor) => {
    return (
        <div onClick={() => onSwitch()} className={`w-full md:w-1/2 ${color} md:h-screen h-1/2 flex items-center justify-center cursor-pointer`
        }>
            <h3 className="text-8xl font-semibold text-zinc-900">
                {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
            </h3>
        </div >
    )
}

export default NumberBox
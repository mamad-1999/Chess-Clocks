
type PropColor = {
    color: string
}

const NumberBox = ({ color }: PropColor) => {
    return (
        <div className={`w-full md:w-1/2 ${color} md:h-screen h-1/2 flex items-center justify-center`
        }>
            <h3 className="text-8xl font-semibold text-zinc-900">
                3:00
            </h3>
        </div >
    )
}

export default NumberBox
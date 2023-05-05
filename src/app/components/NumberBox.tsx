
type PropColor = {
    color: string
}

const NumberBox = ({ color }: PropColor) => {
    return (
        <div className={`w-1/2 ${color} h-screen flex items-center justify-center`
        }>
            <h3 className="text-8xl font-bold">
                3:00
            </h3>
        </div >
    )
}

export default NumberBox
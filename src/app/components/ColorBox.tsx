"use client"

const colors = [
    "bg-lime-700",
    "bg-cyan-700",
    "bg-orange-500",
    "bg-emerald-600",
    "bg-yellow-600",
    "bg-red-500"
]

const ColorBox = () => {
    return (
        <main className="pt-8 px-4 max-w-2xl mx-auto flex flex-col justify-center">
            <h3 className="text-white">Theme color</h3>
            <div className="flex items-center justify-center pt-4 gap-5 sm:gap-4">
                {colors.map(color => (
                    <div key={color} className={`w - 10 sm:w-14 h-10 sm:h-14 ${color} rounded-full cursor-pointer shadow-xl flex items-center justify-center`}>
                        {color === "bg-lime-700" ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg> : null}
                    </div>
                ))}
            </div>
        </main >
    )
}

export default ColorBox
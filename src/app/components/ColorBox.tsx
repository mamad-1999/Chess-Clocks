"use client"

import { setThemeColor } from "@/redux/features/settingSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
const colors = [
    "lime-700",
    "cyan-700",
    "orange-500",
    "emerald-600",
    "yellow-600",
    "red-500"
]

const ColorBox = () => {
    const settingState = useAppSelector(state => state.setting)
    const dispatch = useAppDispatch()

    const handleChangeThemeColor = (color: string) => {
        dispatch(setThemeColor(color))
    }
    return (
        <main className="pt-8 px-4 max-w-2xl mx-auto flex flex-col justify-center">
            <h3 className="text-white">Theme color</h3>
            <div className="flex items-center justify-center pt-4 gap-5 sm:gap-4">
                {colors.map(color => (
                    <div onClick={() => handleChangeThemeColor(color)} key={color} className={`w-10 sm:w-16 h-10 sm:h-16 bg-${color} rounded-full cursor-pointer shadow-xl flex items-center justify-center`}>
                        {color === settingState.themeColor ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg> : null}
                    </div>
                ))}
            </div>
        </main >
    )
}

export default ColorBox
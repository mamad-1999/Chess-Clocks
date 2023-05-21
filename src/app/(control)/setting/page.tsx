"use client"

import { setThemeColor } from "@/redux/features/settingSlice"
import { soundControl } from "@/redux/features/toolBarSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
const colors = [
    "bg-lime-700",
    "bg-cyan-700",
    "bg-orange-500",
    "bg-emerald-600",
    "bg-yellow-600",
    "bg-red-500"
]

const ColorBox = () => {
    const { setting, toolBar } = useAppSelector(state => state)
    const dispatch = useAppDispatch()

    const handleChangeThemeColor = (color: string) => {
        dispatch(setThemeColor(color))
    }

    const onToggleSoundSetting = () => {
        dispatch(soundControl())
    }
    return (
        <main className="pt-8 px-4 max-w-2xl mx-auto flex flex-col justify-center">
            <h3 className="text-white">Theme color</h3>
            <div className="flex items-center justify-center pt-4 gap-4 sm:gap-4">
                {colors.map(color => (
                    <div onClick={() => handleChangeThemeColor(color)} key={color} className={`w-10 sm:w-16 h-10 sm:h-16 ${color} ${color === setting.themeColor && "ring-2 ring-white ring-offset-4 ring-offset-gray-800"} rounded-full cursor-pointer shadow-xl flex items-center justify-center`}>
                        {color === setting.themeColor ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg> : null}
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center mt-12 px-4">
                <h3 className="text-white">Sound</h3>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                        </span>
                        <div onClick={onToggleSoundSetting} className={`w-14 h-7 flex items-center cursor-pointer ${toolBar.soundStatus ? setting.themeColor : "bg-gray-600"} rounded-full mx-3 px-1`} >
                            <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${toolBar.soundStatus && "translate-x-7"}`} >
                            </div>
                        </div>
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default ColorBox
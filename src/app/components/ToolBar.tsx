"use client"

import Link from "next/link"
import { soundControl } from "@/redux/features/toolBarSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { reset } from "@/redux/features/timerSlice"
import { clearTime } from "../../../util/clearTime"

type ToolBarProps = {
    onPlay: () => void,
    onPause: () => void
}

const ToolBar = ({ onPlay, onPause }: ToolBarProps) => {
    const state = useAppSelector((state) => state.toolBar)
    const timerState = useAppSelector(state => state.timer)
    const dispatch = useAppDispatch()

    const resetTimer = () => {
        clearTime()
        dispatch(reset())
    }

    return (
        <section className="flex md:flex-col items-center justify-evenly bg-zinc-800 w-full md:w-20 h-16 md:h-screen text-white">
            <div className="flex md:flex-col items-center justify-evenly w-full h-full">
                <svg onClick={resetTimer} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 stroke-stone-400 cursor-pointer hover:rotate-45 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <div onClick={() => !state.playStatus ? onPlay() : onPause()}>
                    {(state.playStatus && timerState.startTime) ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 fill-stone-400 stroke-stone-400 cursor-pointer hover:scale-90 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 fill-stone-400 stroke-stone-400 cursor-pointer hover:scale-110 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                    )}
                </div>
            </div>
            <div className="flex md:flex-col items-center justify-evenly w-full h-full">
                <Link href={"/time"} onClick={() => state.playStatus && onPause()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 stroke-stone-400 hover:-rotate-12 hover:scale-110 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Link>
                <div onClick={() => dispatch(soundControl())}>
                    {state.soundStatus ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 stroke-stone-400 cursor-pointer hover:translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 stroke-stone-400 cursor-pointer hover:translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                        </svg>
                    )}
                </div>
            </div>
        </section >
    )
}

export default ToolBar
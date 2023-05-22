"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useState, ChangeEvent, useEffect } from "react";
import { formatMinute, formatSecond, getMillisecondValue } from "../../../util/formatTime";
import { changeTime1, changeTime2 } from "@/redux/features/timerSlice";
import { closeSingleTimeHandler } from "@/redux/features/singleTimeSlice";

export default function Modal() {
    console.log("first")
    const singleTimeState = useAppSelector(state => state.singleTime)
    const settingState = useAppSelector(state => state.setting)
    const timerState = useAppSelector(state => state.timer)
    const dispatch = useAppDispatch()
    const [minute, setMinute] = useState<number | string>(
        (singleTimeState.player === "1") ?
            formatMinute(timerState.player1.time) :
            formatMinute(timerState.player2.time))
    const [second, setSecond] = useState<number | string>(
        (singleTimeState.player === "1") ?
            formatSecond(timerState.player1.time) :
            formatSecond(timerState.player2.time))


    useEffect(() => {
        setMinute((singleTimeState.player === "1") ?
            formatMinute(timerState.player1.time) :
            formatMinute(timerState.player2.time))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [singleTimeState.showSingleTime])


    useEffect(() => {
        setSecond((singleTimeState.player === "1") ?
            formatSecond(timerState.player1.time) :
            formatSecond(timerState.player2.time))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [singleTimeState.showSingleTime])

    const handelChangeMinute = (e: ChangeEvent<HTMLInputElement>) => {
        setMinute(+e.target.value)
    }

    const handelChangeSecond = (e: ChangeEvent<HTMLInputElement>) => {
        setSecond(+e.target.value)
    }

    const changeTime = () => {
        const milliSecond = getMillisecondValue(+minute, +second);
        (singleTimeState.player === "1") ? dispatch(changeTime1(milliSecond)) : dispatch(changeTime2(milliSecond))
        dispatch(closeSingleTimeHandler())
    }

    return (
        <>
            {singleTimeState.showSingleTime ? (
                <>
                    <div
                        className={`justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${singleTimeState.showSingleTime && "bg-stone-500/70"}`}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="md:w-96 w-80 border-0 rounded-lg shadow-lg relative flex flex-col bg-zinc-800 outline-none focus:outline-none">

                                {/*body*/}
                                <div className="relative p-4 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-stone-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="my-2 text-white text-sm leading-relaxed select-none">
                                        ADJUST TIME
                                    </p>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="flex flex-col justify-center gap-1">
                                        <input id="minute" type="text" className={`w-20 h-20 flex text-center text-5xl outline-none border-0 p-0 bg-zinc-700 text-white rounded caret-white focus:bg-lime-700 focus:ring-lime-700 selection:bg-lime-800`}
                                            maxLength={2}
                                            value={minute}
                                            onChange={(e) => handelChangeMinute(e)}
                                        />
                                        <label className="text-stone-300 text-sm select-none" htmlFor="minute">Minute</label>
                                    </div>
                                    <span className="text-white text-clip text-5xl">:</span>
                                    <div className="flex flex-col justify-center gap-1">
                                        <input id="second" type="text" className={`w-20 h-20 flex text-center text-5xl outline-none border-0 p-0 bg-zinc-700 text-white rounded caret-white focus:bg-lime-700 focus:ring-lime-700 selection:bg-lime-800`}
                                            maxLength={2}
                                            value={second}
                                            onChange={(e) => handelChangeSecond(e)}
                                        />
                                        <label className="text-stone-300 text-sm select-none" htmlFor="second">Second</label>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex gap-3 items-center justify-end py-4 px-6 rounded-b mt-2 select-none">
                                    <button
                                        onClick={() => dispatch(closeSingleTimeHandler())}
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        CANCEL
                                    </button>
                                    <button
                                        onClick={changeTime}
                                        className={` text-white ${settingState.themeColor} active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                                        type="button"
                                    >
                                        SAVE TIME
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
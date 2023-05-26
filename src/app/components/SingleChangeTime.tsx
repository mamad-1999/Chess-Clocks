"use client"

import { useAppDispatch } from "@/redux/hook";
import { useState, ChangeEvent, useEffect } from "react";
import { formatMinute, formatSecond, getMillisecondValue } from "../../../util/formatTime";
import { changeTime1, changeTime2 } from "@/redux/features/timerSlice";
import { closeSingleTimeHandler } from "@/redux/features/singleTimeSlice";
import useReduxState from "../../../hooks/useReduxState";


export default function Modal() {
    const { singleTime, setting, timer } = useReduxState()
    const dispatch = useAppDispatch()

    const [minute, setMinute] = useState<number | string>(
        (singleTime.player === "1") ?
            formatMinute(timer.player1.time) :
            formatMinute(timer.player2.time))
    const [second, setSecond] = useState<number | string>(
        (singleTime.player === "1") ?
            formatSecond(timer.player1.time) :
            formatSecond(timer.player2.time))

    useEffect(() => {
        const { player } = singleTime;
        const { player1, player2 } = timer;
        const { time: player1Time } = player1;
        const { time: player2Time } = player2;
        const time = (player === "1") ? player1Time : player2Time;
        setMinute(formatMinute(time));
        setSecond(formatSecond(time));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [singleTime.showSingleTime, singleTime.player]);

    const handleChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "minute" && !isNaN(+value)) {
            setMinute(+value);
        } else if (name === "second" && !isNaN(+value)) {
            setSecond(+value);
        }
    };

    const changeTime = () => {
        const milliSecond = getMillisecondValue(+minute, +second);
        singleTime.player === "1" ? dispatch(changeTime1(milliSecond)) : dispatch(changeTime2(milliSecond))
        dispatch(closeSingleTimeHandler())
    }

    return (
        <>
            {singleTime.showSingleTime ? (
                <>
                    <div
                        className={`justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${singleTime.showSingleTime && "bg-stone-500/70"} md:rotate-0 ${singleTime.player === "1" && "rotate-180"}`}
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
                                            value={minute}
                                            maxLength={2}
                                            name="minute"
                                            onChange={(e) => handleChangeTime(e)}
                                        />
                                        <label className="text-stone-300 text-sm select-none" htmlFor="minute">Minute</label>
                                    </div>
                                    <span className="text-white text-clip text-5xl">:</span>
                                    <div className="flex flex-col justify-center gap-1">
                                        <input id="second" type="text" className={`w-20 h-20 flex text-center text-5xl outline-none border-0 p-0 bg-zinc-700 text-white rounded caret-white focus:bg-lime-700 focus:ring-lime-700 selection:bg-lime-800`}
                                            value={second}
                                            name="second"
                                            maxLength={2}
                                            onChange={(e) => handleChangeTime(e)}
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
                                        className={` text-white ${setting.themeColor} active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
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
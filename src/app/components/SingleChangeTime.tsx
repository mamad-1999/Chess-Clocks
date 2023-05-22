"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useState } from "react";

export default function Modal() {
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const singleTimeState = useAppSelector(state => state.singleTime)
    const settingState = useAppSelector(state => state.setting)
    const dispatch = useAppDispatch()

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
                                        <input id="minute" type="text" className={`w-20 h-20 flex text-center text-5xl outline-none border-0 p-0 bg-zinc-700 text-white rounded caret-white focus:bg-lime-700 focus:ring-lime-700 selection:bg-lime-800`} maxLength={2} />
                                        <label className="text-stone-300 text-sm select-none" htmlFor="minute">Minute</label>
                                    </div>
                                    <span className="text-white text-clip text-5xl">:</span>
                                    <div className="flex flex-col justify-center gap-1">
                                        <input id="second" type="text" className={`w-20 h-20 flex text-center text-5xl outline-none border-0 p-0 bg-zinc-700 text-white rounded caret-white focus:bg-lime-700 focus:ring-lime-700 selection:bg-lime-800`} maxLength={2} />
                                        <label className="text-stone-300 text-sm select-none" htmlFor="second">Second</label>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex gap-3 items-center justify-end py-4 px-6 rounded-b mt-2 select-none">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        CANCEL
                                    </button>
                                    <button
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
"use client"

import { closeModalHandler } from "@/redux/features/modalSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { reset } from "@/redux/features/timerSlice";
import { getLocalStorageItem } from "../../../util/storage";
import { clearTime } from "../../../util/clearTime";
export default function Modal() {
    const modalState = useAppSelector(state => state.modal)
    const setting = useAppSelector(state => state.setting)
    const dispatch = useAppDispatch()

    const resetTimer = () => {
        clearTime()
        dispatch(reset(getLocalStorageItem("time")))
        dispatch(closeModalHandler())
    }
    return (
        <>
            {modalState.showModal ? (
                <>
                    <div
                        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${modalState.showModal && "bg-stone-500/70"}`}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="md:w-96 w-80 border-0 rounded-lg shadow-lg relative flex flex-col bg-zinc-800 outline-none focus:outline-none">

                                {/*body*/}
                                <div className="relative p-4 flex-auto">
                                    <p className="my-2 text-white text-lg leading-relaxed">
                                        Reset the clock?
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex gap-3 items-center justify-end py-4 px-6 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => dispatch(closeModalHandler())}
                                    >
                                        No
                                    </button>
                                    <button
                                        className={`${setting.themeColor} text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                                        type="button"
                                        onClick={resetTimer}
                                    >
                                        YES
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
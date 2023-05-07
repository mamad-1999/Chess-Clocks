"use client"

import { useEffect } from 'react'
import NumberBox from './NumberBox'
import ToolBar from './ToolBar'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { changeIsPlaying, currentUserSwitch, timeOneControl, timeTwoControl, timerIdControl } from '@/redux/features/timerSlice'

const Timer = () => {
    const state = useAppSelector((state) => state.timer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (state.timerId) {
            clearInterval(state.timerId);
        }
        if (state.isPlaying) {
            dispatch(timerIdControl(setInterval(() => {
                if (state.currentUser === 1) {
                    dispatch(timeOneControl())
                    if (state.timer1 <= 0) {
                        alert("Player 2 wins!");
                        clearInterval(state.timerId);
                    }
                } else {
                    dispatch(timeTwoControl())
                    if (state.timer2 <= 0) {
                        alert("Player 1 wins!");
                        clearInterval(state.timerId);
                    }
                }
            }, 1000)))
        }

        return () => clearInterval(state.timerId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.currentUser, state.isPlaying]);

    const changeCurrentUser = () => {
        (!state.isPlaying) ? dispatch(changeIsPlaying()) : null
        dispatch(currentUserSwitch())
    }

    return (
        <>
            <NumberBox time={state.timer1} onSwitch={changeCurrentUser} color={"bg-stone-500"} />
            <ToolBar />
            <NumberBox time={state.timer2} onSwitch={changeCurrentUser} color={"bg-lime-700"} />
        </>
    )
}

export default Timer
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
        if (state.timerId) clearInterval(state.timerId)

        if (state.isPlaying) dispatch(timerIdControl(setInterval(handelTimer, 1000)))

        return () => clearInterval(state.timerId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.currentUser, state.isPlaying, state.timer1, state.timer2]);

    const handelTimer = () => {
        if (state.currentUser === 1) {
            if (checkTime(1)) {
                console.log("Player 2 wins!");
                dispatch(changeIsPlaying())
                clearInterval(state.timerId);
                return
            }
            dispatch(timeOneControl())
        } else {
            if (checkTime(2)) {
                console.log("Player 1 wins!");
                dispatch(changeIsPlaying())
                clearInterval(state.timerId);
                return
            }
            dispatch(timeTwoControl())
        }
    }

    const checkTime = (n: number) => {
        const timerValue = n === 1 ? state.timer1 : state.timer2
        if (timerValue <= 0) {
            return true
        }
        return false
    }

    const changeCurrentUser = () => {
        (!state.isPlaying) ? dispatch(changeIsPlaying()) : null
        dispatch(currentUserSwitch())
    }

    return (
        <>
            <NumberBox
                timeNumber={1}
                current={state.currentUser}
                time={state.timer1}
                onSwitch={changeCurrentUser}
                color={state.currentUser === 1 ? "bg-lime-700" : "bg-stone-500"} />
            <ToolBar />
            <NumberBox
                timeNumber={2}
                current={state.currentUser}
                time={state.timer2}
                onSwitch={changeCurrentUser}
                color={state.currentUser === 2 ? "bg-lime-700" : "bg-stone-500"} />
        </>
    )
}

export default Timer
"use client"

import NumberBox from './NumberBox'
import ToolBar from './ToolBar'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import {
    startTime1,
    decrementPlayer1,
    decrementPlayer2,
    startTime2,
    stopTime1,
    stopTime2,
    endTimeHandler,
    setLostPlayer
} from '@/redux/features/timerSlice'
import { setLocalStorageItem } from '../util/storage'
import { clearTime } from '../util/clearTime'

const Timer = () => {
    // state and dispatch hook
    const state = useAppSelector(state => state.timer)
    const player1 = useAppSelector(state => state.timer.player1)
    const player2 = useAppSelector(state => state.timer.player2)
    const dispatch = useAppDispatch()

    const endPlaying = () => {
        clearTime()
        dispatch(stopTime1())
        dispatch(stopTime2())
        dispatch(endTimeHandler())
    }

    if (player1.time <= 0) {
        dispatch(setLostPlayer(1))
        endPlaying()
    } else if (player2.time <= 0) {
        dispatch(setLostPlayer(2))
        endPlaying()
    }

    const handelClickPlayer1 = () => {
        // check isRunning
        if (!player1.isPlaying && !player2.isPlaying) {
            handelTime1()
            // if timer 2 is running => stop and run timer 1
        } else if (player2.isPlaying) {
            dispatch(stopTime2())
            clearTime() // get intervalId from localStorage and clearInterval 
            handelTime1()
        }
    }

    const handelClickPlayer2 = () => {
        // check isRunning
        if (!player1.isPlaying && !player2.isPlaying) {
            handelTime2()
            // if timer 1 is running => stop and run timer 2
        } else if (player1.isPlaying) {
            dispatch(stopTime1())
            clearTime() // get intervalId from localStorage and clearInterval 
            handelTime2()
        }
    }

    const handelTime1 = () => {
        console.log(player1.time)

        dispatch(startTime1())
        const time = setInterval(() => {
            dispatch(decrementPlayer1(100))
        }, 100) // => 10 milliSecond

        setLocalStorageItem("interval", JSON.stringify(time))
    }

    const handelTime2 = () => {
        dispatch(startTime2())
        const time = setInterval(() => {
            dispatch(decrementPlayer2(10))
        }, 10) // => 10 milliSecond
        setLocalStorageItem("interval", JSON.stringify(time))
    }

    return (
        <>
            <NumberBox
                time={player1.time}
                click={handelClickPlayer1}
                playing={player1.isPlaying}
                color={player1.isPlaying ? "bg-lime-700" : state.whoLost === 1 ? "bg-red-500" : "bg-stone-500"} />
            <ToolBar />
            <NumberBox
                time={player2.time}
                click={handelClickPlayer2}
                playing={player2.isPlaying}
                color={player2.isPlaying ? "bg-lime-700" : state.whoLost === 2 ? "bg-red-500" : "bg-stone-500"} />
        </>
    )
}

export default Timer
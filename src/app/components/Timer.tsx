"use client"

import { useCallback, useEffect } from 'react'
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
    incrementMove1,
    incrementMove2,
    endTimeHandler,
    setLostPlayer,
    startTimerHandler
} from '@/redux/features/timerSlice'
import { getLocalStorageItem, setLocalStorageItem } from '../util/storage'
import { clearTime } from '../util/clearTime'
import { playSound } from '../util/playSoundClick'
import { playStatusOff, playStatusOn } from '@/redux/features/toolBarSlice'

const Timer = () => {
    // state and dispatch hook
    const state = useAppSelector(state => state.timer)
    const player1 = useAppSelector(state => state.timer.player1)
    const player2 = useAppSelector(state => state.timer.player2)
    const toolBarState = useAppSelector(state => state.toolBar)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (player1.time <= 0 || player2.time <= 0) {
            const player = player1.time <= 0 ? 1 : 2;
            dispatch(setLostPlayer(player))
            clearTime()
            dispatch(stopTime1())
            dispatch(stopTime2())
            dispatch(endTimeHandler())
        }
    }, [dispatch, player1, player2])

    const handleClickPlayer = useCallback((player: string, startTime: Function, decrementPlayer: Function, incrementMove: Function) => {
        // check time is end? and check sound is on? if answer is true play sound
        if (!state.endTime && toolBarState.soundStatus) playSound()
        // check isRunning
        if (!player1.isPlaying && !player2.isPlaying && !state.endTime) {
            handelTime(player, startTime, decrementPlayer, incrementMove)
        } else if ((player1.isPlaying || player2.isPlaying) && !state.endTime) {
            if (player1.isPlaying) {
                dispatch(stopTime1())
            } else {
                dispatch(stopTime2())
            }
            clearTime() // get intervalId from localStorage and clearInterval 
            handelTime(player, startTime, decrementPlayer, incrementMove)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, toolBarState, player1, player2, dispatch])

    const handelClickPlayer1 = () => handleClickPlayer('1', startTime1, decrementPlayer1, incrementMove1);
    const handelClickPlayer2 = () => handleClickPlayer('2', startTime2, decrementPlayer2, incrementMove2);

    const handelTime = useCallback((player: string, dispatchTime: Function, dispatchTimeFunc: Function, incrementMove: Function) => {
        dispatch(startTimerHandler())
        dispatch(incrementMove())
        dispatch(dispatchTime())
        dispatch(playStatusOn())
        setLocalStorageItem("lastPlay", player)
        const time = setInterval(() => {
            dispatch(dispatchTimeFunc(10))
        }, 10) // => 10 milliSecond
        setLocalStorageItem("interval", JSON.stringify(time))
    }, [dispatch])


    const handelPlayButton = () => {
        dispatch(playStatusOn());
        const lastPlay = String(getLocalStorageItem("lastPlay"));
        console.log(lastPlay);

        if (!state.startTime) {
            handelClickPlayer1();
            return;
        }

        lastPlay === "1" ? handelClickPlayer1() : handelClickPlayer2();
    }

    const handelPauseButton = () => {
        dispatch(playStatusOff())
        dispatch(stopTime1())
        dispatch(stopTime2())
        clearTime()
    }

    return (
        <>
            <NumberBox
                time={player1.time}
                click={handelClickPlayer1}
                playing={player1.isPlaying}
                moveCount={player1.move}
                mobileStyle={"rotate-180 md:rotate-0"}
                color={player1.isPlaying ? "bg-lime-700" : state.whoLost === 1 ? "bg-red-500" : "bg-stone-500"} />
            <ToolBar onPlay={handelPlayButton} onPause={handelPauseButton} />
            <NumberBox
                time={player2.time}
                click={handelClickPlayer2}
                playing={player2.isPlaying}
                moveCount={player2.move}
                color={player2.isPlaying ? "bg-lime-700" : state.whoLost === 2 ? "bg-red-500" : "bg-stone-500"} />
        </>
    )
}

export default Timer
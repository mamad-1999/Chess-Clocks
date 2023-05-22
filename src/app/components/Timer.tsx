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
import { showSingleTimeHandler, singleTimeChangePlayer } from '@/redux/features/singleTimeSlice'
import { getLocalStorageItem, setLocalStorageItem } from '../../../util/storage'
import { clearTime } from '../../../util/clearTime'
import { playStatusOff, playStatusOn } from '@/redux/features/toolBarSlice'
import { Howl } from 'howler'

const sound = new Howl({
    src: ["/clicksound.mp3"]
})

const Timer = () => {
    // state and dispatch hook
    const state = useAppSelector(state => state)
    const { timer, toolBar, setting } = state
    const { player1, player2 } = timer
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
        if (!timer.endTime && toolBar.soundStatus) sound.play()
        // check isRunning
        if (!player1.isPlaying && !player2.isPlaying && !timer.endTime) {
            handleTime(player, startTime, decrementPlayer, incrementMove)
        } else if ((player1.isPlaying || player2.isPlaying) && !timer.endTime) {
            if (player1.isPlaying) {
                dispatch(stopTime1())
            } else {
                dispatch(stopTime2())
            }
            clearTime() // get intervalId from localStorage and clearInterval 
            handleTime(player, startTime, decrementPlayer, incrementMove)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, toolBar, player1, player2, dispatch])

    const handleClickPlayer1 = () => handleClickPlayer('1', startTime1, decrementPlayer1, incrementMove1);
    const handleClickPlayer2 = () => handleClickPlayer('2', startTime2, decrementPlayer2, incrementMove2);

    const handleTime = useCallback((player: string, dispatchTime: Function, dispatchTimeFunc: Function, incrementMove: Function) => {
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


    const handlePlayButton = () => {
        dispatch(playStatusOn());
        const lastPlay = String(getLocalStorageItem("lastPlay"));
        console.log(lastPlay);

        if (!timer.startTime) {
            handleClickPlayer1();
            return;
        }

        lastPlay === "1" ? handleClickPlayer1() : handleClickPlayer2();
    }

    const handlePauseButton = () => {
        dispatch(playStatusOff())
        dispatch(stopTime1())
        dispatch(stopTime2())
        clearTime()
    }

    const handleShowSingleTime = (player: string) => {
        dispatch(showSingleTimeHandler())
        dispatch(singleTimeChangePlayer(player))
    }

    const changeTimer1 = () => handleShowSingleTime("1")
    const changeTimer2 = () => handleShowSingleTime("2")

    return (
        <>
            <NumberBox
                time={player1.time}
                click={handleClickPlayer1}
                changeTime={changeTimer1}
                playing={player1.isPlaying}
                moveCount={player1.move}
                mobileStyle={"rotate-180 md:rotate-0"}
                color={player1.isPlaying ? `${setting.themeColor}` : timer.whoLost === 1 ? "bg-red-500" : "bg-stone-500"} />
            <ToolBar onPlay={handlePlayButton} onPause={handlePauseButton} />
            <NumberBox
                time={player2.time}
                click={handleClickPlayer2}
                changeTime={changeTimer2}
                playing={player2.isPlaying}
                moveCount={player2.move}
                color={player2.isPlaying ? `${setting.themeColor}` : timer.whoLost === 2 ? "bg-red-500" : "bg-stone-500"} />
        </>
    )
}

export default Timer
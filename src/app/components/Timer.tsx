import React from 'react'
import NumberBox from './NumberBox'
import ToolBar from './ToolBar'

const Timer = () => {
    return (
        <>
            <NumberBox color={"bg-stone-500"} />
            <ToolBar />
            <NumberBox color={"bg-lime-700"} />
        </>
    )
}

export default Timer
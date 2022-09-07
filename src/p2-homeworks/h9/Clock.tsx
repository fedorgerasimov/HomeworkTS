import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>() //new Date() если без initial state, тогда нужно date?.toLocaleDateString
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => { // +setInterval
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date && date.toLocaleTimeString() // fix with date  //  date?.toLocaleTimeString
    const stringDate = date?.toLocaleDateString() // fix with date  // date && date.toLocaleDateString()

    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.clock}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>

                    {stringTime}

                    {show && (<div className={s.stringDate}>{stringDate}</div>)}

                    {/*  {show
                        ? (<div className={s.stringDate}>{stringDate}</div>)
                        : (<div></div>)
                    }*/}
                </div>
            </div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}
export default Clock

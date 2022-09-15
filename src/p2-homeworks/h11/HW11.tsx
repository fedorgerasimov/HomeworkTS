import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {

    const minValue = 0
    const maxValue = 100

    const [value1, setValue1] = useState(minValue)
    const [value2, setValue2] = useState(maxValue)

    const onChangeDoubleRange = ([value1, value2]: [number, number]) => {
        setValue1(value1)
        setValue2(value2)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.container}>
                <div className={s.value}>{value1}</div>
                <SuperRange
                    onChangeRange={setValue1}
                    onChangeRange2={setValue2}
                    value1={value1}
                    value2={value2}
                />
            </div>

            <div className={s.container}>
                <div className={s.value}>{value1}</div>
                <SuperDoubleRange
                    onChangeRange={onChangeDoubleRange}
                    value={[value1, value2]}
                />
                <div className={s.value2}>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11

import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Slider} from "@mui/material";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    onChangeRange2?: (value: number) => void
    value1?: number
    value2?: number
    minValue?: number
    maxValue?: number
    disabled?: boolean
};

const SuperRange: React.FC<SuperRangePropsType> = ({
        //type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        //onChange,
        //className,
        onChangeRange,
        onChangeRange2,
        value1,
        value2,
        minValue,
        maxValue,
        disabled,
        ...restProps// все остальные пропсы попадут в объект restProps
    }) => {
    const onChangeCallback = (event: Event, newValue: number | number[]) => {
        //onChange && onChange(event) // сохраняем старую функциональность
        //onChangeRange && onChangeRange(+event.currentTarget.value)

        onChangeRange && onChangeRange(newValue as number)
        if (value1 && value2 && value2 < value1 + 2) {
            if (value2 !== 100) {
                onChangeRange2 && onChangeRange2(value1)
            }
        }
    }

    //const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            {/* <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />*/}
            <Slider
                size="small"
                value={value1}
                onChange={onChangeCallback}
                min={minValue ? minValue : 0}
                max={maxValue ? maxValue : 100}
                disabled={disabled}
                track={false}
                sx={{
                    width: 300,
                    color: 'darkgoldenrod',
                    '& .MuiSlider-thumb': {
                        color: 'sienna',
                        borderRadius: '1px',
                        height: '15px',
                        width: '15px',
                    },
                    '& .MuiSlider-rail': {
                        height: '10px',
                        borderRadius: '2px'
                    },
                    '& .MuiSlider-track': {
                        height: '10px',
                        borderRadius: '2px'
                    },

                }}
            />
        </>
    )
}

export default SuperRange

import React from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    minValue?: number
    maxValue?: number
    disabled?: boolean
}

const SuperDoubleRange = ({onChangeRange, value, minValue, maxValue, disabled}: SuperDoubleRangePropsType) => {
    const onChangeCallback = (event: Event, newValue: number | number[], activeThumb: number) => {

        onChangeRange && onChangeRange(newValue as [number, number])
    }
    return (
        <>
            <Slider
                size="small"
                value={value}
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


export default SuperDoubleRange

import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options
        ? options.map((el, index) => ( // map options with key
            <label key={name + '-' + index} className={s.radio}>
                <input
                    className={s.radio_input}
                    type={'radio'}
                    name={name}
                    checked={el === value}
                    value={el}
                    onChange={onChangeCallback}
                    {...restProps}
                />
                <div className={s.radio_radio}>{/*  .radio_radio::after*/}</div>
                {el}
            </label>))
        : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio

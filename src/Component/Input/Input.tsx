import React, {ChangeEvent} from 'react';
import s from './Input.module.css'



type InputPropType = {
    error?: boolean
    title: string
    value: number
    inputType: string
    changeInputValue: (inputValue:number) => void

}

function Input(props:InputPropType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const eventNum = Number(e.currentTarget.value)
        props.changeInputValue(eventNum)

    }
    return (

        <label>
            <span className={s.inputTitle}>{props.title}</span>
            <input className={props.error ? s.inputError : ''} type={props.inputType} value={props.value} onChange={onChangeHandler}/>
        </label>

    )
}


export default Input;

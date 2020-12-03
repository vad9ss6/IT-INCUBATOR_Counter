import React from 'react';
import Button from "./Component/Button/Button";
import './App.css';
import Input from "./Component/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {
    changeStartValueAC,
    changeMaxValueAC,
    setCounterValueAC,
    StateType,
    incrementCounterAC, resetCounterAC
} from "./redux/counter-reducer";

function App() {
    type AppRootStateType = {
        counterState: StateType
    }
    const counterState = useSelector<AppRootStateType, StateType>(state => state.counterState)
    const dispatch = useDispatch()

    const changeInputStart = (value: number) => {
        const action = changeStartValueAC(value)
        dispatch(action)
    }
    const changeInputMax = (value: number) => {
        const action = changeMaxValueAC(value)
        dispatch(action)
    }
    const setValue = () => {
        const action = setCounterValueAC()
        dispatch(action)
    }
    const incValue = () => {
        const action = incrementCounterAC()
        dispatch(action)
    }
    const resetValue = () => {
        const action = resetCounterAC()
        dispatch(action)
    }

    return (
        <div className='app'>
            <div className='wrapper'>
                <div className='display'>
                    <div className='displayInput'>
                        <Input error={counterState.error}
                               title={'start value'}
                               value={counterState.changeStartValue}
                               inputType={'number'}
                               changeInputValue={changeInputStart}/>

                        <Input error={counterState.error}
                               title={'max value'}
                               value={counterState.changeMaxValue}
                               inputType={'number'}
                               changeInputValue={changeInputMax}/>
                    </div>
                </div>
                <div className='block-btn'>
                    <Button title={'set'} callBack={setValue} disable={counterState.setDisable}/>
                </div>
            </div>
            <div className='wrapper'>
                <div className={
                    counterState.counter.startValue === counterState.counter.maxValue
                        ? 'display red'
                        : 'display'}>
                    {counterState.counter.startValue}
                </div>
                <div className='block-btn'>
                    <Button title={'inc'}
                            callBack={incValue}
                            disable={counterState.counter.startValue === counterState.counter.maxValue ||
                            typeof counterState.counter.startValue === 'string'}/>
                    <Button title={'reset'}
                            callBack={resetValue}
                            disable={counterState.counter.startValue === counterState.changeStartValue ||
                            typeof counterState.counter.startValue === 'string'}/>
                </div>
            </div>
        </div>
    );
}

export default App;

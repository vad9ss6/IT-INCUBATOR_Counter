import React, {useState} from 'react';
import Display from "./Component/Display/Display";
import Button from "./Component/Button/Button";
import './App.css';
import Input from "./Component/Input/Input";

type stateType = {
    startValue: number
    maxValue: number
}

function App() {
    const store: stateType = {
        startValue: 0,
        maxValue: 0,
    }

    const [count, setCount] = useState<number>(0)

    const [state, setState] = useState<stateType>(store)
    const [countMax, setCountMax] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)




    const countInc = () => {
        let inc = count + 1
        setCount(inc)
    }
    const resetCount = () => {
        setCount(state.startValue)
    }

    const valueCheck = () => {
        if (state.startValue >= state.maxValue || state.startValue < 0) {
            setError(true)
        } else {
            setError(false)
        }
    }
    const setStartInputValue = (value: number) => {
        state.startValue = value
        setState({...state})
        valueCheck()
    }
    const setMaxInputValue = (value: number) => {
        state.maxValue = value
        setState({...state})
        valueCheck()
    }
    const applySetting = () => {
        setCount(state.startValue)
        setCountMax(state.maxValue)
    }

    return (
        <div className='app'>
            <div className='wrapper'>
                <div className='display'>
                    <div className='displayInput'>
                        <Input error={error} title={'start value'} value={state.startValue} inputType={'number'}
                               changeInputValue={setStartInputValue}/>
                        <Input error={error} title={'max value'} value={state.maxValue} inputType={'number'}
                               changeInputValue={setMaxInputValue}/>
                    </div>
                </div>
                <div className='block-btn'>
                    <Button title={'set'} callBack={applySetting} disable={error}/>
                </div>
            </div>
            <div className='wrapper'>
                <div className={count === countMax ? 'display red' : 'display'}>
                    {count}
                </div>
                <div className='block-btn'>
                    <Button title={'inc'} callBack={countInc} disable={count === countMax}/>
                    <Button title={'reset'} callBack={resetCount} disable={count === state.startValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;

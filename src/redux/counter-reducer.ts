type changeInputStartValue = {
    type: 'CHANGE-INPUT-START-VALUE'
    value: number
}
type changeInputMaxValue = {
    type: 'CHANGE-INPUT-MAX-VALUE'
    value: number
}
type setInputValue = {
    type: 'SET-INPUT-VALUE'
}
type incrementCounter = {
    type: 'INCREMENT-COUNTER'
}
type resetCounter = {
    type: 'RESET-COUNTER'
}

type actionType =
    | changeInputStartValue
    | setInputValue
    | changeInputMaxValue
    | incrementCounter
    | resetCounter

type counterType = {
    startValue: number | string
    maxValue: number
}
export type StateType = {
    counter: counterType
    changeStartValue: number
    changeMaxValue: number
    setDisable: boolean
    error: boolean
}
const initialState: StateType = {
    counter: {
        startValue: 0,
        maxValue: 0
    },
    changeStartValue: 0,
    changeMaxValue: 0,
    setDisable: true,
    error: false
}

export const counterReducer = (state: StateType = initialState, action: actionType) => {
    switch (action.type) {
        case 'CHANGE-INPUT-START-VALUE': {
            debugger
            return {
                ...state,
                counter: {...state.counter, startValue: 'set value please'},
                changeStartValue: action.value,
                setDisable: action.value > state.changeMaxValue ? true : false,
                error: action.value < 0 || action.value >= state.changeMaxValue  ? true : false
            }
        }
        case 'CHANGE-INPUT-MAX-VALUE': {
            return {
                ...state,
                counter: {...state.counter, startValue: 'set value please'},
                changeMaxValue: action.value,
                setDisable: action.value > state.changeStartValue ? false : true,
                error: action.value < 0 || action.value <= state.changeStartValue  ? true : false
            }
        }
        case 'SET-INPUT-VALUE': {
            return {
                ...state,
                counter: {...state.counter, startValue: state.changeStartValue, maxValue: state.changeMaxValue},
                setDisable: true
            }
        }
        case 'INCREMENT-COUNTER': {
            return {
                ...state,
                counter: {...state.counter, startValue: +state.counter.startValue + 1}
            }
        }
        case 'RESET-COUNTER': {
            return {
                ...state,
                counter: {...state.counter, startValue: state.counter.startValue = state.changeStartValue}
            }
        }
        default:
            return state
    }
}

export const changeStartValueAC = (value: number): changeInputStartValue => {
    return {type: 'CHANGE-INPUT-START-VALUE', value}
}
export const changeMaxValueAC = (value: number): changeInputMaxValue => {
    return {type: 'CHANGE-INPUT-MAX-VALUE', value}
}
export const setCounterValueAC = (): setInputValue => {
    return {type: 'SET-INPUT-VALUE'}
}
export const incrementCounterAC = (): incrementCounter => {
    return {type: 'INCREMENT-COUNTER'}
}
export const resetCounterAC = (): resetCounter => {
    return {type: 'RESET-COUNTER'}
}
import React from 'react';
import '../../App.css';
import Counter from "./Counter";


export type CounterType = {
    count?: number
    maxCount?: boolean

}

const  Display:React.FC<CounterType> = ({count,maxCount}) => {
    return (
        <Counter count={count} maxCount={maxCount}/>
    );
}

export default Display;


import React from "react";
import {CounterType} from "./Display";

const Counter: React.FC<CounterType> = ({count, maxCount}) => {
    return <div className={maxCount ? 'display red' : 'display'}>
        {count}
    </div>
}

export default Counter;
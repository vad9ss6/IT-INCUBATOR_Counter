import React from 'react';

type ButtonType = {
    title: string
    callBack: () => void
    disable: boolean
}

function Button(props: ButtonType) {
    return (
        <div>
           <button onClick={props.callBack} disabled={props.disable} className='btn' >{props.title}</button>
        </div>
    );
}

export default Button;

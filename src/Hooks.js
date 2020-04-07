import React, { useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export const aFunc = ()=>{};
export default function Hooks(props) {
    const {name} = props;
    let [clicks, setClicks] = useState(0);
    let [clicks2, setClicks2] = useState(0);

    const doSomething = function (event) {
        console.log(event.currentTarget.getAttribute('data-something'));
        setClicks(clicks + 2);
        setClicks2(clicks2 + 4)
    }
    return (
        <React.Fragment>
            <p>Hi, I'm {name}</p>
            <p>click count:{clicks}, {clicks2}</p>
            <button onClick={doSomething} data-something="Default">
                Default</button>
            <Skeleton variant="circle" width={40} height={40} />
            <Skeleton variant="text" />
            <Skeleton variant="rect" width={210} height={118} />
        </React.Fragment>

    );
}

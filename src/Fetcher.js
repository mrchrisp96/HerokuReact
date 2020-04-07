import React, { useState, useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';


export default function Fetcher(props) {
    const { classes, url } = props;
    let [clicks, setClicks] = useState(0);
    const [response, setResponse] = useState(null);

    useEffect( ()=> {
      const  fetchData= async()=>{
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      }
      fetchData();
    }, []);

    const doSomething = function (event) {
        console.log(event.currentTarget.getAttribute('data-something'));
        setClicks(clicks + 1);
    }
    return (
        <React.Fragment>
            <p>click count:{clicks}</p>
            <button onClick={doSomething} data-something="Default">
                Default</button>
            <p>{response && JSON.stringify(response) || 'waiting' }</p>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
        </React.Fragment>

    );
}

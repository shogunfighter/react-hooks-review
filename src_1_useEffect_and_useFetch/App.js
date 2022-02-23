import './App.css';

import {useFetch} from "./useFetch";
import {useEffect, useState} from "react";
// import {Hello} from "./Hello";

// const onMouseMove = e => { console.log(e); };

const App = () => {
    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")) || 0);
    // const [showHello, setShowHello] = useState(true);

    const {data} = useFetch(`http://numbersapi.com/${count}/trivia`);

    useEffect(() => {
        JSON.stringify(localStorage.setItem("count", count));
    }, [count]);

    return (
        <div>
            <div>{!data ? '...loading' : data}</div>
            <div>count: {count}</div>
            <button onClick={() => setCount(c => (c > 0) ? c - 1 : 0)}>-</button>
            <button onClick={() => setCount(c => c + 1)}>+</button>
            {/*<br/>*/}
            {/*<br/>*/}
            {/*{showHello && <Hello />}*/}
            {/*<button onClick={() => setShowHello(!showHello)}>Toggle</button>*/}
        </div>
    );
};

export default App;

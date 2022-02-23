import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useFetch} from "./useFetch";
import {useMeasure} from "./useMeasure";

export const Hello = () => {

    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")) || 0);
    const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    const [rect, setRect] = useState({});
    const ref0 = useRef();
    useLayoutEffect(() => {
        setRect(ref0.current.getBoundingClientRect());
    }, [data]);

    const [rect1, ref1] = useMeasure([data]);

    return (
        <div>
            <div style={{display:"flex"}}>
                <div ref={ref0}>{!data ? "loading..." : data}</div>
            </div>
            <br/>
            <pre>{JSON.stringify(rect, null, 2)}</pre>

            <br/><br/><br/>
            <div style={{display:"flex"}}>
                <div ref={ref1}>{!data ? "loading..." : data}</div>
            </div>
            <br/>
            <pre>{JSON.stringify(rect1, null, 2)}</pre>

            <br/>

            <div>count: {count}</div>
            <button onClick={() => setCount(c => c + 1)}>increment</button>
        </div>
    );
};

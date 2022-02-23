import {useEffect, useState} from "react";
import {useFetch} from "./useFetch";

export const Hello = () => {

    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")) || 0);
    const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    // useEffect(() => {
    //     console.log("[Hello] render");
    //
    //     return () => {
    //         console.log("[Hello] cleanup");
    //     }
    // }, []);

    return (
        <div>
            <div>{!data ? "loading..." : data}</div>
            <div>count: {count}</div>
            <button onClick={() => setCount(c => c + 1)}>increment</button>
        </div>
    );
};

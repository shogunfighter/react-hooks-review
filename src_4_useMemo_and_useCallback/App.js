import React, {/*useCallback,*/ useMemo, useState} from "react";
import {useFetch} from "./useFetch";

// Put outside the class so this function don't get recreated.
// Or useCallback method: see below
const computeLongestWord = (arr) => {
    if (!arr) return [];

    console.log("computing longest word...");

    let longestWord = "";

    arr.forEach(sentence => {
        sentence.split(" ").forEach(word => {
            if (word.length > longestWord) longestWord = word.length;
        })
    });

    return longestWord;
};

const App = () => {
    const [count, setCount] = useState(0);
    const {data} = useFetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json");

    // NORMALLY THIS IS NOT RECOMMENDED
    // const computeLongestWord = useCallback((arr) => {
    //     if (!arr) return [];
    //
    //     console.log("computing longest word...");
    //
    //     let longestWord = "";
    //
    //     arr.forEach(sentence => {
    //         sentence.split(" ").forEach(word => {
    //             if (word.length > longestWord) longestWord = word.length;
    //         })
    //     });
    //
    //     return longestWord;
    // }, []);


    const longestWord = useMemo(() => computeLongestWord(data), [data, computeLongestWord]);





    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => setCount(c => c + 1)}>increment</button>
            {/*<div>{computeLongestWord(data)}</div>*/}
            <div>{longestWord}</div>
        </div>
    );
};

export default App;
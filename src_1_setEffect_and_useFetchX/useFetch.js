import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({data: null, loading: false});

    useEffect(() => {
        setState({...state, loading: true});

        const f = async () => {
            let result = await fetch(url);
            let text = await result.text();
            // console.log("test result:", result);
            // console.log("test text:", text);

            setState({data: text, loading: false});
        };

        f();

    }, [url]);

    return state;
};



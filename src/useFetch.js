import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({data: null, loading: false});

    useEffect(() => {
        setState(state => {
            return {...state, loading: true};
        });

        const fn = async () => {
            let result = await fetch(url);
            // console.log("result:", result);

            let text = await result.text();
            // console.log("text:", text);

            setState({data: text, loading: false});
        };

        fn();

    }, [url]);

    return state;
};



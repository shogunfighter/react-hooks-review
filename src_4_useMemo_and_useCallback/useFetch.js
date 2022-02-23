import {useEffect, useState, useRef} from "react";

export const useFetch = (url) => {
    const isCurrent = useRef(true);
    const [state, setState] = useState({data: null, loading: true});

    useEffect(() => {
        return () => {
            // called when the component is going to unmount
            isCurrent.current = false;
        };
    },[]);

    useEffect(() => {
        // setState(state => { return {...state, loading: true}; });
        setState(state => ({data: state.data, loading: true}));

        const fn = async () => {
            let result = await fetch(url);
            // console.log("result:", result);

            // let value = await result.text(); // when dealing with text
            let value = await result.json(); // when dealing with json
            // console.log("text:", text);

            // // Add some delay so we can control to toggle and unmount Hello component
            // setTimeout(() => {
            //     if (isCurrent.current) setState({data: value, loading: false});
            // }, 2000);

            // No delay
            setState({data: value, loading: false});
        };

        fn();

    }, [url, setState]);

    return state;
};



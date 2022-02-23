// custom hook - useRef and useLayoutEffect

import {useRef, useLayoutEffect, useState} from "react";

export const useMeasure = (deps) => {
    const [rect, setRect] = useState({});
    const ref = useRef();

    useLayoutEffect(() => {
        setRect(ref.current.getBoundingClientRect());
    }, deps);

    return [rect, ref];
};
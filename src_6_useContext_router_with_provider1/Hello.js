import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Hello = React.memo(({ increment }) => {
    useCountRenders(); // this is just to console the number of renders

    return <button onClick={() => increment(5)}>hello</button>;
});
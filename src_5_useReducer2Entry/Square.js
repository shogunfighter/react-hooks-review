import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Square = React.memo(({ n, increment }) => {
    useCountRenders(); // this is just to console the number of renders

    return <button onClick={() => increment(n)}>{n}</button>;
});
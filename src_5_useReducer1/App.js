import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "decrement": return state - action.payload;
        case "increment": return state + action.payload;
        default: return state;
    }
};

const App = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => dispatch({type: "decrement", payload: 2})}>decrement</button>
            <button onClick={() => dispatch({type: "increment", payload: 2})}>increment</button>
        </div>
    );
};

export default App;
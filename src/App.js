import {useReducer, useState} from "react";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {entry: action.payload, completed: false}
                ]
            };
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(
                    (t, idx) => (action.payload === idx)
                        ? {...t, completed: !t.completed}
                        : t
                )
            };
    }
};

const App = () => {
    const [{todos}, dispatch] = useReducer(reducer, {todos: []});
    const [text, setText] = useState("");

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({type: ADD_TODO, payload: text});
                setText("");
            }}>entry: <input value={text} onChange={e => setText(e.target.value)}/></form>

            <br/>

            <div>
                <span>Entries:</span>
                <br/>
                {todos.map((t, idx) => {
                    return <div
                        key={idx}
                        onClick={() => dispatch({type: TOGGLE_TODO, payload: idx})}
                        style={{textDecoration: t.completed ? "line-through" : ""}}
                    >{t.entry}</div>
                })}
            </div>

        </div>
    );
};

export default App;
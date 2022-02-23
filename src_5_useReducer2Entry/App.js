import {useReducer, useState} from "react";
import TodosEntry from "./TodosEntry";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            // payload => entry
            return {
                todos: [
                    ...state.todos,
                    {entry: action.payload, completed: false}
                ],
                todosCount: state.todosCount + 1
            };
        case TOGGLE_TODO:
            // payload => idx
            return {
                todos: state.todos.map(
                    (t, idx) => (action.payload === idx)
                        ? {...t, completed: !t.completed}
                        : t
                ),
                todosCount: state.todosCount
            };
        case DELETE_TODO:
            // payload => idx
            return {
                todos: state.todos.filter((t, idx) => idx !== action.payload),
                todosCount: state.todosCount - 1
            };
    }
};

const App = () => {
    const [{todos, todosCount}, dispatch] = useReducer(reducer, {
        todos: [],
        todosCount: 0
    });
    const [text, setText] = useState("");

    return (
        <div>
            <button>Dummy Button</button>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({type: ADD_TODO, payload: text});
                setText("");
            }}>entry: <input value={text} onChange={e => setText(e.target.value)}/></form>
            <br/>
            <div>
                <span>Count: {todosCount}</span>
                <br/>
                <span>Entries:</span>
                <br/>
                <div>{todos.map((todo, id) => <TodosEntry key={id} id={id} todo={todo} dispatch={dispatch}/>)}</div>

                {/*{todos.map((t, id) => <div key={id}>*/}
                {/*    <span onClick={() => dispatch({type: TOGGLE_TODO, payload: id})}*/}
                {/*          style={{textDecoration: t.completed ? "line-through" : ""}}>{t.entry}</span>*/}
                {/*    <button onClick={() => dispatch({type: DELETE_TODO, payload: id})}>DELETE</button>*/}
                {/*</div>)}*/}
            </div>
        </div>
    );
};

export default App;
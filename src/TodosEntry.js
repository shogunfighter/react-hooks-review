import './TodosEntry.scss';

const TodosEntry = ({id, todo, dispatch}) => {
    return <div className="TodosEntry">
        <button onClick={() => dispatch({type: "DELETE_TODO", payload: id})}>DELETE</button>
        <span onClick={() => dispatch({type: "TOGGLE_TODO", payload: id})}
              style={{textDecoration: todo.completed ? "line-through" : ""}}>{todo.entry}</span>
    </div>;
};

export default TodosEntry;
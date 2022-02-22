import {useState} from "react";
import './App.css';

const App = () => {

    // TYPE 1

    // const [{count1, count2}, setCount] = useState({count1: 10, count2: 20});
    //
    // return (
    //     <div className="App">
    //         <button onClick={() => setCount(currentState => ({...currentState, count1: currentState.count1 + 1}))}>+</button>
    //         <p>count1: {count1}</p>
    //
    //         <button onClick={() => setCount(currentState => ({...currentState, count2: currentState.count2 + 1}))}>+</button>
    //         <p>count2: {count2}</p>
    //     </div>
    // );

    // OR

    // TYPE 2
    
    const [count1, setCount1] = useState(10);
    const [count2, setCount2] = useState(20);

    return (
        <div className="App">
            <button onClick={() => setCount1(currentState => currentState + 1)}>+</button>
            <p>count1: {count1}</p>

            <button onClick={() => setCount2(currentState => currentState + 1)}>+</button>
            <p>count2: {count2}</p>
        </div>
    );
};

export default App;

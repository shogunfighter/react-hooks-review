import './App.css';

import {Hello} from "./Hello";
import {useState, useEffect} from "react";

const onMouseMove = e => { console.log(e); };

const App = () => {
    const [showHello, setShowHello] = useState(true);

    useEffect(() => {
        console.log("[App] render");

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            console.log("[Hello] cleanup");
        }
    }, []);

    return (
        <div>
            {showHello && <Hello />}
            <button onClick={() => setShowHello(!showHello)}>Toggle</button>
        </div>
    );
};

export default App;

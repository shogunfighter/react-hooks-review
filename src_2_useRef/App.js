import './App.css';

import React, {useRef, useState} from "react";
import {useForm} from "./useForm";
import {Hello} from "./Hello";

// const onMouseMove = e => { console.log(e); };

const App = () => {
    const [values, handleChange] = useForm({email: '', password: '', firstName: ''});
    const inputEmailRef = useRef();
    const inputFirstNameRef = useRef();
    const inputPasswordRef = useRef();
    const hello = useRef(() => console.log("hello"));

    const [showHello, setShowHello] = useState(true);

    return (
        <div>
            <>
                <button onClick={() => setShowHello(!showHello)}>toggle</button>
                {showHello && <Hello />}
                <input ref={inputEmailRef} name="email" value={values.email} onChange={handleChange} />
                <input ref={inputFirstNameRef} name="firstName" placeholder="first name" value={values.firstName} onChange={handleChange} />
                <input ref={inputPasswordRef} type="password" name="password" value={values.password} onChange={handleChange} />
                <button
                    onClick={() => {
                        console.log("inputEmailRef.current:", inputEmailRef.current);
                        console.log("inputFirstNameRef.current:", inputFirstNameRef.current);
                        console.log("inputPasswordRef.current:", inputPasswordRef.current);
                        inputEmailRef.current.focus();
                        hello.current();
                    }}
                >focus email field</button>
            </>
        </div>
    );
};

export default App;

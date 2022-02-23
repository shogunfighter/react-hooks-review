import './App.css';

// import {useState} from "react";
//
// const App = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     return (
//         <div>
//             <label name="lblEmail">Email:</label>
//             <br />
//             <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
//             <br />
//             <br />
//             <label name="lblPassword">Password:</label>
//             <br />
//             <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
//         </div>
//     );
// };

// OR

import {useForm} from "./useForm";

const App = () => {
    const [values, handleChange] = useForm({email: '', password: ''});
    return (
        <div>
            <label name="lblEmail">Email:</label>
            <br />
            <input name="email" type="email" value={values.email} onChange={handleChange}/>
            <br />
            <br />
            <label name="lblPassword">Password:</label>
            <br />
            <input name="password" type="password" value={values.password} onChange={handleChange}/>
        </div>
    );
};

export default App;

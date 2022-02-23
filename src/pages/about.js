import {useContext} from "react";
import {UserContext} from "../UserContext";

const generateRandom = (n) => {
    return (Math.ceil(Math.random() * Math.pow(10, n)));
};

const About = () => {
    // const msg = useContext(UserContext);
    const {value, setValue} = useContext(UserContext);
    return (
        <div>
            <h2>About</h2>
            <div>{value}</div>
            <button onClick={() => setValue("Hey Random: " + (generateRandom(3)))}>Change value</button>
        </div>
    );
};

export default About;
import {useContext} from "react";
import {UserContext} from "../UserContext";

const Index = () => {
    const {value} = useContext(UserContext);

    return (
        <div>
            <h2>Index</h2>
            <div>{value}</div>
        </div>
    )
};
export default Index;
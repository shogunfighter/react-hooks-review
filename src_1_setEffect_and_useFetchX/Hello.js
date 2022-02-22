import {useEffect} from "react";

export const Hello = () => {
    useEffect(() => {
        console.log("[Hello] render");

        return () => {
            console.log("[Hello] cleanup");
        }
    }, []);

    return <div>Hello</div>;
};

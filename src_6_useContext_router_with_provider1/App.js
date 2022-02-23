import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/about";
import {UserContext} from "./UserContext";

const AppRouter = () => {
    const [value, setValue] = useState("Hello from context");

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="about">About</Link>
                </nav>
            </div>
            <UserContext.Provider value={{value, setValue}}>
                <Routes>
                    <Route path="/" element={<Index />}/>
                    <Route path="/about/" element={<About />}/>
                </Routes>
            </UserContext.Provider>
        </Router>
    )
};

export default AppRouter;
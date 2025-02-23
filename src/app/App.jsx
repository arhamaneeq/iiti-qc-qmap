import React from "react";
import Nav from "./NavScreen"

const App = () => {

    const pages = [
        {
            "title": "Classical",
            "desc": "Use the Classical A* to navigate IIT Indore."
        }, {
            "title": "Quantum",
            "desc": "Use the Quantum A* to navigate IIT Indore."
        }, {
            "title": "About",
            "desc": "Learn about the Maths & Programming used to Make this Work"
        }
    ]

    return (
        <>
            <Nav options={pages} />
        </>
    );
};

export default App;
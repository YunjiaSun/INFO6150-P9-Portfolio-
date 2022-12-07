import React, {useState} from "react";
import Home from "./PortfolioContainer/Home/Home";
import Projects from "./PortfolioContainer/Projects/Projects";
import Education from "./PortfolioContainer/AboutMe/Education";
import Work from "./PortfolioContainer/AboutMe/Work";
import "./App.css";

function App() {
    const [page, setPage] = useState("Home")

    const pageHelper = (event,page) => {
        setPage(page);
        // console.log("hello")
    }

    return (
        <>
            <div className="navbar">
                <button onClick={(e) => pageHelper(e,"Home")}>Home</button>
                <button onClick={(e) => pageHelper(e,"Projects")}>Projects</button>
                <button onClick={(e) => pageHelper(e,"Education")}>Education</button>
                <button onClick={(e) => pageHelper(e,"Work")}>Work</button>
            </div>

            <div className="App">
                {(page === "Home") && <Home />}
                {(page === "Projects") && <Projects />}
                {(page === "Education") && <Education />}
                {(page === "Work") && <Work />}
            </div>

        </>

    );
}

export default App;

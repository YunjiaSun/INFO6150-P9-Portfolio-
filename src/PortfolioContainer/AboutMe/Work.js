import React from "react";
import works from "./json/Work.json"
import "./Work.css"

function Work() {
    return <>
        {
            works.map((work,index) => (
                <div className="work" key={index}>
                    <h4>{work.name} </h4>
                    <h5>{work.location}</h5>
                    <h5>{work.position}</h5>
                    <h5>{work["date-range"]}</h5>
                    <h5>{work.project}</h5>
                </div>
            ))
        }
    </>
}

export default Work;
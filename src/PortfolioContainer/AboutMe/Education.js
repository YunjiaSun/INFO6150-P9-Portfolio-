import React from "react";
import education from "./json/Education.json";
import "./Education.css"


function Education() {
    return <>
        {
            education.map((education,index) => (
               <div className="education" key={index}>
                   <h3>{education.name} </h3>
                   <h5>{education.degree}</h5>
                   <h5>{education.major}</h5>
                   <h5>{education["date-range"]}</h5>
                   <h5>{education.course}</h5>
               </div>
            ))
        }
    </>
}

export default Education;
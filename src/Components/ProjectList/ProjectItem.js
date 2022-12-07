import React from "react";

function ProjectItem({ image, name, overview, skills,stack,stackInfo1,stackInfo2,gitLink,git }) {
  return (
    <>
      <div className="projectItem">
        <div style={{ backgroundImage: `url(${image})` }} className="image" />
        <div className="info">
          <h1 className="name">{name}</h1>
          <h1 className="skills">{skills}</h1>
          <h1 className="overview">{overview}</h1>
          <h1 className="stack">{stack}</h1>
          <h1 className="stackInfo1">{stackInfo1}</h1>
          <h1 className="stackInfo2">{stackInfo2}</h1>
          <h1 className="git">{git}</h1>
          <h1 className="gitLink">{gitLink}</h1>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;

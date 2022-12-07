import React from "react";
import ProjectItem from "../../Components/ProjectList/ProjectItem";
import project1 from "../../Components/image/library.jpeg";
import project2 from "../../Components/image/employee.jpeg";
import project3 from "../../Components/image/movie.jpeg";
import project4 from "../../Components/image/COVID-19.jpeg";
import project5 from "../../Components/image/game.jpeg";
import project6 from "../../Components/image/data.jpeg";
import "./Projects.css";

//display ProjectList-each projectItem
function Projects() {
  return (
    <div className="projects">
      <div className="projectList">
        <ProjectItem
          name="Library Management Web"
          image={project1}
          overview="Developed library web pages with Django and implement librarian and user management functions."
          skills="Skills: Django/Python "
          stack="Stack:"
          stackInfo1="Implemented RESTful API endpoints to let users manage book information and status"
          stackInfo2="Created flow control when using asynchronous operations and querying the site's database using Mongoose
          ODM"
        />
        <ProjectItem
          name="Employee Management Web"
          image={project2}
          overview="Develop employee management system with SpringBoot and realize CRUD function"
          skills="Skills: SpringBoot/Java/React "
          stack="Stack:"
          stackInfo1="Implemented front-end UI design with HTML5, Tailwind CSS, and React.js"
          stackInfo2="Build RESTful API with Spring Boot and MySQL to handle HTTP requests and responses, created CRUD
          operations to fetch data with queries"
        />
        <ProjectItem
          name="Movie Application"
          image={project3}
          overview="Developed movie website allows users to view the movie information and search the movie"
          skills="Skills: HTML/CSS/JavaScript "
          stack="Stack:"
          stackInfo1="Implemented front-end UI design with HTML5, CSS, and React.js"
          stackInfo2="Implement a third-party API endpoint to allow users to query and browse movie information"
        />
        <ProjectItem
          name="Hospital On-Wheels System"
          image={project4}
          overview="Developed a system in Java for the management of infectious disease chains within multiple communities"
          skills="Skills: Java "
          stack="Stack:"
          stackInfo1="Structured with 30+ classes and conducted continuous user interaction services in various locations"
          stackInfo2="Implemented API conducted multiple functions: helping identify and display
          patients who may have intentionally infected others"
        />
        <ProjectItem
          name="Number Guessing Game"
          image={project5}
          overview="Implement a guessing number game, allowing users to guess the number according to the prompt"
          skills="Skills: HTML/CSS/JavaScript "
          stack="Stack:"
          stackInfo1="Implemented front-end UI design with HTML5, CSS, and Javascript"
          stackInfo2="Implemented API to achieve user input, according to the prompt to guess the number of interactive operation"
        />
        <ProjectItem
          name="Data Visualization Analysis"
          image={project6}
          overview="Provides water quality analysis reports for two water stations in California."
          skills="Skills: Python/Pandas/Numpy "
          stack="Stack:"
          stackInfo1="Led a team to visually analyze and research water quality data from two California water stations (H.O. Banks
          Headworks & Check 41) using NumPy & Pandas"
          stackInfo2="Maintained and cleaned the raw data (4 million rows)"
        />
      </div>
    </div>
  );
}

export default Projects;

import React from "react";
import Typical from "react-typical";
import "./Home.css";
import { useState } from "react";

const Home = () => {

  // const [Mode, setLightMode] = useState("");
  //
  // const lightModeHelper = () => {
  //   setLightMode(Mode === "" ? "lightModeActive" : "");
  //   console.log("hello");
  // };

  return (
    <div className='profile-box'>
      <div className='profile-parent'>
        <div className="profile-contents">
          <div className="profile-contents-me">
            <span className="text"> Hello, I'm Yunjia Sun</span>
            <span className="icon">
              <span className="linkedIn">
                <a href="https://www.linkedin.com/in/yunjiasun/">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </span>
              <span className="Git">
                <a href="https://github.com/YunjiaSun">
                  <i className="fa fa-github-square"></i>
                </a>
              </span>
            </span>
          </div>
          <div className="profile-contents-role">
            <span className="role-text">
              <p>
                <Typical
                  steps={[
                    "Full Stack Developer 💻 ",
                    1500,
                    "Web Developer 🌐",
                    1500,
                    "Problem-Solver 📈",
                    1500,
                  ]}
                  loop={Infinity}
                />
              </p>
              <span className="profile-contents-slogan">
                <p>
                  " Passion of building all kinds of applictions of front-end
                  and back-end."
                </p>
              </span>
            </span>
          </div>
        </div>
        <div className="profile-photo">
          <div className="photo-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

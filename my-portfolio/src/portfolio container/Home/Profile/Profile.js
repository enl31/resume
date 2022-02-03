import React from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/atieh.amini">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://myaccount.google.com/profile">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://github.com/attiehamiinii/attiehamiinii.git">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlited-text">ATIEH</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev ",
                    3000,
                    "Frontend Developer",
                    3000,
                    "React/Redux Developer",
                    3000,
                    "Designer",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I design and build applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="resume2022.pdf " download="atieh amini.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

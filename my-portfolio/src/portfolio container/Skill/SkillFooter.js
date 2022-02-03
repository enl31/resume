import React from "react";

import "./SkillFooter.css";
export default function SkillFooter() {
  return (
    <div className="skill__footer">
      <div className="skill__cotainer">
        <div className="skill__row">
          <div className="col-10">
            <div className="skill-section-icon">
              <div className="icon-program"></div>
              <p className="icon-user">
                <i className="fa fa-users"></i>
                <h4>User</h4>
              </p>
              <p className="icon-user">
                <i className="fa fa-code"></i>

                <h4>Web Dev</h4>
              </p>
              <p className="icon-user">
                <i className="fa fa-music"></i>
                <h4>Music</h4>
              </p>
              <p className="icon-user">
                <i className="fa fa-heartbeat"></i>
                <h4>Sport</h4>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*eslint-disable*/
import React from "react";
import "./card.css";

const Card = ({ pic, firstName, email, company, skill, grades }) => {
  return (
    <>
      {
        <div>
          {
            <div className="chart">
              <img className="img-1" src={pic}></img>
              <p className="title-name">{firstName}</p>
              <div className="discrib">
                <p>Email : {email}</p>
                <p> Company : {company}</p>
                <p>Skill : {skill}</p>
                <p>
                  Avrage :{""}
                  {grades.reduce((sum, curr) => sum + Number(curr), 0) /
                    grades.length}
                </p>
              </div>
            </div>
          }
        </div>
      }
    </>
  );
};

export default Card;

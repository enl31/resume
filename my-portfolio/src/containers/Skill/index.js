import React from 'react';
import './styles.css';

const Skill = () => (
  <div className="skill__me">
    <div className="cotainer">
      <div className="row">
        <div className="col-md-6">
          <div className="section-title">
            <span>i'm expert on</span>
            <h2 className="h2">
              Let's Work Together<span></span>
            </h2>
            <button className="btn primary-btn1">
              {''}
              Hire Me{' '}
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">
            <h3 className="progress-title">HTML5 - CSS - JavaScript</h3>
            <div className="progress orange">
              <div className="progress-bar" style={{ width: '90%', backgroundColor: '#fe3b3b' }}>
                <div className="progress-value">90%</div>
              </div>
            </div>
            <h3 className="progress-title">React - Redux</h3>
            <div className="progress blue">
              <div className="progress-bar" style={{ width: '70%', backgroundColor: '#1a4966' }}>
                <div className="progress-value">70%</div>
              </div>
            </div>
            <h3 className="progress-title">Bootstrap - TypeScript</h3>
            <div className="progress green">
              <div className="progress-bar" style={{ width: '50%', backgroundColor: '#41b1b4' }}>
                <div className="progress-value">50%</div>
              </div>
            </div>
            <h3 className="progress-title">Photoshop - Illustrator</h3>
            <div className="progress purple">
              <div className="progress-bar" style={{ width: '85%', backgroundColor: '#7f5888' }}>
                <div className="progress-value">85%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skill;

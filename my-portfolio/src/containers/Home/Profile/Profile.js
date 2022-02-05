import React from 'react';
import Typical from 'react-typical';
import './styles.css';

const Profile = () => (
  <div className="profile-container">
    <div className="profile-parent">
      <div className="profile-details">
        <div className="colz">
          <div className="colz-icon">
            {[
              { url: 'https://www.facebook.com/atieh.amini', style: 'fa-facebook-square' },
              { url: 'https://myaccount.google.com/profile', style: 'fa-google-plus-square' },
              { url: 'https://github.com/attiehamiinii/attiehamiinii.git', style: 'fa-github' },
            ].map(({ url, style }) => (
              <a href={url}>
                <i className={`fa ${style}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            {/* TODO: use markdown for decoration */}
            Hello, I'm <span className="highlited-text">ATIEH</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            {''}
            <h1>
              {''}
              <Typical
                loop={Infinity}
                steps={[
                  'Ethusiastic Dev ',
                  3000,
                  'Frontend Developer',
                  3000,
                  'React/Redux Developer',
                  3000,
                  'Designer',
                  3000,
                ]}
              />
            </h1>
            {/* TODO: implement translation mechanism */}
            <span className="profile-role-tagline">
              I design and build applications with front and back end operations.
            </span>
          </span>
        </div>
        <div className="profile-options">
          <button className="btn primary-btn">Hire Me</button>
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

export default Profile;

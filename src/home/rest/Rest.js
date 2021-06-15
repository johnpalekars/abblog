import React from 'react'
import "./Rest.css";

const Rest = () => {
    return (
      <div className="padAll">
        <div className="uk-container">
          <h1 className="uk-heading-line uk-heading-medium">
            <span>Skills</span>
          </h1>

          <div
            className="uk-grid-match uk-child-width-expand@s uk-text-center"
            data-uk-grid
            data-uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"
          >
            <div className="uk-width-1-6">
              <div className="uk-card uk-card-default uk-card-hover">
                <div className="uk-card-media-top">
                  <img
                    className="iconjs"
                    src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png"
                    alt=""
                  />
                </div>
                <div className="uk-card-body">Javascript</div>
              </div>
            </div>
            <div className="uk-width-1-6">
              <div className="uk-card uk-card-default uk-card-hover">
                <div className="uk-card-media-top">
                  <img
                    className="icon"
                    src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/python-icon.png"
                    alt=""
                  />
                </div>
                <div className="uk-card-body">Python</div>
              </div>
            </div>
            <div className="uk-width-1-6">
              <div className=" uk-card-default uk-card uk-card-hover">
                <div className="uk-card-media-top">
                  <img
                    className="iconReact"
                    src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg-300x212.png"
                    alt=""
                  />
                </div>
                <div className="uk-card-body">React</div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-container ">
          <h1 className="uk-heading-line uk-heading-medium">
            <span>Experience</span>
          </h1>
          <div
            className="uk-grid-match uk-child-width-expand@s uk-text-center"
            data-uk-grid
            data-uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"
          >
            <div className="uk-width-1-3">
              <div className="uk-card uk-card-default uk-card-hover">
                <div className="uk-card-media-top">
                  <img
                    className=""
                    src="https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png"
                    alt=""
                  />
                </div>
                <div className="uk-card-title">Software Analyst</div>
                <div className="uk-card-body">Capgemini india</div>
              </div>
            </div>
            <div className="uk-width-1-3">
              <div className="uk-card uk-card-default uk-card-hover">
                <div className="uk-card-media-top">
                  <img
                    className="complogo"
                    src="https://iarianatech.com/wp-content/uploads/2019/08/ariana-5.png"
                    alt=""
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
                <div className="uk-card-title">Devepement Intern</div>
                <div className="uk-card-body">Iariana tech</div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-container">
          <h1 className="uk-heading-line uk-heading-medium">
            <span>Education</span>
          </h1>
          <hr class="uk-divider-icon" />

          <div className="uk-container">
            <div class="uk-heading-bullet uk-card-title">
              BE In Computer Science
            </div>
            </div>
          <hr />
          <div className="uk-container ">
            <div class="uk-heading-bullet uk-card-title">
              Diploma in Computer Science
            </div>
          </div>
          <hr />

          <div className="uk-container">
            <div class="uk-heading-bullet uk-card-title">Class X</div>
          </div>
        </div>
      </div>
    );
}

export default Rest

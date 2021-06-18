import React from 'react';
import "./About.css";

const About = () => {
  const style = {
      margin:'50px'
    }
    return (
      <div style={style}>
        <div data-uk-grid>
          <div className="uk-width-1-3">
            <img
              src="https://i.pinimg.com/originals/54/0a/5e/540a5e6cbf4657c5f0bfbeb02af0e21a.jpg"
              width="auto"
              height="auto"
              alt=""
            ></img>
          </div>
          <div className="uk-width-2-3">
            <article className="uk-article">
              <h2 className="uk-article-title">
                <div>About me</div>
              </h2>

              {/* <p className="uk-article-meta">
                
    </p> */}

              <p className="">
                Hello folks, I am a full stack developer with 2+ years of
                Experience in developement and I specialize in efficient React
                apps and CSS & HTML that just work across all platforms and
                browsers. I care deeply about building interfaces that are
                usable and pleasant for the most number of people possible.
                I have also worked on Backend developement using Django REST Framework and built
                REST API's. I know technologies like NodeJs, Angular, MongoDB, ExpressJs.
              </p>

              <p className="">
              </p>

              <h2 className="uk-article-title">
                <div>Contact Details</div>
              </h2>

              <p>
                At Salfal, <br />
                Post Virul Tah Arvi, <br />
                District Wardha, Maharashtra, <br />
                India 442302 <br/>
                Mobile : 8668540298 <br/>
                Email : johnpalekars@gmail.com
              </p>

              <div className="uk-grid-small uk-child-width-auto" data-uk-grid>
                <div>
                  <button
                    className="uk-button uk-button-text"
                    href="https://drive.google.com/file/d/1E81toS_rHcBIsZ0Zsx6iASfVKohZwvmY/view"
                  >
                    Download Resume
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
}

export default About;

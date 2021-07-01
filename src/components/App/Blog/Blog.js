import React, { Fragment } from 'react'

import { useHistory } from "react-router-dom";

const Blog = () => {

  let history = useHistory();

    const style = {
      padding:"0px 100px 0px 100px" 
    }
    return (
      <Fragment>
        <div
          style={{
            paddingRight: "100px",
            width: "100%",
            height:"50px"
          }}
        >
          <button
            className=" uk-button uk-button-danger uk-button-large"
            style={{
              float: "right",
              borderRadius: "50px",
            }}
            onClick={() => history.goBack()}
          >
            Back
          </button>
        </div>
        <hr className="uk-divider-icon"></hr>
        <div style={style}>
          <article className="uk-article uk-text-left">
            <h1 className="uk-article-title">
              <a
                className="uk-link-reset"
                href="https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"
              >
                Introducing the New JSX Transform
              </a>
            </h1>

            <p className="uk-article-meta">September 22, 2020 by Luna Ruan</p>

            <p>
              Although React 17 doesn’t contain new features, it will provide
              support for a new version of the JSX transform. In this post, we
              will describe what it is and how to try it.
            </p>

            <p className="uk-text-lead">What’s a JSX Transform?</p>

            <p>
              Browsers don’t understand JSX out of the box, so most React users
              rely on a compiler like Babel or TypeScript to transform JSX code
              into regular JavaScript. Many preconfigured toolkits like Create
              React App or Next.js also include a JSX transform under the hood.
              Together with the React 17 release, we’ve wanted to make a few
              improvements to the JSX transform, but we didn’t want to break
              existing setups. This is why we worked with Babel to offer a new,
              rewritten version of the JSX transform for people who would like
              to upgrade.
            </p>

            <div className="uk-grid-small uk-child-width-auto" data-uk-grid>
              <div>
                <a
                  className="uk-button uk-button-text"
                  href="https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"
                >
                  Read more
                </a>
              </div>
              <div>
                <button className="uk-button uk-button-text">5 Comments</button>
              </div>
            </div>
          </article>
        </div>
      </Fragment>
    );
}

export default Blog;

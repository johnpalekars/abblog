import React, { Fragment, useState } from 'react'
import { Link,  } from 'react-router-dom';
import ToggleMain from './react-learn/TogglePerson/ToggleMain'
import BlogChild from './BlogChild';


const Blog = () => {

    let [state, setState] = useState({
        comp: < BlogChild />
    })



    const tabChangeHandler = (value) => {

        if (value === 'blog') {
            setState({
              comp: <BlogChild />,
            });
        }
         else if (value === 'toggle') {
            setState({
              comp: <ToggleMain />,
            });
        }
        
    }



    const style = {
        paddingLeft: '50px'
    }
    return (
      <Fragment>
          <div className="uk-text-center" data-uk-grid>
            <div style={style} className="uk-width-1-4" >
              <ul className="uk-tab-left" data-uk-tab>
                <li className="uk-active">
                  <Link onClick={()=>tabChangeHandler('blog')}>Blog</Link>
                </li>
                <li>
                  <Link onClick={()=>tabChangeHandler("toggle")}>Toggle Person</Link>
                </li>
                <li>
                  <Link>Burger App</Link>
                </li>
              </ul>
            </div>
            <div className="uk-width-3-4">
             {state.comp}
            </div>
          </div>
      </Fragment>
    );
}

export default Blog;

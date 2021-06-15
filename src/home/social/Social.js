import React from 'react'
// import { Route, Link } from 'react-router-dom';
import './Social.css'

 const Social = () => {
     return (
       <>
         <div className="uk-container">
           <div className="uk-text-center uk-margin-xlarge-bottom uk-margin-xlarge-top">
             <ul className="uk-list icons">
               <li>
                 <a
                   className="uk-link"
                   href="https://www.linkedin.com/in/abhishek-palekar-738261107/"
                 >
                   <img
                     className="contain"
                     alt="LinkedInLogo"
                     src="https://cdn.svgporn.com/logos/linkedin.svg"
                   ></img>
                 </a>
               </li>
               <li>
                 <a
                   className="uk-toggle"
                   href="target: #modal-example"
                   data-uk-toggle="target: #modal-example"
                 >
                   <img
                     className="contain"
                     alt="gmailLogo"
                     src="https://cdn.svgporn.com/logos/google-gmail.svg"
                   ></img>
                 </a>
               </li>
               <li>
                 <a className="uk-link" href="https://github.com/johnpalekars">
                   <img
                     className="contain"
                     alt="githubLogo"
                     src="https://cdn.svgporn.com/logos/github-icon.svg"
                   ></img>
                 </a>
               </li>
             </ul>
           </div>
         </div>
         <div id="modal-example" className="uk-modal" data-uk-modal>
           <div className="uk-modal-dialog uk-modal-body">
             <button
               className="uk-modal-close-default"
               type="button"
               data-uk-close
             ></button>
             <div className="uk-modal-header">
               <h2 className="uk-modal-title">Email me @</h2>
             </div>
             <h1 className="uk-text-center">johnpalekars@gmail.com</h1>
           </div>
         </div>
         <section>
           <div className="uk-container">hello</div>
         </section>
       </>
     );
}

export default Social;

import React from 'react'
import "./Person.css"

const Person = (props) => {


    return (
      <div className="uk-card uk-card-secondary uk-card-hover uk-card-body ">
        <p>
          Hi! my name is {props.name} and I am {props.age} years old
        </p>
        <input
          className="uk-input"
          type="text"
          onChange={props.changed}
          value={props.name}
        />
        <button className="uk-button uk-button-danger uk-margin-small" onClick={props.click}>
          Delete Me
        </button>
      </div>
    );
}

export default Person;

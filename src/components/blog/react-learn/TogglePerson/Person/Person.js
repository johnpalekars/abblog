import React from 'react'
import "./Person.css"

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}> Hi! my name is {props.name} and I am { props.age }</p>
        </div>
    )
}

export default Person;

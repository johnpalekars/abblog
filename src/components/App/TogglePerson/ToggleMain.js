import React,{ useState } from 'react'
import Person from './Person/Person';
import { useHistory } from "react-router-dom";


const ToggleMain = () => {

    const [state, setState] = useState({
        persons: [
            { key: "p1", name: "abhi", age: "23" },
            { key: "p2", name: "Aditya", age: "20" },
            { key: "p3", name: "devendra", age: "23" }
        ],
        showPersons: false
    }
    );

    let personData ;
    
    if (state.showPersons) {
        personData = (
          <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
            {state.persons.map((p, index) => {
              return (
                <Person
                  changed={(event) => nameChangeHandler(event, p.key)}
                  click={() => deleteHandler(index)}
                  name={p.name}
                  age={p.age}
                  key={p.key}
                />
              );
            })}
          </div>
        );
            
        }

    const toggleHandler = async () => {
        const persons = [...state.persons]
        if (state.showPersons) {
          await setState({persons:persons, showPersons: false });
        } else {
          await setState({ persons:persons, showPersons: true });
        }
        console.log(state);
    }

    const deleteHandler = (index) => {
        let person = [...state.persons]
        person.splice(index, 1);
        setState({
          persons: person,
          showPersons: true
        });
        
  }
  
  const nameChangeHandler = (event, id) => {
    const personIndex = state.persons.findIndex((p) => {
      return p.key === id;
    });
    const person = { ...state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...state.persons];
    persons[personIndex] = person;
    setState({
      persons: persons,
      showPersons: state.showPersons
    });
    
  }

    
let history = useHistory();


  return (
    <div style={{ padding: "20px" }}>
      <div className="uk-text-center">
        <button
          className=" uk-button uk-button-danger uk-button-large"
          onClick={() => history.goBack()}
        >
          Back
        </button>
        <span>&nbsp;&nbsp;</span>
        <button
          className=" uk-button uk-button-primary uk-button-large"
          onClick={toggleHandler}
        >
          Toggle
        </button>
      </div>
      <br />
      <div>{personData}</div>
    </div>
  );
}

export default ToggleMain;

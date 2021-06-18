import React,{ useState } from 'react'
import Person from './Person/Person';


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

    



  return (
    <div>
      <button
        className="uk-button uk-button-default uk-button-large"
        onClick={toggleHandler}
      >
        Toggle
      </button>
      <br />
        {personData}
    </div>
  );
}

export default ToggleMain;

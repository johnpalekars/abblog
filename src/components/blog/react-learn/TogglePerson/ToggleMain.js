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
          <div>
            {state.persons.map((p, index) => {
              return (
                <Person
                  click={() => deleteHandler(index)}
                  name={p.name}
                  age={p.age}
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

    



    return (
        <div>
            <button onClick={toggleHandler}>Toggle</button>
            <br />
            <div>{ personData }</div>
        </div>
    )
}

export default ToggleMain;

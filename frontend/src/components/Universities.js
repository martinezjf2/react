import React from 'react';
import University from './University';
import {Route, Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

 const Universities = (props) => {
    // functional component that will list all the universities( pass props as argument), class component would be .props, do not need a render, but need a return

// console.log(props)
    return (
        <div className="universityClick">
            <h1>School Search</h1>
            {props.universities.map(university => 
            <div className="university">
                <li key={university.id}>

            <Link to={`/universities/${university.id}`}>{university.name}</Link>
                    {/* <University university={university} /> */}
                </li>
                </div>)}
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
        </div>
    )
}

export default Universities;
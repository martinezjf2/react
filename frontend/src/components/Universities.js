import React from 'react';
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
                <li>
                    <h2>{university.name}</h2>
                    <h3>State: {university.state}</h3>
                    <p>ZipCode:{university.zip}</p>
                    </li>
                </div>)}
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
        </div>
    )
}

export default Universities;
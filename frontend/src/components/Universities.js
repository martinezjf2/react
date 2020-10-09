import React from 'react';
// import {  } from "module";

 const Universities = (props) => {
    // functional component that will list all the universities( pass props as argument), class component would be .props, do not need a render, but need a return

// console.log(props)
    return (
        <div className="universityClick">
            <h1>Click A University</h1>
            {props.universities.map(university => 
            <div className="university">
                <li><h2>{university.name}</h2></li> 
                <li><h3>State: {university.state}</h3></li>
                <li>Zip: {university.zip}</li>
                </div>)}
        </div>
    )
}

export default Universities;
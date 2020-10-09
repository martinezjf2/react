import React from 'react';
// import {  } from "module";

 const Universities = (props) => {
    // functional component that will list all the universities( pass props as argument), class component would be .props, do not need a render, but need a return

// console.log(props)
    return (
        <div>
            props
            {props.universities.map(university => <li>{university.name} - {university.state} - {university.zip}</li>)}
        </div>
    )
}

export default Universities;
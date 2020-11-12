import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Searchbar from './Searchbar'


 const Universities = (props) => {
    // functional component that will list all the universities( pass props as argument), class component would be .props, do not need a render, but need a return

    return (

        <div>
            <h1 className="schoolSearch">School Search</h1>

            <Searchbar onSearchChange={props.onSearchChange}/>
            <br/>
<Link to={'/universities/new'}><button>New University</button></Link>

<br/><br/>


            {props.universities.map(university => 

            <div className="university">
                <li key={university.id}>

            <Link to={`/universities/${university.id}`}>
                
                {<h1 id="universityName">{university.name}</h1>}</Link>
                
                </li>
                </div>)}
                </div>
       
    )
}

export default Universities;
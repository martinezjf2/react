import React from 'react';
// import {Redirect} from 'react-router-dom';
import TeachersContainer from '../containers/TeachersContainer'
import TeachersInput from "./TeachersInput";



const University = (props) => {

    // let university = props.universities[props.match.params.id - 1]
    // console.log(university)
let university = props.universities.filter(university => university.id == props.match.params.id)[0]


    return (
        <div>
            
            {/* {university ? null : <Redirect to='/universities' />} */}

        {university ? <h2>{university.name}</h2>: null}
        {university ? <h3>{university.state}</h3> : null}
        {university ? <p>{university.zip}</p> : null}


            {/* <h2>{props.university.name}</h2>
            <h3>State: {props.university.state}</h3>
            <p>ZipCode:{props.university.zip}</p> */}
        <TeachersContainer university={university}/>
        

        </div>
    )

}

export default University;
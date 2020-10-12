import React from 'react';

// we can pass down props becasue our serializers establish a this.props.universities.teachers relationship, so we can make this a functional component

const Teachers = (props) => {

    // first time porps comes trhu, they may be undefined, so we have to add a check to that by adding "props.teachers"

const handleDelete = () => {
    
}
    return (

        <div>
            {props.teachers && props.teachers.map(teacher => 
            <li key={teacher.id}>{teacher.name}<br/><button onClick={handleDelete}>Delete</button></li>)}
        </div>


    )





}

export default Teachers;

// with react/redux, everytime i refresh my page my store and my state will clear out, everytime i refresh, the first will be undefined. 
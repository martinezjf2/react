

import React from 'react';
import {connect} from 'react-redux'
import {deleteTeacher} from '../actions/deleteTeacher'


const Teachers = (props) => {

   

const handleDelete = (teacher) => {
    props.deleteTeacher(teacher.id, teacher.university_id)
}



    return (

        <div>
            {props.teachers && props.teachers.map(teacher => 
            <div className="individual-teacher">
            <h2 key={teacher.id}>{teacher.name}</h2>
            <p>{teacher.degree}</p>
            <p>{teacher.phone_number}</p>
            <p>{teacher.email}</p>
            
            
            <button onClick={() => handleDelete(teacher, teacher.university_id)}>Delete</button> <br/>
            </div>
            )}
        </div>
    )
}

export default connect(null, {deleteTeacher})(Teachers);



















// we can pass down props becasue our serializers establish a this.props.universities.teachers relationship, so we can make this a functional component


 // first time porps comes trhu, they may be undefined, so we have to add a check to that by adding "props.teachers"
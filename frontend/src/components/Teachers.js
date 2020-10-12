import React from 'react';
import {connect} from 'react-redux'
import {deleteTeacher} from '../actions/deleteTeacher'

// we can pass down props becasue our serializers establish a this.props.universities.teachers relationship, so we can make this a functional component

const Teachers = (props) => {

    // first time porps comes trhu, they may be undefined, so we have to add a check to that by adding "props.teachers"

const handleDelete = (teacher) => {
    props.deleteTeacher(teacher.id, teacher.university_id)

}
    return (

        <div>
            {props.teachers && props.teachers.map(teacher => 
            <li key={teacher.id}>{teacher.name}<br/><button onClick={() => handleDelete(teacher, teacher.university_id)}>Delete</button></li>)}
        </div>
    )
}

export default connect(null, {deleteTeacher})(Teachers);

// with react/redux, everytime i refresh my page my store and my state will clear out, everytime i refresh, the first will be undefined. 
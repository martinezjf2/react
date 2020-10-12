export const deleteTeacher = (teacherId, universityId) => {
return (dispatch) => {
    fetch(`http://localhost:3000/universities/${universityId}/teachers/${teacherId}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(university => dispatch({
        type: 'DELETE_TEACHER',
        payload: university
    
    }))
}
}
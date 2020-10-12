import University from "../components/University"



export const addTeacher = (teacher, universityId) => {

    return (dispatch) => {

        fetch(`http://localhost:3000/universities/${universityId}/teachers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teacher)
        })
        .then(response => response.json())
        .then(university => dispatch({
            type: 'ADD_TEACHER',
            payload: university
        }))


    }


}
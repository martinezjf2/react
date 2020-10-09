import Universities from "../components/Universities"




export function fetchUniversities() {
    return (dispatch) => {
    fetch('http://localhost:3000/universities')
        .then(resp => resp.json())
        .then(universities => dispatch({
            type: 'FETCH_UNIVERSITIES',
            payload: universities
        }))
    }
}

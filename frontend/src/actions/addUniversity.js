


export const addUniversity = (data) => {
    
     // why return dispath, then we can import it to the input file and then connect it to the redux store, will be calling a function dispatching something to the reducer. dispatch gives us access to the dispathc function all because of thunk which allows us to pass dispatch as an argument


    return (dispatch) => {
        fetch('http://localhost:3000/universities', {
            headers: {
                "Content-Type": 'application/json',
                "Accept" : 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then (resp => resp.json())
        .then(university => dispatch({
            type: 'ADD_UNIVERSITY',
            payload: university
        }))

    }
   
}

// we see the input when refreshed, our universities container remounted and went to the backend retrieve all the universites and updated the store. The only reason we see it is because we refresh the page, we add the .then statements to immediately update the DOM with the new universities. 
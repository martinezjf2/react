export default function universityReducer(state = {universities: [] }, action) {
    // debugger;
    switch (action.type) {
        case 'FETCH_UNIVERSITIES':
            return {universities: action.payload}
        case 'ADD_UNIVERSITY' :
            return {...state, universities: [...state.universities, action.payload]}
        case 'ADD_TEACHER' :
            let universities = state.universities.map(university => {
                if (university.id === action.payload.id) {
                    return action.payload
                } else {
                    return university
                }
            })
            return {...state, universities: universities}
    default:
    return state;
    }
}
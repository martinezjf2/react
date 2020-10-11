export default function universityReducer(state = {universities: [] }, action) {
    switch (action.type) {
    case 'FETCH_UNIVERSITIES':
        return {universities: action.payload}
        case 'ADD_UNIVERSITY' :
            return {...state, universities: [...state.universities, action.payload]}
    default:
    return state;
    }
}
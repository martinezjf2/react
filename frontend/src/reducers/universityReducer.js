export default function universityReducer(state = {universities: [] }, action) {
    switch (action.type) {
    case 'FETCH_UNIVERSITIES':
        return {universities: action.payload}
    default:
    return state;
    }
}
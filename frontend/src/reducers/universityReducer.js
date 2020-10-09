export default function universityReducer(state = {universities: [] }, action ) {
    switch (action.type){
    case 'FETCH_ACCOUNTS':
        return {universities: action.payload}
    default:
    return state;
    }
}
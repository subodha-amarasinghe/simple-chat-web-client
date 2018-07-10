

const activeUsersReducer =(state={}, action) => {

    switch(action.type) {

        case 'NEW_USER_JOIN_SUCCESS':
            return [...state, action.payload]

        default:
            return state;
    }
}

export default activeUsersReducer;


const authReducer =(state={}, action) => {

    switch(action.type) {

        case 'PERFORMING_SIGN_IN_SUCCESS':
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
}

export default authReducer;
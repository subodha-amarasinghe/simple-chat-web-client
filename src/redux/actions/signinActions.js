import { SOCKET_CONNECTION } from '../../settings';
import {
    PERFORMING_SIGN_IN_SUCCESS, PERFORMING_SIGN_IN, PERFORMING_SIGN_IN_FAILED
} from '../actionTypes';

export const loginUser = (userName) => {
    
    return dispatch => {

        dispatch({
            type: PERFORMING_SIGN_IN
        })

        let user = SOCKET_CONNECTION.emit('chat join', userName);

        if (!!user && user.connected) {
            dispatch({
                type: PERFORMING_SIGN_IN_SUCCESS,
                payload: {
                    userName,
                    id: user.id,
                    connected: user.connected
                }
            })
        } else {
            dispatch({
                type: PERFORMING_SIGN_IN_FAILED,
                payload: {
                    error: 'Failed'
                }
            })
        }
        
    }
};

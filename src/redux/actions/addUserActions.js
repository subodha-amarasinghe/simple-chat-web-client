import { NEW_USER_JOIN_SUCCESS } from '../actionTypes';

export const addUser = (value) => {
    return {
        type: NEW_USER_JOIN_SUCCESS,
        payload: [value]
    };
};
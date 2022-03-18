import {fetch_users_request,fetch_users_success,fetch_users_failure} from './asyncTypes';
import axios from 'axios';

export const fetchUsersRequest=()=>{
    return {
        type:fetch_users_request,
    }
}
export const fetchUsersSuccess=(users)=>{
    return {
        type:fetch_users_success,
        payload:users
    }
}
export const fetchUsersFailure=(error)=>{
    return {
        type:fetch_users_failure,
        payload:error
    }
}

//redux-thunk的作用是能把異部請求放入action處理
//原本在action中只能處裡對象，安裝thunk後可以處裡函數
export const fetchusers=()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users=response.data;
            dispatch(fetchUsersSuccess(users));
            console.log(users);
        })
        .catch((error)=>{
            const errorMsg=error.message;
            dispatch(fetchUsersFailure(errorMsg));
        })
        
    }
}
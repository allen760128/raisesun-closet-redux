import {fetch_users_request,fetch_users_success,fetch_users_failure} from './asyncTypes';


const defaultState={
    loading:false,
    users:[],
    error:''
}
const asyncReducer=(state=defaultState,action)=>{
    switch(action.type){
        case fetch_users_request:return {
            ...state,
            loading:true,
        }
        case fetch_users_success:return {
            ...state,
            loading:false,
            users:action.payload,
            error:''
        }
        case fetch_users_failure:return {
            ...state,
            loading:false,
            users:[],
            error:action.payload
        }
        default:return state
    }
}

export default asyncReducer;
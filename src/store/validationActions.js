import {
    handleChangeName, handleId,
    handlePass, handlePassagain,
    handleBirth, handlePhone,
    handleEmail, handleLogid,
    handleLogpass, handleIdError,
    handlePassError, handleAllclear,
    handleLogin, handleLogout,
    handleSignIdError, handleSignin,
    handleFakeData, handleLocation,
    handleCity, handleZipcode,
    handleAddress, handleDataliClick,
    handleSigninData, handleLoading,
    handleSubmit2,
} from './validationTypes';
import api from './api';
import axios from 'axios';


//以下為input內容
export const handle_changeName = (e) => {
    return {
        type: handleChangeName,
        payload: e.target.value
    }
}
export const handle_id = (e) => {
    return {
        type: handleId,
        payload: e.target.value
    }
}
export const handle_pass = (e) => {
    return {
        type: handlePass,
        payload: e.target.value
    }
}
export const handle_passagain = (e) => {
    return {
        type: handlePassagain,
        payload: e.target.value
    }
}
export const handle_birth = (e) => {
    return {
        type: handleBirth,
        payload: e.target.value
    }
}
export const handle_phone = (e) => {
    return {
        type: handlePhone,
        payload: e.target.value
    }
}
export const handle_location = (e) => {
    return {
        type: handleLocation,
        payload: e.target.value
    }
}
export const handle_email = (e) => {
    return {
        type: handleEmail,
        payload: e.target.value
    }
}
export const handle_city = (e) => {
    return {
        type: handleCity,
        payload: e.target.value
    }
}
export const handle_zipcode = (e) => {
    return {
        type: handleZipcode,
        payload: e.target.value
    }
}
export const handle_address = (e) => {
    return {
        type: handleAddress,
        payload: e.target.value
    }
}
export const handle_logid = (e) => {
    return {
        type: handleLogid,
        payload: e.target.value
    }
}
export const handle_logpass = (e) => {
    return {
        type: handleLogpass,
        payload: e.target.value
    }
}
export const handle_allclear = () => {
    return {
        type: handleAllclear,
        // payload: e.target.value
    }
}



//以下為input error內容
export const handle_idError = (x) => {
    return {
        type: handleIdError,
        // payload: e.target.value
        payload: x
    }
}
export const handle_passError = (x) => {
    return {
        type: handlePassError,
        // payload: e.target.value
        payload: x
    }
}
export const handle_signIdError = (x) => {
    return {
        type: handleSignIdError,
        payload: x
    }
}
export const handle_fakeData = (data) => {
    return {
        type: handleFakeData,
        payload: data
    }
}
export const handle_dataliClick = (id) => {
    return {
        type: handleDataliClick,
        payload: id
    }
}



//以下為login狀態切換
export const handle_login = () => {
    return {
        type: handleLogin,
    }
}
export const handle_logout = () => {
    return {
        type: handleLogout,
    }
}
export const handle_loading = () => {
    return {
        type: handleLoading
    }
}


//以下為signin狀態切換
export const handle_signin = () => {
    return {
        type: handleSignin,
    }
}
export const handle_signinData = (data) => {
    return {
        type: handleSigninData,
        payload: data
    }
}



//api，讀入data

export const fetch_data = () => {
    return async (dispatch) => {
        dispatch(handle_loading());
        try {
            let res = await api.get('/users');
            let resData = res.data;
            console.log();
            dispatch(handle_signinData(resData));
        }
        catch (err) {
            console.log('error')
        }
    }
}


//api，讀入登入頁api

export const fetch_api = () => {
    return async (dispatch) => {
        dispatch(handle_loading());
        try {
            let res = await api.get('/users/1');
            let resData = res.data;
            // console.log(resData);
            dispatch(handle_fakeData(resData));
        }
        catch (err) {
            console.log(8787)
        }
    }
}





export const fetch_updateuser = (item) => {
    return async (dispatch) => {
        try {
            let request = JSON.stringify(
                {
                    email: item.changeEmail,
                    username: item.changeName,
                    password: 'm38rmF$',
                    name: {
                        firstname: 'John',
                        lastname: 'Doe'
                    },
                    address: {
                        city: item.changeCity,
                        street: '7835 new road',
                        number: 3,
                        zipcode: item.changeZipcode,
                        geolocation: {
                            lat: '-37.3159',
                            long: '81.1496'
                        }
                    },
                    phone: item.changePhone
                }
            )
            console.log(request);
            let res = await api.put('/users/1', request);
            let resData = res.data;
            console.log(resData);
            dispatch(handle_fakeData(resData));
        }
        catch (err) {
            console.log('5555')
        }
    }
}




export const fetchlogin = () => {
    return async (dispatch) => {
        try {
            const request = {
                username: "johnd",
                password: "m38rmF$"
            }
            const res = await api.post('https://fakestoreapi.com/auth/login', request);
            console.log(res.data);
        }
        catch (err) { }
    }
}


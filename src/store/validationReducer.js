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
    handleSubmit2, handleTest,
} from './validationTypes';

const initialState = {
    changeName: '',
    changeId: '',
    changePass: '',
    changePassagain: '',
    changeBirth: '',
    changePhone: '',
    changeEmail: '',
    changeLogid: '',
    changeLogpass: '',
    loggedIn: false,//判斷登入是否成功
    signIn: false,//判斷註冊是否成功
    switchIdError: '',
    switchPassError: '',
    switchSignIdError: '',
    switchSignNameError: '',
    switchSignPassError: '',
    switchSignPassAgainError: '',
    switchSignBirthError: '',
    switchSignPhoneError: '',
    switchSignEmailError: '',
    fakedata: [],
    changelocation: '',
    changeCity: '',
    changeZipcode: '',
    changeAddress: '',
    detailId: 1,
    signinData: [],
    loading: false,
    store: localStorage.getItem('token'),
    testData: [],
}
const regular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
const mailregular = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
const chiness = /^[\u4e00-\u9fa5]{0,}$/g;
const cell = /^09[0-9]{8}$/g;

const ValidationReducer = (state = initialState, action) => {
    switch (action.type) {
        //以下為input內容
        case handleChangeName: return {
            ...state,
            changeName: action.payload
        }
        case handleId: return {
            ...state,
            changeId: action.payload
        }
        case handlePass: return {
            ...state,
            changePass: action.payload
        }
        case handlePassagain: return {
            ...state,
            changePassagain: action.payload
        }
        case handleBirth: return {
            ...state,
            changeBirth: action.payload
        }
        case handleLocation: return {
            ...state,
            changelocation: action.payload
        }
        case handlePhone: return {
            ...state,
            changePhone: action.payload
        }
        case handleCity: return {
            ...state,
            changeCity: action.payload
        }
        case handleZipcode: return {
            ...state,
            changeZipcode: action.payload
        }
        case handleAddress: return {
            ...state,
            changeAddress: action.payload
        }
        case handleEmail: return {
            ...state,
            changeEmail: action.payload
        }
        case handleLogid: return {
            ...state,
            changeLogid: action.payload
        }
        case handleLogpass: return {
            ...state,
            changeLogpass: action.payload
        }

        //error span
        case handleIdError: return {
            ...state,
            switchIdError: state.changeLogid === '' ? '帳號請勿空白' : (state.changeLogid !== action.payload ? '帳號輸入錯誤' : '')
        }
        case handlePassError: return {
            ...state,
            switchPassError: state.changeLogpass === '' ? '密碼請勿空白' : (state.changeLogpass !== action.payload ? '密碼輸入錯誤' : '')
        }
        case handleSignIdError: return {
            ...state,
            switchSignIdError: state.changeId !== '' ? true : '帳號請勿空白',
            switchSignNameError: state.changeName !== '' ? true : '姓名請勿空白',
            switchSignPassError: state.changePass.match(regular) ? true : '請輸入正確格式',
            switchSignPassAgainError: state.changePassagain.match(regular) ? (state.changePassagain === state.changePass ? true : '輸入密碼請一致') : '請輸入正確格式',
            switchSignBirthError: state.changeBirth !== '' ? true : '生日請勿空白',
            switchSignPhoneError: state.changePhone.match(cell) ? true : '請輸入正確格式',
            switchSignEmailError: state.changeEmail.match(mailregular) ? true : '請輸入正確格式',
        }
        case handleFakeData: return {
            ...state,
            fakedata: action.payload,
            changeName: action.payload.name.firstname + ' ' + action.payload.name.lastname,
            changeEmail: action.payload.email,
            changePhone: action.payload.phone,
            changelocation: action.payload.address.city,
            changeCity: action.payload.address.street,
            changeZipcode: action.payload.address.zipcode,
            changeAddress: action.payload.address.zipcode + ' ' +
                action.payload.address.city + ' ' +
                action.payload.address.street,
            loading: false,
        }
        case handleSigninData: return {
            ...state,
            signinData: action.payload,
            loading: false,
        }
        case handleLoading: return {
            ...state,
            loading: true
        }


        //清除所有input內容
        case handleAllclear: return {
            ...state,
            changeName: '',
            changeId: '',
            changePass: '',
            changePassagain: '',
            changeBirth: '',
            changePhone: '',
            changeEmail: '',
            changeLogid: '',
            changeLogpass: '',
            switchPassError: '',
            switchIdError: '',
            switchSignIdError: '',
            switchSignNameError: '',
            switchSignPassError: '',
            switchSignPassAgainError: '',
            switchSignBirthError: '',
            switchSignPhoneError: '',
            switchSignEmailError: '',
        }
        //登入login=true
        case handleLogin: return {
            ...state,
            loggedIn: true
        }
        //登入login=false
        case handleLogout: return {
            ...state,
            loggedIn: false,
            signinData: [],
        }
        //註冊signin=true
        case handleSignin: return {
            ...state,
            signIn: !state.signIn
        }
        case handleDataliClick: return {
            ...state,
            detailId: action.payload
        }
        case handleTest: return {
            ...state,
            testData: action.payload
        }

        default: return state;
    }

}

export default ValidationReducer;
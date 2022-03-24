import {
    handle_signtoggle, handle_rwdtoggle,
    handle_forget, handle_forgetcancel,
    handle_join, handle_joincancel,
    handle_scrollabout, handle_scrollpro,
    handle_scrollserv, handle_scrollcont,
    handle_top, handle_signscroll,
    handle_idchange,
    handle_passchange,
    handlesubmit,
    handle_idforget,
    handle_emailforget,
    handle_forgetsubmit,
    handle_namejoin,
    handle_idjoin,
    handle_passjoin,
    handle_conjoin,
    handle_datejoin,
    handle_phonejoin,
    handle_mailjoin,
    handle_joinsubmit,
    handle_md,
    handle_iderror,
    handle_passerror,
    handle_localfalse,
    handle_clear,

} from './signTypes';

const defaultState = {
    signOpen: false,
    rwdToggle: false,
    forget: true,
    join: false,
    local: false,

    about: 0,
    pro: 0,
    serv: 0,
    cont: 0,

    id: '',
    pass: '',
    iderror: '',
    passerror: '',

    idforget: '',
    mailforget: '',
    idforgeterror: '',
    mailforgeterror: '',
    forgetsubmit: {},
    idcheck: false,
    mailcheck: false,

    namejoin: '',
    idjoin: '',
    passjoin: '',
    conjoin: '',
    datejoin: '',
    phonejoin: '',
    mailjoin: '',
    nameforgeterror: '',
    joinidError: '',
    joinpassError: '',
    joinconError: '',
    joinphoneError: '',
    joinmailError: '',
}

const signReducer = (state = defaultState, action) => {
    switch (action.type) {
        case handle_scrollabout: return {
            ...state,
            about: action.scrollref,
            signOpen: false,
            rwdToggle: false
        }
        case handle_scrollpro: return {
            ...state,
            pro: action.scrollproref,
            signOpen: false,
            rwdToggle: false
        }
        case handle_scrollserv: return {
            ...state,
            serv: action.scrollservref,
            signOpen: false,
            rwdToggle: false
        }
        case handle_scrollcont: return {
            ...state,
            cont: action.scrollcontref,
            signOpen: false,
            rwdToggle: false
        }
        case handle_top: return {
            ...state,
            toTop: action.scrolltopref
        }
        //登入會員開關
        case handle_signtoggle: return {
            ...state,
            signOpen: !state.signOpen,
            local: localStorage.getItem('token'),
            rwdToggle: false
        }
        case handle_localfalse: return {
            ...state,
            local: false,
            signOpen: false,
            rwdToggle: false
        }
        case handle_rwdtoggle: return {
            ...state,
            rwdToggle: !state.rwdToggle,
            // signOpen:!state.signOpen,
        }
        case handle_md: return {
            ...state,
            rwdToggle: !state.rwdToggle
        }
        case handle_signscroll: return {
            ...state,
            signOpen: false,
            rwdToggle: false
        }
        case handle_clear: return {
            ...state,
            id: '',
            pass: '',
            iderror: state.iderror = '',
            passerror: state.passerror = '',
            idforget: state.idforget = '',
            idforgeterror: state.idforgeterror = '',
            mailforget: state.mailforget = '',
            mailforgeterror: state.mailforgeterror = '',
            namejoin: '',
            idjoin: '',
            passjoin: '',
            conjoin: '',
            datejoin: '',
            phonejoin: '',
            mailjoin: '',
            nameforgeterror: '',
            joinidError: '',
            joinpassError: '',
            joinconError: '',
            joinphoneError: '',
            joinmailError: '',

        }
        //忘記密碼開關
        case handle_forget: return {
            ...state,
            forget: !state.forget,
            signOpen: !state.signOpen,
            idcheck: false,
            mailcheck: false
        }
        case handle_forgetcancel: return {
            ...state,
            forget: state.forget = true,
            signOpen: state.signOpen = true,
        }
        //加入會員開關
        case handle_join: return {
            ...state,
            join: !state.join,
            signOpen: !state.signOpen,
        }
        case handle_joincancel: return {
            ...state,
            join: false,
            signOpen: true,
        }



        case handle_idchange: return {
            ...state,
            id: state.id = action.idvalue
        }
        case handle_passchange: return {
            ...state,
            pass: state.pass = action.passvalue
        }
        case handle_iderror: return {
            ...state,
            iderror: state.id === '' ? state.iderror = '帳號不為空' : (state.id !== action.payload ? '帳號輸入錯誤' : '')
        }
        case handle_passerror: return {
            ...state,
            passerror: state.pass === '' ? state.passerror = '密碼不為空' : (state.pass !== action.payload ? '帳號輸入錯誤' : '')
        }
        // case handlesubmit:return {
        //     ...state,
        //     iderror:state.id==='' ? state.iderror='帳號不為空' :  state.id.match(action.reg) ? state.iderror='' : state.iderror='請填入大小寫英數共8位數',
        //     passerror:state.pass===''  ?state.passerror='密碼不為空': state.pass.match(action.reg) ? state.passerror='' : state.passerror='請填入大小寫英數共8位數',
        // }



        case handle_idforget: return {
            ...state,
            idforget: state.idforget = action.idforgetvalue,
            idcheck: state.idforget !== '' && state.idforget.match(action.mregular) ? true : false
        }
        case handle_emailforget: return {
            ...state,
            mailforget: state.mailforget = action.emailforgetvalue,
            mailcheck: state.mailforget !== '' && state.mailforget.match(action.gmregular) ? true : false
        }
        case handle_forgetsubmit: return {
            ...state,
            idforgeterror: state.idforget === '' ? state.idforgeterror = '帳號不為空' : state.idforget.match(action.fregular) ? state.idforgeterror = '' : state.idforgeterror = '請填入大小寫英數共8位數',
            mailforgeterror: state.mailforget === '' ? state.mailforgeterror = '電子信箱不為空' : state.mailforget.match(action.rmregular) ? state.mailforgeterror = '' : state.mailforgeterror = '請填入正確格式',

        }



        case handle_namejoin: return {
            ...state,
            namejoin: action.namejoinvalue
        }
        case handle_idjoin: return {
            ...state,
            idjoin: action.idjoinvalue
        }
        case handle_passjoin: return {
            ...state,
            passjoin: action.passjoinvalue
        }
        case handle_conjoin: return {
            ...state,
            conjoin: action.conjoinvalue
        }
        case handle_datejoin: return {
            ...state,
            datejoin: action.datejoinvalue
        }
        case handle_phonejoin: return {
            ...state,
            phonejoin: action.phonejoinvalue
        }
        case handle_mailjoin: return {
            ...state,
            mailjoin: action.mailjoinvalue
        }
        case handle_joinsubmit: return {
            ...state,
            nameforgeterror: state.namejoin === '' ? state.nameforgeterror = '姓名不為空' : state.namejoin.match(action.chiness) ? state.nameforgeterror = '' : state.nameforgeterror = '請填入正確格式',
            joinidError: state.idjoin === '' ? state.joinidError = '帳號不為空' : state.idjoin.match(action.regular) ? state.joinidError = '' : state.joinidError = '請填入大小寫英數共8位數',
            joinpassError: state.passjoin === '' ? state.joinpassError = '密碼不為空' : state.passjoin.match(action.regular) ? state.joinpassError = '' : state.joinpassError = '請填入大小寫英數共8位數',
            joinconError: state.conjoin === '' ? state.joinconError = '密碼不為空' : state.conjoin.match(action.regular) ? state.joinconError = '' : state.joinconError = '請填入大小寫英數共8位數' && state.passjoin === state.conjoin ? state.joinconError = '' : state.joinconError = '請輸入相同密碼',
            joinphoneError: state.phonejoin === '' ? state.joinphoneError = '電話不為空' : state.phonejoin.match(action.cell) ? state.joinphoneError = '' : state.joinphoneError = '請填入正確格式',
            joinmailError: state.mailjoin === '' ? state.joinmailError = '電子郵件不為空' : state.mailjoin.match(action.mailregular) ? state.joinmailError = '' : state.joinmailError = '請填入正確格式',
        }
        default: return state;
    }
}

export default signReducer;


import React, { useEffect, useState } from 'react';
import style from './signin.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '../common/CircularProgress';
import {
    handleForget, handleJoin, handleIdchange, handleSubmit, handlePasschange,
    handleIderror, handlePasserror, handleClear,
} from '../store/signAction';
import {
    handle_login, handle_logout, fetch_data, handle_logid,
    handle_logpass, handle_allclear, handle_idError, handle_passError
} from '../store/validationActions';
import Logid from '../signbutton/logid';
import Logpass from '../signbutton/logpass';

const SignIn = (props) => {
    const signOpen = useSelector(state => state.sign.signOpen);
    const changeLogid = useSelector(state => state.validation.changeLogid);
    const changeLogpass = useSelector(state => state.validation.changeLogpass);
    const switchIdError = useSelector(state => state.validation.switchIdError);
    const switchPassError = useSelector(state => state.validation.switchPassError);

    const loading = useSelector(state => state.validation.loading);
    const loggedIn = useSelector(state => state.validation.loggedIn);
    const signIn = useSelector(state => state.validation.signIn);
    const signinData = useSelector(state => state.validation.signinData);
    const toggleLogin = { right: signOpen ? '0px' : '-100%' };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const usernameData = signinData.filter(c => { return c.username === changeLogid });
    const userName = usernameData.map(c => c.username);
    const userPass = usernameData.map(c => c.password);
    const handle_submit = (e) => {
        e.preventDefault()
        //這邊意思是先點及按鈕取得資料，在往下送入useeffect，避免第一次讀取取不到值
        dispatch(fetch_data());
        // dispatch(handle_signin());
        // console.log(aa.map(c => c.password))

        // if (id === String(userName) && pass === String(userPass) && id !== '' && pass !== '') {

        //     localStorage.setItem('token', '760128');
        //     dispatch(handle_login());
        //     // navigate('/signindata');
        // } else {
        //     dispatch(handleIderror(String(userName)));
        //     dispatch(handlePasserror(String(userPass)));
        //     dispatch(handle_logout());
        // }
    }
    useEffect(() => {
        //偵測signinData起初空陣列，不能直接用[]，得得知他是否個數等不等於0
        if (signinData.length !== 0) {
            if (changeLogid === String(userName) && changeLogpass === String(userPass) && changeLogid !== '' && changeLogpass !== '') {

                localStorage.setItem('token', '760128');
                dispatch(handle_login());
                navigate('/signindata');
            } else {
                dispatch(handle_idError(String(userName)));
                dispatch(handle_passError(String(userPass)));
                dispatch(handle_logout());
            }
        }

    }, [signinData]);

    //按下signin會發送出有無偵測到token，並重新定向
    // useEffect(() => {
    //     if (local === '760128') {
    //         navigate('/signindata');
    //         dispatch(handleClear());
    //     }
    // }, [local]);

    const handlejoin = (e) => {
        dispatch(handleClear());
        dispatch(handleJoin(e))
    }

    return (
        <div className={style.signIn} style={toggleLogin}>
            <div className={style.inner}>
                <div className={style.top}>
                    <div className={style.topLeft}><span>登入</span></div>
                    <div className={style.topRight}><span>或<a href="#" onClick={(e) => { handlejoin(e) }}>加入會員</a></span></div>
                </div>
                <div className={style.middle}>
                    <div className={style.middleInner}>
                        <div className={style.loginTitle}><span>Please Login</span></div>
                        <form action="#">
                            <div className={style.idWrap}>
                                <label htmlFor="">會員帳號</label>
                                <input type="text" placeholder='帳號:johnd' maxLength='8' value={changeLogid} onChange={(e) => { dispatch(handle_logid(e)) }} />
                                {/* <Logid name={'帳號:johnd'} types={'text'}></Logid> */}
                            </div>
                            <span className={style.iderror}>{loading ? '' : switchIdError}</span>
                            <div className={style.passWrap}>
                                <label htmlFor="">會員密碼</label>
                                <input type="password" maxLength='8' placeholder='密碼:m38rmF$' value={changeLogpass} onChange={(e) => { dispatch(handle_logpass(e)) }} />
                                {/* <Logpass name={'密碼:m38rmF$'} types={'password'}></Logpass> */}
                            </div>
                            <span className={style.passerror}>{loading ? '' : switchPassError}</span>
                            <div className={style.remem}>
                                <input type="checkbox" onChange={() => { }} />
                                <label htmlFor="">記住我</label>
                            </div>
                            <div className={style.loginWrap}>
                                <div className={style.loginLeft}>
                                    <span>
                                        <a href="#" onClick={(e) => { dispatch(handleForget(e)) }}>忘記密碼</a>
                                    </span>
                                </div>
                                <div className={style.loginRight}>
                                    {/* <input type='button' value={loading ? 'Loading' : 'Login'} onClick={(e) => { handle_submit(e) }} /> */}
                                    <button onClick={(e) => { handle_submit(e) }}>{loading ? <CircularProgress clo={"inherit"} si={15} /> : '登入'}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
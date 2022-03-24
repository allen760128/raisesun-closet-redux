import React, { useState, useEffect, useLayoutEffect } from 'react';
import style from './signin.module.css';
import Nav from '../common/nav';
import Footer from '../common/footer';
import Button1 from '../signbutton/button1';
import Button2 from '../signbutton/button2';
import Name from '../signbutton/name';
import Id from '../signbutton/id';
import Password from '../signbutton/password';
import Passagain from '../signbutton/passagain';
import Birth from '../signbutton/birth';
import Phone from '../signbutton/phone';
import Email from '../signbutton/email';
import Logid from '../signbutton/logid';
import Logpass from '../signbutton/logpass';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    handle_idError, handle_passError, handle_allclear, handle_login,
    handle_logout, handle_signIdError, handle_signin, fetch_data,
} from '../store/validationActions';

const Signpage = (props) => {
    const [signToggle, setSignToggle] = useState(true);

    const changeName = useSelector(state => state.validation.changeName);
    const changeId = useSelector(state => state.validation.changeId);
    const changePass = useSelector(state => state.validation.changePass);
    const changePassagain = useSelector(state => state.validation.changePassagain);
    const changeBirth = useSelector(state => state.validation.changeBirth);
    const changePhone = useSelector(state => state.validation.changePhone);
    const changeEmail = useSelector(state => state.validation.changeEmail);
    const signIn = useSelector(state => state.validation.signIn);
    const changeLogid = useSelector(state => state.validation.changeLogid);
    const changeLogpass = useSelector(state => state.validation.changeLogpass);
    const loggedIn = useSelector(state => state.validation.loggedIn);
    const signinData = useSelector(state => state.validation.signinData);
    const regular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
    const mailregular = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
    const chiness = /^[\u4e00-\u9fa5]{0,}$/g;
    const cell = /^09[0-9]{8}$/g;
    // const [loggedIn, setLogin] = useState('');
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const tk = localStorage.getItem('token');

    //以下為註冊判斷
    const handle_submit1 = (e) => {
        e.preventDefault();
        dispatch(handle_signIdError());
        if (changeName !== '' && changeId !== '' && changePass.match(regular) &&
            changePassagain.match(regular) && changePassagain === changePass &&
            changeBirth !== '' && changePhone.match(cell) && changeEmail.match(mailregular)
        ) {
            // localStorage.setItem('token', '760128');
            dispatch(handle_signin());

        }
    }




    // useEffect(() => {
    //     // dispatch(fetch_data());
    //     dispatch(handle_allclear());
    // }, []);

    //取得api的username
    const usernameData = signinData.filter(c => { return c.username === changeLogid });
    const userName = usernameData.map(c => c.username);
    const userPass = usernameData.map(c => c.password);

    //以下為登入密碼與token判斷`,這邊意思是先點及按鈕取得資料，在往下送入useeffect，避免第一次讀取取不到值
    const handle_submit2 = (e) => {
        e.preventDefault()
        dispatch(fetch_data());

        // if (signinData !== []) {
        //     if (changeLogid === String(userName) && changeLogpass === String(userPass) && changeLogid !== '' && changeLogpass !== '') {

        //         localStorage.setItem('token', '760128');
        //         dispatch(handle_login());
        //         navigate('/signindata');
        //     } else {
        //         dispatch(handle_idError(String(userName)));
        //         dispatch(handle_passError(String(userPass)));
        //         dispatch(handle_logout());
        //     }
        // }
    }
    useEffect(() => {
        //空陣列裡面也算物件，只是試0物件
        if (signinData.length !== 0) {
            if (changeLogid === String(userName) && changeLogpass === String(userPass) && changeLogid !== '' && changeLogpass !== '') {

                localStorage.setItem('token', '760128');
                dispatch(handle_login());
                dispatch(handle_allclear());
                navigate('/signindata');

            } else {
                console.log(2222)
                dispatch(handle_idError(String(userName)));
                dispatch(handle_passError(String(userPass)));
                dispatch(handle_logout());
            }
        }
    }, [signinData]);


    // console.log(signinData)
    //偵測是否有login
    useEffect(() => {
        if (tk === '760128') {
            navigate('/signindata');
        }
    }, [loggedIn]);


    //以下為加入會員與登入toggle之切換
    const handle_signtoggleleft = () => {
        setSignToggle(true);
    }
    const handle_signtoggleright = () => {
        setSignToggle(false);
    }
    const ST = { display: signToggle ? 'block' : 'none' };
    const LT = { display: signToggle ? 'none' : 'block' };
    const SB = {
        borderRight: signToggle ? '1px solid rgb(214, 214, 214)' : 'none',
        borderBottom: signToggle ? 'none' : '1px solid rgb(214, 214, 214)',
        backgroundColor: signToggle ? '#fefbf4' : '#e9e6de'
    }
    const LB = {
        borderLeft: signToggle ? 'none' : '1px solid rgb(214, 214, 214)',
        borderBottom: signToggle ? '1px solid rgb(214, 214, 214)' : 'none',
        backgroundColor: signToggle ? '#e9e6de' : '#fefbf4'
    }
    return (
        <div className={style.signWrap}>
            <Nav></Nav>
            <div className={style.sign}>
                <ul>
                    <li onClick={() => { handle_signtoggleleft() }} style={SB}>註冊會員</li>
                    <li onClick={() => { handle_signtoggleright() }} style={LB}>會員登入</li>
                </ul>
                <div className={style.signin} style={ST}>
                    <div className={style.signinWrap}>
                        <form action="" onSubmit={(e) => { handle_submit1(e) }} >
                            <Name name={'請輸入中文姓名'} types={'text'}></Name>
                            <Id name={'請輸入會員帳號'} types={'text'}></Id>
                            <Password name={'密碼:8位大小寫英數字'} types={'password'}></Password>
                            <Passagain name={'請再輸入一次密碼'} types={'password'}></Passagain>
                            <Birth name={'請輸入您的生日'} types={'date'} ></Birth>
                            <Phone name={'請輸入手機號碼'} types={'tel'} ></Phone>
                            <Email name={'請輸入電子郵件'} types={'email'} ></Email>
                            <div className={style.buttonWrap}>
                                <Button1 types={'submit'} name={'立即加入'}></Button1>
                            </div>
                        </form>

                    </div>

                </div>
                <div className={style.login} style={LT}>
                    <div className={style.loginWrap}>
                        <h3>請輸入您的登入資訊</h3>
                        <form action="" >
                            <Logid name={'帳號:johnd'} types={'text'}></Logid>
                            <Logpass name={'密碼:m38rmF$'} types={'password'}></Logpass>
                            <div className={style.buttonWrap}>
                                <Button2 types={'button'} name={'開始購物吧'}
                                    click={handle_submit2}
                                ></Button2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer ></Footer>
        </div>
    )
}

export default Signpage;
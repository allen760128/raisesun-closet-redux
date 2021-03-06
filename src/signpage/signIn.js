import React, { useState, useEffect } from 'react';
import style from './signin.module.css';
import Nav from '../common/nav';
import Footer from '../common/footer';
import Button1 from '../signbutton/button1';
import Name from '../signbutton/name';
import Id from '../signbutton/id';
import Password from '../signbutton/password';
import Passagain from '../signbutton/passagain';
import Birth from '../signbutton/birth';
import Phone from '../signbutton/phone';
import Email from '../signbutton/email';
import Logid from '../signbutton/logid';
import Logpass from '../signbutton/logpass';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    handle_idError, handle_passError, handle_allclear, handle_login,
    handle_logout, handle_signIdError, handle_signin, fetch_data,
} from '../store/validationActions';
import CircularProgress from '../common/CircularProgress';

const Signpage = (props) => {
    const [signToggle, setSignToggle] = useState(true);

    const changeName = useSelector(state => state.validation.changeName);
    const changeId = useSelector(state => state.validation.changeId);
    const changePass = useSelector(state => state.validation.changePass);
    const changePassagain = useSelector(state => state.validation.changePassagain);
    const changeBirth = useSelector(state => state.validation.changeBirth);
    const changePhone = useSelector(state => state.validation.changePhone);
    const changeEmail = useSelector(state => state.validation.changeEmail);
    // const signIn = useSelector(state => state.validation.signIn);
    const changeLogid = useSelector(state => state.validation.changeLogid);
    const changeLogpass = useSelector(state => state.validation.changeLogpass);
    const loggedIn = useSelector(state => state.validation.loggedIn);
    const signinData = useSelector(state => state.validation.signinData);
    const loading = useSelector(state => state.validation.loading);
    const regular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
    const mailregular = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
    // const chiness = /^[\u4e00-\u9fa5]{0,}$/g;
    const cell = /^09[0-9]{8}$/g;
    // const [loggedIn, setLogin] = useState('');
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const tk = localStorage.getItem('token');

    //?????????????????????
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

    //??????api???username
    const usernameData = signinData.filter(c => { return c.username === changeLogid });
    const userName = usernameData.map(c => c.username);
    const userPass = usernameData.map(c => c.password);

    //????????????????????????token??????`,????????????????????????????????????????????????????????????useeffect????????????????????????????????????
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
        //???????????????????????????????????????0??????
        if (signinData.length !== 0) {
            if (changeLogid === String(userName) && changeLogpass === String(userPass) && changeLogid !== '' && changeLogpass !== '') {

                localStorage.setItem('token', '760128');
                dispatch(handle_login());
                dispatch(handle_allclear());//??????????????????????????????????????????
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
    //???????????????login?????????
    useEffect(() => {
        if (tk === '760128') {
            navigate('/signindata');
        }
    }, [loggedIn]);


    //??????????????????????????????toggle?????????
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
                    <li onClick={() => { handle_signtoggleleft() }} style={SB}>????????????</li>
                    <li onClick={() => { handle_signtoggleright() }} style={LB}>????????????</li>
                </ul>
                <div className={style.signin} style={ST}>
                    <div className={style.signinWrap}>
                        <form action="" onSubmit={(e) => { handle_submit1(e) }} >
                            <Name name={'?????????????????????'} types={'text'}></Name>
                            <Id name={'?????????????????????'} types={'text'}></Id>
                            <Password name={'??????:8?????????????????????'} types={'password'}></Password>
                            <Passagain name={'????????????????????????'} types={'password'}></Passagain>
                            <Birth name={'?????????????????????'} types={'date'} ></Birth>
                            <Phone name={'?????????????????????'} types={'tel'} ></Phone>
                            <Email name={'?????????????????????'} types={'email'} ></Email>
                            <div className={style.buttonWrap}>
                                <Button1 types={'submit'} name={'????????????'}></Button1>
                            </div>
                        </form>

                    </div>

                </div>
                <div className={style.login} style={LT}>
                    <div className={style.loginWrap}>
                        <h3>???????????????????????????</h3>
                        <form action="" >
                            <Logid name={'??????:johnd'} types={'text'}></Logid>
                            <Logpass name={'??????:m38rmF$'} types={'password'}></Logpass>
                            <div className={style.buttonWrap}>
                                <button onClick={(e) => { handle_submit2(e) }}>{loading ? <CircularProgress clo={"inherit"} si={15} /> : '??????'}</button>
                                {/* <Button2 types={'button'} name={'???????????????'}
                                    click={handle_submit2}
                                ></Button2> */}
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
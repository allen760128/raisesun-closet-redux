import React, { useRef, useEffect } from 'react';
import style from './join.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    handleJoin, handleJoinCancel,
} from '../store/signAction';
import {
    handle_changeName, handle_allclear, handle_id, handle_pass,
    handle_passagain, handle_birth, handle_phone, handle_email,
    handle_signin, handle_signIdError,
} from '../store/validationActions';

const Join = (props) => {
    const refJoin = useRef();
    const dispatch = useDispatch();
    const changeName = useSelector(state => state.validation.changeName);
    const switchSignNameError = useSelector(state => state.validation.switchSignNameError);
    const changeId = useSelector(state => state.validation.changeId);
    const switchSignIdError = useSelector(state => state.validation.switchSignIdError);
    const changePass = useSelector(state => state.validation.changePass);
    const switchSignPassError = useSelector(state => state.validation.switchSignPassError);
    const changePassagain = useSelector(state => state.validation.changePassagain);
    const switchSignPassAgainError = useSelector(state => state.validation.switchSignPassAgainError);
    const changeBirth = useSelector(state => state.validation.changeBirth);
    const switchSignBirthError = useSelector(state => state.validation.switchSignBirthError);
    const changePhone = useSelector(state => state.validation.changePhone);
    const switchSignPhoneError = useSelector(state => state.validation.switchSignPhoneError);
    const changeEmail = useSelector(state => state.validation.changeEmail);
    const switchSignEmailError = useSelector(state => state.validation.switchSignEmailError);


    const join = useSelector(state => state.sign.join);
    const joinToggle = { right: join ? '0' : '-100%' };
    // const chiness = /^[\u4e00-\u9fa5]{0,}$/g;
    const regular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
    const mailregular = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
    const cell = /^09[0-9]{8}$/g;
    useEffect(() => {
        window.onclick = (e) => {
            if (e.target === refJoin.current) {
                dispatch(handleJoin(e));
                dispatch(handle_allclear());
            }
        }
    }, [join]);

    const joincancel = (e) => {
        dispatch(handleJoinCancel(e));
        dispatch(handle_allclear());
    }

    const handle_submit = (e) => {
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

    return (
        <div className={style.joinWrap} style={joinToggle} ref={refJoin}>
            <div className={style.inner}>
                <div className={style.innerWrap}>
                    <div className={style.innerTitle}><span>????????????????</span></div>
                    <form action="" onSubmit={(e) => { handle_submit(e) }}>
                        <div className={style.nameWrap}>
                            <label htmlFor="">??????</label>
                            <input type="text" onChange={(e) => { dispatch(handle_changeName(e)) }} value={changeName} placeholder='?????????????????????' />
                        </div>
                        <span className={style.nameerror}>{switchSignNameError}</span>
                        <div className={style.idWrap}>
                            <label htmlFor="">????????????????????????</label>
                            <input type="text" onChange={(e) => { dispatch(handle_id(e)) }} value={changeId} placeholder='?????????8?????????????????????' maxLength='8' />
                        </div>
                        <span className={style.iderror}>{switchSignIdError}</span>
                        <div className={style.passWrap}>
                            <label htmlFor="">??????????????????</label>
                            <input type="password" onChange={(e) => { dispatch(handle_pass(e)) }} value={changePass} placeholder='?????????8?????????????????????' maxLength='8' />
                        </div>
                        <span className={style.passerror}>{switchSignPassError}</span>
                        <div className={style.conWrap}>
                            <label htmlFor="">??????????????????</label>
                            <input type="password" onChange={(e) => { dispatch(handle_passagain(e)) }} value={changePassagain} placeholder='?????????8?????????????????????' maxLength='8' />
                        </div>
                        <span className={style.conerror}>{switchSignPassAgainError}</span>
                        <div className={style.bdWrap}>
                            <label htmlFor="">????????????</label>
                            <input type="date" onChange={(e) => { dispatch(handle_birth(e)) }} value={changeBirth} />
                        </div>
                        <span className={style.bderror}>{switchSignBirthError}</span>
                        <div className={style.phoneWrap}>
                            <label htmlFor="">????????????</label>
                            <input type="tel" onChange={(e) => { dispatch(handle_phone(e)) }} value={changePhone} placeholder='?????????10?????????' maxLength='10' />
                        </div>
                        <span className={style.phoneerror}>{switchSignPhoneError}</span>
                        <div className={style.emailWrap}>
                            <label htmlFor="">????????????</label>
                            <input type="email" onChange={(e) => { dispatch(handle_email(e)) }} value={changeEmail} placeholder='?????????????????????' />
                        </div>
                        <span className={style.emailerror}>{switchSignEmailError}</span>
                        <div className={style.buttonWrap}>
                            <input type='submit' value='??????' />
                            <input type='button' value='??????' onClick={(e) => { joincancel(e) }} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Join;
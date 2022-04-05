import React, { useState } from 'react';
import style from '../common/signbutton/normal2.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { handle_email } from '../store/validationActions';

const Normal2 = (props) => {
    const dispatch = useDispatch();
    const changeEmail = useSelector(state => state.validation.changeEmail);
    const switchSignEmailError = useSelector(state => state.validation.switchSignEmailError);
    // const name = props.name;
    const typeProps = props.types
    const [focus, setFocus] = useState(false);
    const [emailvalue, setEmail] = useState('');
    const handle_focus = () => {
        setFocus(true);
    };
    const handle_blur = () => {
        setFocus(false);
    };
    const focusStyle = { border: focus && '2px solid #00E3E3', padding: focus && '0px 0 0px 9px' };
    // console.log(change)
    return (
        <div className={style.inputWrap}>
            <input type={typeProps}
                name="" id="usermail"
                placeholder={changeEmail}
                value={emailvalue}
                onChange={(e) => { setEmail(e.target.value) }}
                onFocus={() => { handle_focus() }}
                onBlur={() => { handle_blur() }}
                style={focusStyle}
            />
            <span>{switchSignEmailError}</span>
        </div>
    )
}

export default Normal2;
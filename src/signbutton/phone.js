import React, { useState } from 'react';
import style from '../common/signbutton/normal2.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { handle_phone } from '../store/validationActions';

const Normal2 = (props) => {
    const dispatch = useDispatch();
    const changePhone = useSelector(state => state.validation.changePhone);
    const switchSignPhoneError = useSelector(state => state.validation.switchSignPhoneError);
    const name = props.name;
    const typeProps = props.types
    const [focus, setFocus] = useState(false);
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
                name="" id="userPhone"
                placeholder={name}
                value={changePhone}
                onChange={(e) => { dispatch(handle_phone(e)) }}
                onFocus={() => { handle_focus() }}
                onBlur={() => { handle_blur() }}
                style={focusStyle}
            />
            <span>{switchSignPhoneError}</span>
        </div>
    )
}

export default Normal2;
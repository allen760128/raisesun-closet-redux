import React, { useState } from 'react';
import style from '../common/signbutton/normal2.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { handle_city } from '../store/validationActions';

const Normal2 = (props) => {
    const dispatch = useDispatch();
    const changeCity = useSelector(state => state.validation.changeCity);
    const switchSignNameError = useSelector(state => state.validation.switchSignNameError);
    const [focus, setFocus] = useState(false);
    const name = props.name;
    const typeProps = props.types
    const maxlengthProps = props.maxlength;
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
                name="" id="userName"
                placeholder={name}
                value={changeCity}
                onChange={(e) => { dispatch(handle_city(e)) }}
                onFocus={() => { handle_focus() }}
                onBlur={() => { handle_blur() }}
                style={focusStyle}
                maxLength={maxlengthProps}
            />
            <span>{switchSignNameError}</span>
        </div>
    )
}

export default Normal2;
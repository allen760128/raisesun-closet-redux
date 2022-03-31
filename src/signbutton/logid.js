import React, { useState } from 'react';
import style from '../common/signbutton/normal2.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { handle_logid } from '../store/validationActions';

const Normal2 = (props) => {
    const dispatch = useDispatch();
    const changeLogid = useSelector(state => state.validation.changeLogid);
    const switchIdError = useSelector(state => state.validation.switchIdError);
    const loading = useSelector(state => state.validation.loading);
    const [focus, setFocus] = useState(false);
    const name = props.name;
    const typeProps = props.types
    const handle_focus = () => {
        setFocus(true);
    };
    const handle_blur = () => {
        setFocus(false);
    };
    const focusStyle = { border: focus && '2px solid #00E3E3', padding: focus && '0px 0 0px 9px' };

    return (
        <div className={style.inputWrap}>
            <input type={typeProps}
                name="" id="userId"
                placeholder={name}
                value={changeLogid}
                onChange={(e) => { dispatch(handle_logid(e)) }}
                onFocus={() => { handle_focus() }}
                onBlur={() => { handle_blur() }}
                style={focusStyle}
            />
            <span >{loading ? '' : switchIdError}</span>
        </div>
    )


}

export default Normal2;
import React, { useState } from 'react';
import style from '../common/signbutton/normal2.module.css';
import { useSelector } from 'react-redux';

const Normal2 = (props) => {
    const changelocation = useSelector(state => state.validation.changelocation);
    const switchSignNameError = useSelector(state => state.validation.switchSignNameError);
    const [focus, setFocus] = useState(false);
    // const name = props.name;
    const typeProps = props.types;
    const [locavalue, setLoca] = useState('');
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
                placeholder={changelocation}
                value={locavalue}
                onChange={(e) => { setLoca(e.target.value) }}
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
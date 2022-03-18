import React, { useState } from 'react';
import style from './normal2.module.css';

const Normal2 = (props) => {
    const [change, setChange] = useState();
    const [focus, setFocus] = useState(false);
    const name = props.name;
    const typeProps = props.types
    const maxlengthProps = props.maxlength;
    const handle_changePage = (e) => {
        setChange(e.target.value);
    };
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
                name="" id=""
                placeholder={name}
                value={change}
                onChange={(e) => { handle_changePage(e) }}
                onFocus={() => { handle_focus() }}
                onBlur={() => { handle_blur() }}
                style={focusStyle}
                maxLength={maxlengthProps}
            />
            <span>error</span>
        </div>
    )
}

export default Normal2;
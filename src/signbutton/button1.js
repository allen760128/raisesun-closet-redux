import React, { useState } from 'react';
import style from '../common/signbutton/button.module.css';

const Button = (props) => {
    const [change, setChange] = useState();
    const [focus, setFocus] = useState(false);
    const [click, setClick] = useState(false);
    const name = props.name;
    // const handle_changePage = (e) => {
    //     setChange(e.target.value);
    // };
    // const handle_focus = () => {
    //     setFocus(true);
    // };
    // const handle_blur = () => {
    //     setFocus(false);
    // };
    const handle_click = () => {
        setClick(!click)
    }
    const sub = props.sub;
    const names = props.name;
    // const focusStyle = { border: focus && '2px solid rgb(25, 171, 255)', padding: focus && '0px 0 0px 9px' };
    const clickStyle = { backgroundColor: click ? '#07bdbd' : '#00E3E3' }
    return (
        <div className={style.inputWrap}>
            <input type='submit'
                name="" id=""
                placeholder=''
                value={names}
                // onChange={(e) => { handle_changePage(e) }}
                // onFocus={() => { handle_focus() }}
                // onBlur={() => { handle_blur() }}
                onMouseDown={() => { handle_click() }}
                onMouseUp={() => { handle_click() }}
                style={clickStyle}
                onClick={sub}
            />
        </div>
    )
}

export default Button;
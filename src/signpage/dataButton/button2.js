import React, { useState } from 'react';
import style from './button.module.css';

const Button = (props) => {
    // const [change, setChange] = useState();
    // const [focus, setFocus] = useState(false);
    const [click, setClick] = useState(false);
    const [button2, setButton2] = useState('儲存變更');
    // const name = props.name;
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
    const names = props.name;
    const sub = props.sub;
    // const focusStyle = { border: focus && '2px solid rgb(25, 171, 255)', padding: focus && '0px 0 0px 9px' };
    const clickStyle = { backgroundColor: click ? '#c74060' : '#a12945' }
    return (
        <div className={style.inputWrap}>
            <input
                name="" id=""
                placeholder={names}
                value={button2}
                onClick={sub}
                onChange={(e) => { setButton2(e.target.value) }}
                // onFocus={() => { handle_focus() }}
                // onBlur={() => { handle_blur() }}
                onMouseDown={() => { handle_click() }}
                onMouseUp={() => { handle_click() }}
                style={clickStyle}
            />
        </div>
    )
}

export default Button;
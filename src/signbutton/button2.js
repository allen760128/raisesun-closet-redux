import React, { useState } from 'react';
import style from '../common/signbutton/button.module.css';
import { useSelector } from 'react-redux';

const Button = (props) => {
    const [click, setClick] = useState(false);
    const loading = useSelector(state => state.validation.loading);
    const subclick = props.click;
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
    console.log(loading)
    const names = props.name;
    // const focusStyle = { border: focus && '2px solid rgb(25, 171, 255)', padding: focus && '0px 0 0px 9px' };
    const clickStyle = { backgroundColor: click ? '#c74060' : '#a12945' }
    return (
        <div className={style.inputWrap}>
            <input type='submit'
                name="" id=""
                placeholder=''
                value={
                    loading ? 'Loading' : names}
                // onChange={(e) => { handle_changePage(e) }}
                // onFocus={() => { handle_focus() }}
                // onBlur={() => { handle_blur() }}
                onMouseDown={() => { handle_click() }}
                onMouseUp={() => { handle_click() }}
                style={clickStyle}
                onClick={subclick}
            />
        </div>
    )
}

export default Button;
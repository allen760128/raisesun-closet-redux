import React, { useState } from 'react';
import style from '../common/signbutton/normal2.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { handle_changeName } from '../store/validationActions';

const Normal2 = (props) => {
    const dispatch = useDispatch();
    const changeName = useSelector(state => state.validation.changeName);
    const switchSignNameError = useSelector(state => state.validation.switchSignNameError);
    const [focus, setFocus] = useState(false);
    // const name = props.name;
    const typeProps = props.types
    const maxlengthProps = props.maxlength;
    const [namevalue, setName] = useState('');
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
                placeholder={changeName}
                value={namevalue}
                onChange={(e) => { setName(e.target.value) }}
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
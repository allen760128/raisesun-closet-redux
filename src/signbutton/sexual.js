import React, { useState } from 'react';
import style from '../common/signbutton/normal2.module.css';
import { useSelector } from 'react-redux';

const Normal2 = (props) => {
    // const dispatch = useDispatch();
    // const changeId = useSelector(state => state.validation.changeId);
    const switchSignIdError = useSelector(state => state.validation.switchSignIdError);
    const [focus, setFocus] = useState(false);
    const [sex, setSex] = useState('男');
    const name = props.name;
    const typeProps = props.types
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
                name="" id="userId"
                placeholder={name}
                value={sex}
                onChange={(e) => { setSex(e.target.value) }}
                onFocus={() => { handle_focus() }}
                onBlur={() => { handle_blur() }}
                style={focusStyle}
            />
            <span>{switchSignIdError}</span>
        </div>
    )
}

export default Normal2;
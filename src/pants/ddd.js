import React, { useState, useRef, useEffect } from 'react';
import style from './ddd.module.css';

const DD = () => {
    const [qq, setQq] = useState(false);
    const [mds, setMd] = useState(true);

    const mdRef = useRef();

    // useEffect(() => {

    // }, [mds])

    const cc = (e) => {
        e.stopPropagation();
        // setMd(false)
    }
    const aa = () => {
        setMd(false)
    }
    const mdstyle = { display: mds ? 'flex' : 'none' };

    return (
        <>
            <div className={style.md} ref={mdRef} onClick={aa} style={mdstyle}>
                <div className={style.inner} onClick={cc}></div>
            </div>
            <div onClick={() => { setQq(!qq) }}>asdf</div>
            <div>asdf</div>
            {
                qq &&
                <>
                    <h1>Q你媽個逼</h1>
                    <p>好Q好Q</p>
                </>

            }
        </>
    )
}




export default DD;
import React, { useState, useRef, useEffect } from 'react';
import style from './ddd.module.css';

const DD = () => {
    const [qq, setQq] = useState(false);
    const [mds, setMd] = useState(true);
    const [thousand, setThousand] = useState('');
    const [chan, setChan] = useState('');

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


    //千分位轉換
    // const numberWithCommas = (x) => {
    //     x = x.toString();
    //     var pattern = /(-?\d+)(\d{3})/;
    //     while (pattern.test(x))
    //         x = x.replace(pattern, "$1,$2");
    //     return x;
    // }

    const bb = (x) => {
        x = x.replace(/,/g, "");
        return x;
    }

    const addCommas = numa => numa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");

    const hrr = (e) => {
        setThousand(addCommas(removeNonNumeric(e.target.value)))

    }
    console.log(thousand);

    useEffect(() => {
        setChan(bb(thousand))
    }, [thousand]);


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
            <input type="text" className={style.inp} value={thousand}
                onInput={hrr} />
            <p>{chan}</p>
        </>
    )
}




export default DD;
import React, { useRef } from 'react';
import ForgetPass from './firstpage/forgetPass';
import SignIn from './firstpage/signin';
import Join from './firstpage/join';
import Nav from './firstpage/nav';
import Sec1 from './firstpage/sec1';
import Sec2 from './firstpage/sec2';
import Social from './firstpage/social';
import Sec3 from './firstpage/sec3';
import Sec4 from './firstpage/sec4';
import Sec5 from './firstpage/sec5';
import Sec6 from './firstpage/sec6';
import Sec7 from './firstpage/sec7';
import Sec8 from './firstpage/sec8';
import Footer from './common/footer';
import style from './index.module.css';
import s2C from './firstpage/sec2Content.json';
import s4C from './firstpage/sec4Content.json';
import { useSelector, useDispatch } from 'react-redux';
import { handleMd } from './store/signAction';

const Firstpage = (props) => {
    const mdToggle = useSelector(state => state.sign.rwdToggle);
    const dispatch = useDispatch();
    const md = { right: mdToggle ? '0' : '-100%' };

    //以下為各指定ref
    const wrap = useRef();
    const top = useRef();
    const about = useRef();
    const products = useRef();
    const services = useRef();
    const contact = useRef();
    const wrapMd = useRef();


    return (
        <div id={style.wrapper} ref={wrap}>
            <div className={style.md} ref={wrapMd} style={md} onClick={(e) => { dispatch(handleMd(e)) }}></div>
            <Nav
                all={{ about, products, services, contact, wrap }}
                refTop={top}
            />
            <Sec1 />
            <Sec2 cont1={s2C[0].title1} cont2={s2C[0].title2} cont3={s2C[0].content} ref1={about} />
            <Social />
            <Sec3 />
            <Sec4 cont1={s4C[0].title1} cont2={s4C[0].title2} cont3={s4C[0].content} ref2={products} />
            <Sec5 toTop={top} />
            <Sec6 ref3={services} />
            <Sec7 />
            <Sec8 ref4={contact} />
            <ForgetPass
            />
            <SignIn
            />
            <Join
            />
            <Footer toTop={top} />
        </div>

    );
}

export default Firstpage;
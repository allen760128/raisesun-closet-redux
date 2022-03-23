import React, { useEffect, useState } from 'react';
import style from './nav.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    handleSingToggle, handleRwdToggle, handleScrollabout,
    handleScrollserv, handleScrollcont, handleSignscroll,
} from '../store/signAction';


const Nav = (props) => {
    const signOpen = useSelector(state => state.sign.signOpen);
    const rwdToggle = useSelector(state => state.sign.rwdToggle);
    const local = useSelector(state => state.sign.local);
    const [navToggle, setNavtoggle] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //因offsetTop必須在函式內，故先定義一個函式包住window物件再dispatch進去
    const srcollAbout = () => {
        const scrollRef = props.all.about.current.offsetTop;
        window.scrollTo({ top: scrollRef, behavior: 'smooth' });
    }
    // const scrollPro=()=>{
    //     const scrollRef=props.all.products.current.offsetTop;
    //     window.scrollTo({top:scrollRef,behavior:'smooth'});
    // }

    const scrollServ = () => {
        const scrollRef = props.all.services.current.offsetTop;
        window.scrollTo({ top: scrollRef, behavior: 'smooth' });
    }
    const scrollCont = () => {
        const scrollRef = props.all.contact.current.offsetTop;
        window.scrollTo({ top: scrollRef, behavior: 'smooth' });
    }
    useEffect(() => {
        window.onscroll = (e) => {
            if (window.scrollY >= 300) {
                dispatch(handleSignscroll(e));
            }
        }

    }, [signOpen]);

    const handleDefault = (e) => {
        e.preventDefault();
    }
    console.log()
    //nav product小於969px加上onclick
    useEffect(() => {
        document.body.offsetWidth < 969 ? setNavtoggle(true) : setNavtoggle(false);
        window.onresize = () => {
            setNavtoggle(document.body.offsetWidth < 969 ? true : false);
        }
    }, []);
    const navClick = navToggle ? (e) => { handleClick(e) } : (e) => { e.preventDefault() };


    // useEffect(() => {
    //     if (local) { navigate('/signindata'); }
    // }, [local]);

    const [pantsClick, setPantsClick] = useState(false)
    const top = props.refTop;
    const navMd = { right: signOpen ? '0' : '-100%' };
    const menuLeft = { left: signOpen ? '-50px' : '0px', width: signOpen ? '80%' : '100%' };
    const angle1 = { transform: rwdToggle ? 'translateY(12px) rotate(45deg)' : 'translateY(0px) rotate(0deg)' };
    const angle3 = { transform: rwdToggle ? 'translateY(-12px) rotate(-45deg)' : 'translateY(0px) rotate(0deg)' };
    const angle2 = { opacity: rwdToggle ? '0' : '1' };
    const openopen = { right: rwdToggle ? '0' : '-100%' };
    const handleClick = (e) => {
        e.preventDefault();
        setPantsClick(!pantsClick);
    }
    const pantsClass = pantsClick ? style.bbDisNone : '';
    const pantsAClass = pantsClick ? style.bbAa : '';


    return (
        <div id={style.nav} ref={top}>
            <div className={style.rwdMenu} onClick={(e) => { dispatch(handleRwdToggle(e)) }}>
                <span style={angle1}></span>
                <span style={angle2}></span>
                <span style={angle3}></span>
            </div>
            <div className={style.menuWrap} style={openopen}>
                <ul className="menu" style={menuLeft}>
                    <li className={style.aa} onClick={(e) => { dispatch(handleScrollabout(e, srcollAbout())) }}><a href="#">I. About</a></li>
                    <li className={pantsClick ? ` ${style.bbHeight350}` : style.bb} onClick={navClick} ><a href="#">II. Products</a>
                        <ul className={pantsClick ? style.bbUl : ''}>
                            <li className={pantsClass} onClick={(e) => { dispatch(handleRwdToggle(e)) }}><Link to='/pants' className={pantsAClass}>Pants</Link></li>
                            <li className={pantsClass} onClick={(e) => { dispatch(handleRwdToggle(e)) }}><Link to='/pants' className={pantsAClass}>Vest</Link></li>
                            <li className={pantsClass} onClick={(e) => { dispatch(handleRwdToggle(e)) }}><Link to='/pants' className={pantsAClass}>Top</Link></li>
                            <li className={pantsClass} onClick={(e) => { dispatch(handleRwdToggle(e)) }}><Link to='/pants' className={pantsAClass}>Shorts</Link></li>
                            <li className={pantsClass} onClick={(e) => { dispatch(handleRwdToggle(e)) }}><Link to='/pants' className={pantsAClass}>Acces</Link></li>
                            <li className={pantsClass} onClick={(e) => { dispatch(handleRwdToggle(e)) }}><Link to='/pants' className={pantsAClass}>Jeans</Link></li>
                        </ul>
                    </li>
                    <li className={style.cc} onClick={(e) => { dispatch(handleScrollserv(e, scrollServ())) }}><a href="#">III. Services</a></li>
                    <li className={style.dd} onClick={(e) => { dispatch(handleScrollcont(e, scrollCont())) }}><a href="#">IV. Contact</a></li>
                    <li className={style.sign} onClick={(e) => { dispatch(handleSingToggle(e)) }}><a href="#">V. Sign In</a></li>
                </ul>
                {/* <SignIn styleLeft={signInLeft}/> */}
                {/* <div className={style.md} ref={MDToggle} style={mdToggle}></div> */}
            </div>
            <div className={style.navMd} style={navMd} onClick={(e) => { dispatch(handleSingToggle(e)) }}></div>
            <div className={style.logoWrap}>
                <div className={style.logo_line}></div>
                <div className={style.logo} style={{ backgroundImage: `url(img/logo1.jpg)` }}><Link to='/p2'></Link>
                    <h1>raisesun</h1>
                </div>
                <div className={style.logo_line}></div>
            </div>
        </div>
    );
}

export default Nav;
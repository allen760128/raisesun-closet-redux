import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './nav.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { handleRwdToggle, handleMd, handleLocalfalse, } from '../store/signAction';
import { useNavigate } from 'react-router-dom';
import { ConstructionOutlined } from '@mui/icons-material';

const Nav = (props) => {
    const signOpen = useSelector(state => state.sign.signOpen);
    const rwdToggle = useSelector(state => state.sign.rwdToggle);
    const [pantsClick, setPantsClick] = useState(false);
    const [navaaToggle, setNavaatoggle] = useState(false);
    let navigate = useNavigate();
    // const aboutto=useSelector(state=>state.sign.about);
    // const proto=useSelector(state=>state.sign.pro);
    const dispatch = useDispatch();

    const handleDefault = (e) => {
        e.preventDefault();
    }

    const top = props.refTop;
    const navMd = { right: rwdToggle ? '0' : '-100%' };
    // const menuLeft={left:signOpen?'-50px':'0px',width:signOpen?'80%':'100%'};
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




    //nav product小於969px加上onclick
    useEffect(() => {
        document.body.offsetWidth < 969 ? setNavaatoggle(true) : setNavaatoggle(false);
        window.onresize = () => {
            setNavaatoggle(document.body.offsetWidth < 969 ? true : false);
        }
    }, [navaaToggle]);
    const navClick = navaaToggle ? (e) => { handleClick(e) } : (e) => { e.preventDefault() };

    useEffect(() => {
        dispatch(handleLocalfalse());
    }, []);
    // const token = localStorage.getItem('token');
    // const handleRedirect = () => {
    //     if (token) {
    //         navigate('/p2');
    //     } else {
    //         navigate('/signin');
    //     }
    // }
    return (
        <div id={style.nav} ref={top}>
            <div className={style.rwdMenu} onClick={(e) => { dispatch(handleRwdToggle(e)) }}>
                <span style={angle1}></span>
                <span style={angle2}></span>
                <span style={angle3}></span>
            </div>
            <div className={style.menuWrap} style={openopen}>
                <div className={style.logoWrap}>
                    <div className={style.logo} style={{ backgroundImage: `url(img/logo1.jpg)` }}><a href="#" onClick={handleDefault}></a>
                        {/* <h1>raisesun</h1> */}
                    </div>
                </div>

                <ul className={style.menu}>
                    <li className={style.aa} onClick={(e) => { dispatch(handleRwdToggle(e)) }}><Link to='/#'>I. Raise Sun</Link></li>
                    <li className={pantsClick ? ` ${style.bbHeight350}` : style.bb} onClick={navClick} ><a href="#">II. Products</a>
                        <ul className={pantsClick ? style.bbUl : ''}>
                            <li className={pantsClass} onClick={(e) => { e.preventDefault() }}><Link to='/pants' className={pantsAClass}>Pants</Link></li>
                            <li className={pantsClass} onClick={(e) => { e.preventDefault() }}><Link to='/pants' className={pantsAClass}>Vest</Link></li>
                            <li className={pantsClass} onClick={(e) => { e.preventDefault() }}><Link to='/pants' className={pantsAClass}>Top</Link></li>
                            <li className={pantsClass} onClick={(e) => { e.preventDefault() }}><Link to='/pants' className={pantsAClass}>Shorts</Link></li>
                            <li className={pantsClass} onClick={(e) => { e.preventDefault() }}><Link to='/pants' className={pantsAClass}>Acces</Link></li>
                            <li className={pantsClass} onClick={(e) => { e.preventDefault() }}><Link to='/pants' className={pantsAClass}>Jeans</Link></li>
                        </ul>
                    </li>
                    <li className={style.cc} onClick={handleDefault}><a href="#">III. Services</a></li>
                    <li className={style.dd} onClick={handleDefault}><a href="#">IV. Contact</a></li>
                    <li className={style.sign}><Link to='/signin'>V. Sign In</Link></li>
                </ul>

                {/* <SignIn styleLeft={signInLeft}/> */}
                {/* <div className={style.md} ref={MDToggle} style={mdToggle}></div> */}
            </div>
            <div className={style.navMd} style={navMd} onClick={(e) => { dispatch(handleMd(e)) }}></div>

        </div>
    );
}

export default Nav;
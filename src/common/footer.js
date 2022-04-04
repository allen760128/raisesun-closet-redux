import React from 'react';
import style from './footer.module.css';
import { useDispatch } from 'react-redux';
import { handleTop } from '../store/signAction';

const Footer = () => {
    const dispatch = useDispatch();
    const scrollTop = () => {
        // const top=props.toTop.current.offsetTop;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div id={style.footer}>
            <div className={style.topWrap}>
                <div className={style.innerWrap}>
                    <div className={style.inner}>
                        <a href="/#" className={style.ftop} onClick={(e) => { dispatch(handleTop(e, scrollTop())) }}>
                            <img src="img/topbtn_04.png" alt='' />
                        </a>
                    </div>
                </div>
            </div>
            <div className={style.socialMedia}>
                <ul>
                    <li><a href="https://www.facebook.com">FaceBook</a></li>
                    <li><a href="https://twitter.com/?lang=zh-Hant">Twitter</a></li>
                    <li><a href="https://www.instagram.com">Instagram</a></li>
                    <li><a href="https://www.pinterest.com">Pinterest</a></li>
                    <li><a href="https://www.pinterest.com">Privacy Policy</a></li>
                </ul>
            </div>
            <h2>COPYRIGHTⓒ 2021 RaiseSun International Corporation ALL RIGHT RESERVED</h2>

        </div>
    );
}

export default Footer;
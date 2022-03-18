import React, { useState, useEffect } from 'react';
import socialData from './socialData.json';
import style from './social.module.css';
import '../aos-master/dist/aos.css';
import AOS from 'aos';

const Social = () => {
    const [mouseOver, setMouseOver] = useState(false);
    const [mouseOverA, setMouseOverA] = useState(false);
    useEffect(() => {
        AOS.init();
    }, []);
    const handleMouseOver = (id) => {
        setMouseOver(id);
        setMouseOverA(id);
    }
    const handleMouseLeave = () => {
        setMouseOver(false);
        setMouseOverA(false);
    }
    const mB = { top: mouseOver ? '0' : '-100px', opacity: mouseOver ? '1' : '0' };
    const mU = { top: mouseOver ? '0' : '100px', opacity: mouseOver ? '1' : '0' };
    const mA = { opacity: mouseOver ? '0' : '1' };
    return (
        <div id={style.social}>
            <div className={style.link} data-aos="fade-up" data-aos-duration="3000">
                <ul className={style.li}>
                    {
                        socialData.map(social => (
                            <li key={social.id} onMouseEnter={() => { handleMouseOver(social.id) }} onMouseLeave={handleMouseLeave}>
                                {
                                    social.id == mouseOver ? <i style={mB}></i> : <i></i>
                                }
                                <i style={{ backgroundImage: `url(img/${social.backImg})` }}
                                >{social.title}</i>
                                {
                                    social.id == mouseOver ?
                                        <a href={social.link} className={style.f_u} style={mU} target="_blank">{social.title}</a> :
                                        <a href={social.link} className={style.f_u} target="_blank">{social.title}</a>
                                }

                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    );
}

export default Social;
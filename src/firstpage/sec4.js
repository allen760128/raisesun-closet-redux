import React, { useEffect } from 'react';
import style from './sec4.module.css';
import '../aos-master/dist/aos.css';
import AOS from 'aos';

const Sec4 = (props) => {
    useEffect(() => {
        AOS.init();
    }, []);
    const refproducts = props.ref2;
    return (
        <div id={style.about} ref={refproducts}>
            <div className={style.us}>
                <div className={style.aboutUs} data-aos="fade-right">
                    <h2>{props.cont1}<br /><span>{props.cont2}</span><br /></h2>
                </div>
                <div className={style.aboutUsContent} data-aos="fade-left">
                    <h3>{props.cont3}</h3>
                </div>

            </div>


        </div>
    );
}

export default Sec4;
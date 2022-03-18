import React, { useEffect } from 'react';
import style from './sec6.module.css';
import '../aos-master/dist/aos.css';
import AOS from 'aos';

const Sec6 = (props) => {
    useEffect(() => {
        AOS.init();
    }, []);
    const refservice = props.ref3;
    return (
        <div id={style.serv} ref={refservice}>
            <div className={style.us}>
                <div className={style.aboutUs} data-aos="fade-right">
                    <h2>III. Services<br /><span>服務方式</span><br /></h2>
                </div>
                <div className={style.aboutUsContent} data-aos="fade-left">
                    <ul>
                        <li><span><img src="img/num_1.png" /></span> 我們採用貨到付款的方式，呈上最優質的服務</li>
                        <li><span><img src="img/num_2.png" /></span> 配合各項優惠，不定期實施免運費服務</li>
                        <li><span><img src="img/num_3.png" /></span> 台灣地區分佈25間實體店面</li>
                        <li><span><img src="img/num_4.png" /></span> 24小時到貨服務，中午前下單，隔天收貨</li>
                    </ul>
                </div>

            </div>
            <div className={style.aboutNav} data-aos="fade-up" data-aos-duration="3000">
                <ul>
                    <li><img src="img/serv_1.png" alt="" /></li>
                    <li><img src="img/serv_2.png" alt="" /></li>
                    <li><img src="img/serv_3.png" alt="" /></li>
                    <li><img src="img/serv_4.png" alt="" /></li>
                </ul>
            </div>
        </div>
    );
}

export default Sec6;
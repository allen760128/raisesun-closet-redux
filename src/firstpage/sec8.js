import React, { useEffect } from 'react';
import style from './sec8.module.css';
import '../aos-master/dist/aos.css';
import AOS from 'aos';
import Carousell from '../common/carousell';

const Sec8 = (props) => {
    useEffect(() => {
        AOS.init();
    }, []);
    const refcontact = props.ref4;
    return (
        <div id={style.contact} ref={refcontact}>
            <div className={style.contactWrap}>
                <div className={style.contactUs} data-aos="fade-right">
                    <h2>IV. Contact Us<br /><span>連絡我們</span><br /></h2>
                </div>
                <div className={style.contactUsContent} data-aos="fade-left">
                    <ul>
                        <li><span><img src="img/contact_1.png" /></span> <div className={style.contcont}>躍昇國際台灣總公司(Address):<br />台灣台北市中正區民權西路二段350號12號-3</div></li>
                        <li><span><img src="img/contact_2.png" /></span> <div className={style.contcont}>聯絡電話 (Telephone):<br />+886 2346 5648</div></li>
                        <li><span><img src="img/contact_3.png" /></span> <div className={style.contcont}>電子信箱 (E-mail):<br /> RaiseSunCop@hinet.con.tw</div></li>
                        <li><span><img src="img/contact_4.png" /></span> <div className={style.contcont}>服務時間 (Service time):<br />周一至周五 09:00~12:30 - 13:30~18:00</div></li>
                    </ul>
                </div>
            </div>
            {/* <div style={{ width: '100%' }}>
                <Carousell ></Carousell>
            </div> */}

        </div>
    );
}

export default Sec8;
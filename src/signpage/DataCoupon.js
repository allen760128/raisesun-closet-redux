import React, { useState } from 'react';
import style from './signinData.module.css';
import { useDispatch, useSelector } from 'react-redux';

const DataCoupon = (props) => {
    const datali = useSelector(state => state.validation.detailId);
    const idSwitch = { display: 4 === datali ? 'block' : 'none' };
    const [coupon, setCoupon] = useState(1);
    return (
        <div className={`${style.id_4} ${style.id_wrap}`} style={idSwitch}>
            <div className={style.top}>
                {
                    coupon === 1 ? <span style={{ color: 'rgb(219, 61, 61)' }} onClick={() => { setCoupon(1) }}>可使用(1)</span>
                        :
                        <span onClick={() => { setCoupon(1) }}>可使用(1)</span>
                }
                <i></i>
                {
                    coupon === 2 ? <span style={{ color: 'rgb(219, 61, 61)' }} onClick={() => { setCoupon(2) }}>已失效(1)</span>
                        :
                        <span onClick={() => { setCoupon(2) }}>已失效(1)</span>
                }
            </div>
            <div className={style.content_1} style={coupon === 1 ? { display: 'block' } : { display: 'none' }}>
                <ul className={style.c1ul}>
                    <li>
                        <div className={style.left}>
                            <h3>VIP03LOVE</h3>
                        </div>
                        <div className={style.right}>
                            <span>限用一次</span>
                            <h3>【會員專屬】3月299免運券</h3>
                            <p>優惠至<span>2022/04/01 00:00</span>截止</p>
                        </div>
                    </li>
                    <li>
                        <div className={style.left}>
                            <h3>VIP03LOVE</h3>
                        </div>
                        <div className={style.right}>
                            <span>限用一次</span>
                            <h3>【會員專屬】3月299免運券</h3>
                            <p>優惠至<span>2022/04/01 00:00</span>截止</p>
                        </div>
                    </li>

                </ul>

            </div>
            <div className={style.content_2} style={coupon === 2 ? { display: 'block' } : { display: 'none' }}>
                <ul className={style.c2ul}>
                    <li>
                        <div className={style.left}>
                            <h3>VIP13LOVE</h3>
                        </div>
                        <div className={style.right}>
                            <span>已失效</span>
                            <h3>【會員專屬】1月299免運券</h3>
                            <p>優惠至<span>2022/01/31 00:00</span>截止</p>
                        </div>
                    </li>
                    <li>
                        <div className={style.left} >
                            <h3>VIP05LOVE</h3>
                        </div>
                        <div className={style.right}>
                            <span>已失效</span>
                            <h3>【會員專屬】2月399免運券</h3>
                            <p>優惠至<span>2022/02/28 00:00</span>截止</p>
                        </div>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default DataCoupon;
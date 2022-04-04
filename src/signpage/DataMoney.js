import React from 'react';
import style from './signinData.module.css';
import { useSelector } from 'react-redux';

const DataMoney = (props) => {
    const datali = useSelector(state => state.validation.detailId);
    const idSwitch = { display: 3 === datali ? 'block' : 'none' };
    return (
        <div className={`${style.id_3} ${style.id_wrap}`} style={idSwitch}>
            <div className={style.money}>
                <h3>現有購物金</h3>
                <span>100</span>
            </div>
            <div className={style.bottom_3}>
                <span>購物金紀錄</span>
                <ul className={style.id3ul_1}>
                    <li>日期</li>
                    <li>購物金項目</li>
                    <li>購物金款項</li>
                    <li>到期日</li>
                    <li>購物金餘額</li>
                </ul>
                <div className={style.bottomContent}>
                    <ul className={style.id3ul_2}>
                        <li>2022/02/20 9:30pm</li>
                        <li>新加入會員購物金</li>
                        <li>+ 100</li>
                        <li>2022/03/22</li>
                        <li>100</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DataMoney;
import React, { useState } from 'react';
import style from './signinData.module.css';
import { useDispatch, useSelector } from 'react-redux';

const DataOrder = (props) => {
    const datali = useSelector(state => state.validation.detailId);
    const idSwitch = { display: 6 === datali ? 'block' : 'none' };
    return (
        <div className={`${style.id_6} ${style.id_wrap}`} style={idSwitch}>
            <div className={style.orderWrap}>
                <h3>你沒有任何訂單</h3>
                <p>你在這個商店沒有訂單。</p>
                <input type="button" name="" id="" value="繼續購物" />
            </div>
        </div>
    )
}

export default DataOrder;
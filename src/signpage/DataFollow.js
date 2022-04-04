import React, { useState } from 'react';
import style from './signinData.module.css';
import { useSelector } from 'react-redux';
import { BsHeart } from "react-icons/bs";

const DataFollow = (props) => {
    const datali = useSelector(state => state.validation.detailId);
    const idSwitch = { display: 7 === datali ? 'block' : 'none' };
    return (
        <div className={`${style.id_7} ${style.id_wrap}`} style={idSwitch}>
            <div className={style.followWrap}>
                <BsHeart></BsHeart>
                <p>目前沒有追蹤商品</p>
                <input type="button" name="" id="" value="回到商店" />
            </div>
        </div>
    )
}

export default DataFollow;
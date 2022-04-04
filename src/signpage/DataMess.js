import React from 'react';
import style from './signinData.module.css';
import { useSelector } from 'react-redux';

const DataMess = (props) => {
    const datali = useSelector(state => state.validation.detailId);
    const idSwitch = { display: 5 === datali ? 'block' : 'none' };
    return (
        <div className={`${style.id_5} ${style.id_wrap}`} style={idSwitch}>
            <div className={style.messWrap}>
                <div className={style.messTop}>Raise Sun</div>
                <div className={style.messBottom}>
                    <h3>目前尚未收到新訊息！</h3>
                    <input type="text" placeholder="請輸入訊息" />
                    <div className={style.comfirm_5}>
                        <input type="button" value="加入圖片" />
                        <input type="button" value="傳送" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataMess;
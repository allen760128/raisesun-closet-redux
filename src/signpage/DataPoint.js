import React from 'react';
import style from './signinData.module.css';
import { useSelector } from 'react-redux';
import { BsFillMegaphoneFill } from "react-icons/bs";


const DataPoint = (props) => {
    const datali = useSelector(state => state.validation.detailId);
    const idSwitch = { display: 2 === datali ? 'block' : 'none' };
    return (

        <div className={`${style.id_2} ${style.id_wrap}`} style={idSwitch}>
            <div className={style.top}>
                <div className={style.topLeft}>
                    <div className={style.left_1}>
                        <BsFillMegaphoneFill></BsFillMegaphoneFill>
                    </div>
                    <div className={style.left_2}>
                        <h3>現有總點數</h3>
                        <div className={style.inner}>
                            <span>0</span>
                            <p>點</p>
                        </div>

                    </div>
                </div>
                <div className={style.topRight}>
                    <div className={style.inner}>
                        <a href="/#">點數規則說明</a>
                    </div>
                </div>
            </div>
            <div className={style.bottom}>
                <span>點數紀錄</span>
                <ul className={style.id2ul}>
                    <li>日期</li>
                    <li>點數更動原因</li>
                    <li>點數</li>
                    <li>到期日</li>
                    <li>現有總點數</li>
                </ul>
                <div className={style.bottomContent}>
                    <span>沒有任何紀錄</span>
                </div>
            </div>
        </div>

    )
}

export default DataPoint;
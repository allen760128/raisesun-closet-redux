import React, { useState, useEffect } from 'react';
import style from './signinData.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillFilePersonFill, BsAward, BsFillFlagFill, BsFillPencilFill } from "react-icons/bs";
import Name from '../signbutton/name';
import Email from '../signbutton/email';
import Phone from '../signbutton/phone';
import Sexual from '../signbutton/sexual';
import Birth from './dataButton/birth';
import Button1 from './dataButton/button1';
import Button2 from './dataButton/button2';
import Location from '../signbutton/location';
import City from '../signbutton/city';
import Zipcode from '../signbutton/zipcode';
import Address from '../signbutton/address';
import { fetch_updateuser } from '../store/validationActions';

const DataInfo = (props) => {
    const dispatch = useDispatch();
    const fakedata = useSelector(state => state.validation.fakedata);
    const changeName = useSelector(state => state.validation.changeName);
    const changeEmail = useSelector(state => state.validation.changeEmail);
    const changePhone = useSelector(state => state.validation.changePhone);
    const changelocation = useSelector(state => state.validation.changelocation);
    const changeCity = useSelector(state => state.validation.changeCity);
    const changeZipcode = useSelector(state => state.validation.changeZipcode);
    const changeAddress = useSelector(state => state.validation.changeAddress);
    const datali = useSelector(state => state.validation.detailId);
    const handleDataSubmit = () => {
        let item = {
            changeName, changeEmail, changePhone, changelocation, changeCity,
            changeZipcode, changeAddress
        }
        dispatch(fetch_updateuser(item));
    }

    const idSwitch = { display: 1 === datali ? 'block' : 'none' };

    return (
        <div className={`${style.id_1}  ${style.id_wrap}`} style={idSwitch}>
            <div className={style.top}>
                <div className={style.left}>
                    <div className={style.info}>
                        <div className={style.top_1}>
                            <BsFillFilePersonFill value={{ className: 'react_icons' }} />

                            <h3>{fakedata.username}</h3>
                            <span>一般會員</span>
                        </div>
                        <div className={style.bottom_1}>
                            <BsAward />
                            <span>升級至高級會員</span>
                            <h3>12個月內累積消費額達NT$2000即可升級</h3>
                            <a href="#">查看所有會員等級規則</a>
                        </div>
                    </div>
                    <div className={style.recommend}>
                        <div className={style.top_1}>
                            <BsFillFilePersonFill value={{ className: 'react_icons' }} />

                            <h3>會員推薦優惠</h3>
                        </div>
                        <div className={style.bottom_1}>
                            <h3>會員分享送購物金: 複製並分享連結給朋友，推薦對象和你將獲得購物金。<span>活動規則說明</span></h3>

                            <a href="#">https://www.lab52.com.tw/?sl-mref=1m949</a>
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.accumulation}>
                        <div className={style.top_2}>
                            <BsFillFlagFill />

                            <h3>12 個月內累積消費額</h3>
                        </div>
                        <div className={style.bottom_2}>
                            <div className={style.accuWrap}>
                                <h4>NT$200</h4>
                                <h4>差 NT$1800 升級</h4>
                            </div>
                            <div className={style.accuLineWrap}>
                                <div className={style.line}>
                                    <div className={style.lineInner}></div>
                                </div>
                            </div>
                            <h3>自動更新時間為訂單完成付款後的隔日凌晨，若因取消訂單或退貨未達成升級條件則不會升級。</h3>

                        </div>
                    </div>
                </div>
            </div>
            <form action="">
                <div className={style.top_3}>
                    <BsFillPencilFill />
                    <h3>編輯會員資料</h3>
                </div>
                <div className={style.bottom_3}>
                    <div className={style.left_1}>
                        <div className={style.lebelWrap}>
                            <label htmlFor="">姓名</label>
                            <div className={style.dataInput}>
                                <Name></Name>
                            </div>
                        </div>
                        <div className={style.lebelWrap}>
                            <label htmlFor="">電子郵件</label>
                            <div className={style.dataInput}>
                                <Email></Email>
                            </div>
                        </div>
                        <div className={style.lebelWrap}>
                            <label htmlFor="">手機號碼</label>
                            <div className={style.dataInput}>
                                <Phone ></Phone>
                            </div>
                        </div>
                        <div className={style.lebelWrap}>
                            <label htmlFor="">性別</label>
                            <div className={style.dataInput}>
                                <Sexual types={'男'}></Sexual>
                            </div>
                        </div>
                        <div className={style.lebelWrap}>
                            <label htmlFor="">生日</label>
                            <div className={style.dataInput}>
                                <Birth types={'date'}></Birth>
                            </div>
                        </div>
                    </div>
                    <div className={style.right_1}>
                        <div className={style.lebelWrap}>
                            <label htmlFor="">電話號碼</label>
                            <div className={style.dataInput}>
                                <Phone ></Phone>
                            </div>
                        </div>
                        <div className={style.lebelWrap}>
                            <label htmlFor="">收件人</label>
                            <div className={style.dataInput}>
                                <Name></Name>
                            </div>
                        </div>
                        <div className={style.lebelWrap}>
                            <label htmlFor="">收件人電話</label>
                            <div className={style.dataInput}>
                                <Phone ></Phone>
                            </div>
                        </div>
                        <div className={style.lebelWrap}>
                            <label htmlFor="">送貨地點</label>
                            <div className={style.dataInput}>
                                <Location></Location>
                            </div>
                        </div>
                        <div className={style.lebelWrap}>
                            <label htmlFor="">街道/巷弄</label>
                            <div className={style.dataInput}>
                                <City></City>
                            </div>
                        </div>
                        <div className={style.lebelWrap}>
                            <label htmlFor="">區碼</label>
                            <div className={style.dataInput}>
                                <Zipcode></Zipcode>
                            </div>
                        </div>
                        <div className={style.lebelWrap}>
                            <label htmlFor="">地址</label>
                            <div className={style.dataInput}>
                                <Address></Address>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={style.comfirmWrap}>
                    <div className={style.button_1}>
                        <Button1 types={'submit'} name={'取消'}></Button1>
                    </div>
                    <div className={style.button_1}>
                        <Button2 types={'submit'} name={'儲存變更'} sub={handleDataSubmit}></Button2>
                    </div>
                </div>
            </form>

        </div>

    )
}

export default DataInfo;
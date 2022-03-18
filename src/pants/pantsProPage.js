import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangePic, fetchPantspage } from '../store/proActions';
import style from './pantspage.module.css';
import CircularIndeterminate from '../common/CircularProgress';
import Nav from '../common/nav';
import Footer from '../common/footer';
import { useParams } from 'react-router-dom';
import pantsporData from '../common/propicData.json';
import Select6 from '../common/select6';
import Select3 from '../common/select3';
import Select4 from '../common/select4';
import Scrum from '../common/scrum';


const Pantspropage = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.product.loading);
    const error = useSelector(state => state.product.error);
    const spic = useSelector(state => state.product.spic);
    const cartImg = useSelector(state => state.product.cartImg);
    const pantsData = useSelector(state => state.product.pantsData);
    const pageData = useSelector(state => state.product.pageData);
    const rate = useSelector(state => state.product.rate);
    const [select, setSelect] = useState(1);
    const [imgToggle, setImg] = useState(true);
    const [marginToggle, setMargin] = useState(1);
    const middleRef = useRef();
    const { id } = useParams();
    const middleImg = { display: imgToggle ? 'block' : 'none' };
    // const [proImg, setProimg] = useState(true);
    // const middleMargin={marginLeft:}

    useEffect(() => {
        window.scrollTo({ top: 0 });
        dispatch(fetchPantspage(id));
    }, []);

    // useEffect(() => {
    //     spic === '' ? setProimg(pageData.image) : setProimg(cartImg);
    // }, [cartImg]);
    console.log(id)

    const img = [{ 'id': 1, 'image': 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
    { 'id': 2, 'image': 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg' },
    { 'id': 3, 'image': 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg' },
    { 'id': 4, 'image': 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg' }];

    const middleSelect = [{ 'id': 1, 'title': '商品描述' },
    { 'id': 2, 'title': '送貨及付款方式' },
    { 'id': 3, 'title': '顧客評價' }];


    // console.log(ra)
    let ratingArray = [];
    let x = 0;
    let pageRate = rate;
    let rating = Math.floor(pageRate);

    for (let i = 0; i < rating; i++) {
        x = ratingArray.push(i);
    }

    const handleSelect = (x) => {
        setSelect(x);
        x === 1 ? setImg(true) : setImg(false);
        setMargin(x);
        window.scrollTo({ top: middleRef.current.offsetTop - 50, behavior: 'smooth' });
    }
    // useEffect(() => {
    //     const x = middleRef.current;
    //     window.scrollTo({ top: x, });
    //     { console.log(x) }
    // }, []);
    console.log();
    const middleMargin = { marginLeft: -(marginToggle - 1) * 100 + '%' };
    return (
        <div className={style.pantsWrapper}>
            <Nav />
            <Scrum></Scrum>
            {
                loading ? <div className={style.circleBox}><CircularIndeterminate /></div>
                    : error ? <h2>{error}</h2>
                        :
                        <div className={style.pantsproWrap}>
                            <div className={style.top}>
                                <div className={style.left}>
                                    <div className={style.smallPic}>
                                        <ul>{img.map((sPic, inx) => (
                                            sPic.id === spic + 1 ?
                                                <li style={{ border: '2px solid rgb(255, 45, 45)' }} onClick={(e) => { dispatch(handleChangePic(e, inx, sPic.image)) }} key={sPic.id}>
                                                    <img src={sPic.image} alt="" />
                                                </li> :
                                                <li onClick={(e) => { dispatch(handleChangePic(e, inx, sPic.image)) }} key={sPic.id}>
                                                    <img src={sPic.image} alt="" />
                                                </li>
                                        ))
                                        }

                                        </ul>
                                    </div>
                                    <div className={style.bigPic}>
                                        <img src={pageData.image} alt="" />
                                    </div>
                                    <div className={style.shareTo}>
                                        <span>分享到:</span>
                                        <ul>
                                            <li><a href="https://line.me/zh-hant/" target='_blank'><img src="./img/social_line.png" alt="" /></a></li>
                                            <li><a href="https://www.facebook.com/" target='_blank'><img src="./img/social_facebook.png" alt="" /></a></li>
                                            <li><a href="https://www.instagram.com/" target='_blank'><img src="./img/social_instagram.png" alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={style.right}>
                                    <div className={style.toCartContent}>
                                        <div className={style.title}>
                                            <h3>{pageData.title}</h3>
                                            <p>全店，全館消費滿699免運</p>
                                            <span>NT${pageData.price}</span>
                                            <div className={style.rate}>
                                                <ul>{
                                                    ratingArray.map((ratingArray, inx) => (
                                                        <li key={inx}>
                                                            <img src="./img/start.png" alt="" />
                                                        </li>
                                                    ))}
                                                </ul>
                                                <p>{rate}分</p>
                                            </div>
                                        </div>
                                        <div className={style.number}>
                                            <form action="">
                                                {/* <label htmlFor="">潔牙任務組</label>
                                                <select name="" id="">
                                                    <option value="">一入</option>
                                                    <option value="">二入</option>
                                                    <option value="">三入</option>
                                                </select>
                                                <label htmlFor="">數量</label>
                                                <input type="number" className={style.numinp} min="1" max="100" /> */}
                                                <div className={style.formWrap}>
                                                    <Select3></Select3>
                                                    <Select4></Select4>
                                                </div>
                                                <div className={style.conform}>
                                                    <input type="button" value="加入購物車" />
                                                    <input type="button" value="立即購買" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.middle}>
                                <div className={style.middleTop}>
                                    <ul ref={middleRef}>{middleSelect.map(c =>
                                        c.id === select ?
                                            <li key={c.id} onClick={() => { handleSelect(c.id) }}><a href='#' className={style.active} onClick={(e) => { e.preventDefault() }}>{c.title}</a></li>
                                            :
                                            <li key={c.id} onClick={() => { handleSelect(c.id) }}><a href='#' onClick={(e) => { e.preventDefault() }}>{c.title}</a></li>
                                    )}
                                    </ul>
                                </div>
                                <div className={style.middleBottom}>
                                    <div className={style.middlePos}>
                                        <ul style={middleMargin}>
                                            <li ><img src={`./img/proImg/${id}.jpg`} style={middleImg} alt="" /></li>
                                            <li>
                                                <ul>
                                                    <li>
                                                        <h3 className={style.h3Font}>送貨方式</h3>
                                                        <p>宅配<br />
                                                            宅配(貨到付款)<br />
                                                            全家 取貨不付款 (B2C)<br />
                                                            7-11 取貨不付款 (B2C)<br />
                                                            全家 取貨付款 (B2C<br />
                                                            7-11 取貨付款 (B2C)</p>
                                                    </li>
                                                    <li>
                                                        <h3 className={style.h3Font}>付款方式</h3>
                                                        <p>信用卡（支援國內外Visa, Master, JCB）<br />
                                                            LINE Pay<br />
                                                            ATM 虛擬帳號<br />
                                                            7-11 B2C取貨付款<br />
                                                            全家取貨付款<br />
                                                            貨到付款</p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h3 className={style.h3Font}>綜合評價</h3>
                                                <ul>
                                                    <li>
                                                        <div className={style.commentWrap}>
                                                            <h3>1個評價</h3>
                                                            {/* <div className={style.inner} ></div> */}
                                                            <ul>{
                                                                ratingArray.map((ratingArray, inx) => (
                                                                    <li key={inx}>
                                                                        <img src="./img/start.png" alt="" />
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <p>{rate}分</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <ul className={style.titleWrap}>
                                                            <li>5分</li>
                                                            <li>4分</li>
                                                            <li>3分</li>
                                                            <li>2分</li>
                                                            <li>1分</li>
                                                        </ul>
                                                        <ul className={style.scoreWrap}>
                                                            <li><span></span>100%</li>
                                                            <li><span></span>0%</li>
                                                            <li><span></span>0%</li>
                                                            <li><span></span>0%</li>
                                                            <li><span></span>0%</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className={style.storeWrap}>
                                                            <Select6></Select6>
                                                        </div>

                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
            }

            <Footer />
        </div >
    )
}

export default Pantspropage;

{/* <span style="margin:0 0 0 10px;display:inline-block;width: 60px;font-size:14px; border-radius: 5px; height: 20px; line-height: 20px; color: #fff; background-color:#00E3E3">New</span> */ }
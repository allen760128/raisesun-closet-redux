import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangePic, fetchPantspage } from '../store/proActions';
import style from './pantspage.module.css';
import CircularIndeterminate from '../common/CircularProgress';
import Nav from '../common/nav';
import Footer from '../common/footer';
import { useParams } from 'react-router-dom';
// import pantsporData from '../common/propicData.json';
import Select6 from '../common/select6';
import Select3 from '../common/select3';
import Select4 from '../common/select4';
import Scrum from '../common/scrum';


const Pantspropage = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.product.loading);
    const error = useSelector(state => state.product.error);
    const spic = useSelector(state => state.product.spic);
    // const cartImg = useSelector(state => state.product.cartImg);
    // const pantsData = useSelector(state => state.product.pantsData);
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


    const img = [{ 'id': 1, 'image': 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
    { 'id': 2, 'image': 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg' },
    { 'id': 3, 'image': 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg' },
    { 'id': 4, 'image': 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg' }];

    const middleSelect = [{ 'id': 1, 'title': '????????????' },
    { 'id': 2, 'title': '?????????????????????' },
    { 'id': 3, 'title': '????????????' }];


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
                                        <span>?????????:</span>
                                        <ul>
                                            <li><a href="https://line.me/zh-hant/" rel="noreferrer" target='_blank'><img src="./img/social_line.png" alt="" /></a></li>
                                            <li><a href="https://www.facebook.com/" rel="noreferrer" target='_blank'><img src="./img/social_facebook.png" alt="" /></a></li>
                                            <li><a href="https://www.instagram.com/" rel="noreferrer" target='_blank'><img src="./img/social_instagram.png" alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={style.right}>
                                    <div className={style.toCartContent}>
                                        <div className={style.title}>
                                            <h3>{pageData.title}</h3>
                                            <p>????????????????????????699??????</p>
                                            <span>NT${pageData.price}</span>
                                            <div className={style.rate}>
                                                <ul>{
                                                    ratingArray.map((inx) => (
                                                        <li key={inx}>
                                                            <img src="./img/start.png" alt="" />
                                                        </li>
                                                    ))}
                                                </ul>
                                                <p>{rate}???</p>
                                            </div>
                                        </div>
                                        <div className={style.number}>
                                            <form action="">
                                                {/* <label htmlFor="">???????????????</label>
                                                <select name="" id="">
                                                    <option value="">??????</option>
                                                    <option value="">??????</option>
                                                    <option value="">??????</option>
                                                </select>
                                                <label htmlFor="">??????</label>
                                                <input type="number" className={style.numinp} min="1" max="100" /> */}
                                                <div className={style.formWrap}>
                                                    <Select3></Select3>
                                                    <Select4></Select4>
                                                </div>
                                                <div className={style.conform}>
                                                    <input type="button" value="???????????????" />
                                                    <input type="button" value="????????????" />
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
                                            <li key={c.id} onClick={() => { handleSelect(c.id) }}><a href='/#' className={style.active} onClick={(e) => { e.preventDefault() }}>{c.title}</a></li>
                                            :
                                            <li key={c.id} onClick={() => { handleSelect(c.id) }}><a href='/#' onClick={(e) => { e.preventDefault() }}>{c.title}</a></li>
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
                                                        <h3 className={style.h3Font}>????????????</h3>
                                                        <p>??????<br />
                                                            ??????(????????????)<br />
                                                            ?????? ??????????????? (B2C)<br />
                                                            7-11 ??????????????? (B2C)<br />
                                                            ?????? ???????????? (B2C<br />
                                                            7-11 ???????????? (B2C)</p>
                                                    </li>
                                                    <li>
                                                        <h3 className={style.h3Font}>????????????</h3>
                                                        <p>???????????????????????????Visa, Master, JCB???<br />
                                                            LINE Pay<br />
                                                            ATM ????????????<br />
                                                            7-11 B2C????????????<br />
                                                            ??????????????????<br />
                                                            ????????????</p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h3 className={style.h3Font}>????????????</h3>
                                                <ul>
                                                    <li>
                                                        <div className={style.commentWrap}>
                                                            <h3>1?????????</h3>
                                                            {/* <div className={style.inner} ></div> */}
                                                            <ul>{
                                                                ratingArray.map((inx) => (
                                                                    <li key={inx}>
                                                                        <img src="./img/start.png" alt="" />
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <p>{rate}???</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <ul className={style.titleWrap}>
                                                            <li>5???</li>
                                                            <li>4???</li>
                                                            <li>3???</li>
                                                            <li>2???</li>
                                                            <li>1???</li>
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


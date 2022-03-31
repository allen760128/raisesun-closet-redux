import React, { useState, useEffect, useRef } from 'react';
import style from './pants.module.css';
import CataPro from '../common/cataPro';
import CataSort from '../common/cataSort';
import Catacart from '../common/catacart';
import { Link } from 'react-router-dom';
import { fetchPantsData, handleChangePage, handleCart, handlePassData } from '../store/proActions';
import { useDispatch, useSelector } from 'react-redux';
import CircularIndeterminate from '../common/CircularProgress';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PantsContent = () => {
    const dispatch = useDispatch();
    const pantsData = useSelector(state => state.product.pantsData);
    const totalData = useSelector(state => state.product.originData);
    const loading = useSelector(state => state.product.loading);
    const error = useSelector(state => state.product.error);
    const changeValue = useSelector(state => state.product.changeValue);
    const numChange = useSelector(state => state.product.numChange);
    // const cartValue = useSelector(state => state.product.cartValue);
    // const cartId = useSelector(state => state.product.cartId);
    const { id } = useParams();

    const [resize, setResize] = useState(true);

    //text
    // async function fetch() {
    //     try {
    //         const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    //         const resData = res.data;
    //         console.log(resData);
    //         // dispatch(test(resData));
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }


    useEffect(() => {
        // fetch()
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        dispatch(fetchPantsData());
    }, []);
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [changeValue]);



    useEffect(() => {
        setResize(document.body.offsetWidth >= 768 ? 480 : 570);
        window.onresize = () => {
            setResize(document.body.offsetWidth >= 768 ? 480 : 570);
        }
    }, []);
    const dataPage = Math.ceil(totalData.map(c => c).length / (numChange * 3));
    //此處造一個空陣列，並把所有頁數個別排進陣列
    let dataPage2 = [];
    let y = 0;
    for (let i = 0; i < dataPage; i++) {
        y = dataPage2.push(i);
    }


    //個數調整
    // const totleHeight=Math.ceil(pantsData.length/3);
    const heightSwitch = { height: numChange * resize + 'px' };


    //移動頁長換頁
    const moveTop = { top: changeValue * (numChange / 2) * -resize + 'px' };


    return (
        <div className={style.pantsWrap}>

            <Catacart></Catacart>
            <CataPro></CataPro>
            <div className={style.productWrap}>
                <div className={style.titleWrap}>
                    <h3 >Pants</h3>
                    {
                        loading ? '' : error ? '' : <CataSort />
                    }

                </div>
                <div className={style.pantsContents}>
                    <ul style={heightSwitch}>
                        <div className={style.pantsPageWrap} style={moveTop}>
                            {
                                loading ? <div className={style.circleBox}><CircularIndeterminate /></div>
                                    : error ? <h2>{error}</h2>
                                        : totalData.map((pantsdata) => (
                                            <li key={pantsdata.id}>
                                                <Link to={`/pants/pantspropage${pantsdata.id}`} onClick={() => { dispatch(handlePassData(pantsdata)) }}>
                                                    <div className={style.pcImg}>
                                                        <div className={style.pcCover}>
                                                            <div className={style.cart}>
                                                                <input type="button" value='加入購物車' onChange={(e) => { dispatch(handleCart(e)) }} onClick={(e) => { dispatch(handleCart(e, pantsdata)) }} />
                                                            </div>

                                                        </div>
                                                        <img src={pantsdata.image} alt="" />
                                                    </div>
                                                    <div className={style.pcTitle}>
                                                        <h3>{pantsdata.title}</h3>
                                                        <span>NT${pantsdata.price}</span>
                                                    </div>
                                                </Link>
                                                <div className={style.cart2}>
                                                    <input type="button" value='加入購物車' onChange={(e) => { dispatch(handleCart(e)) }} onClick={(e) => { dispatch(handleCart(e, pantsdata)) }} />
                                                </div>

                                            </li>
                                        ))
                            }
                        </div>
                    </ul>
                </div>
                <div className={style.pantsPage}>
                    <div className={style.pageWrap}>
                        <ul>{
                            dataPage2.map((pantsdata, inx) => (
                                inx + 1 === (changeValue + 2) / 2 ?
                                    <li className={style.active} key={inx} onClick={() => { dispatch(handleChangePage(inx)) }} >{pantsdata + 1}</li> :
                                    <li key={inx} onClick={() => { dispatch(handleChangePage(inx)) }} >{pantsdata + 1}</li>

                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PantsContent;
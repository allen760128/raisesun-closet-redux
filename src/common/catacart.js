import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../pants/pants.module.css';
import { handleCloseCart, handleChangePic } from '../store/proActions';
import Select3 from './select3';
import Select4 from './select4';

const Catacart = () => {
    const dispatch = useDispatch();
    const toscroll = useSelector(state => state.product.to);
    const cartImg = useSelector(state => state.product.cartImg);
    // const cartNum = useSelector(state => state.product.cartNum);
    const spic = useSelector(state => state.product.spic);
    const cartValue = useSelector(state => state.product.cartValue);
    const togglecart = useSelector(state => state.product.toggleCart);
    const cartWrap = useRef();
    const toggleCart = { display: togglecart ? 'block' : 'none' };


    //使用方法不需要傳函數，使用邏輯操作在useEffect內做判斷即可
    //此為在手機裝置下加入購物車視窗跳出後，加入購物車小視窗會回到top=0
    const tocartWrapp = useRef();
    const cc = tocartWrapp.current;
    useEffect(() => {
        if (toscroll) {

            cc.scrollTop = 0;
        }
        // toscroll?:null;
    }, [toscroll, cc]);


    //滾動條失效
    useEffect(() => {
        togglecart ?
            document.body.style.overflow = 'hidden'
            :
            document.body.style.overflow = 'scroll'

    }, [togglecart]);



    const img = [{ 'id': 1, 'image': 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
    { 'id': 2, 'image': 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg' },
    { 'id': 3, 'image': 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg' },
    { 'id': 4, 'image': 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg' }];


    return (
        <div className={style.toCart} style={toggleCart} ref={cartWrap} onClick={(e) => { dispatch(handleCloseCart(e, cartWrap)) }}>
            <div className={style.toCartWrap} ref={tocartWrapp} >
                <div className={style.left}>
                    <div className={style.bigPic}>
                        <img src={cartImg} alt="" />
                    </div>
                    <div className={style.smallPic}>
                        <ul>{img.map((img, inx) => (
                            img.id === spic + 1 ?
                                <li style={{ border: '2px solid rgb(255, 45, 45)' }} onClick={(e) => { dispatch(handleChangePic(e, inx, img.image)) }} key={img.id}>
                                    <img src={img.image} alt="" />
                                </li> :
                                <li onClick={(e) => { dispatch(handleChangePic(e, inx, img.image)) }} key={img.id}>
                                    <img src={img.image} alt="" />
                                </li>
                        ))}


                        </ul>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.toCartContent}>
                        <div className={style.title}>
                            <h3>{cartValue.title}</h3>
                            <p>全店，全館消費滿699免運</p>
                            <span>NT${cartValue.price}</span>
                        </div>
                        <div className={style.number}>
                            <form action="">
                                {/* <label htmlFor="">潔牙任務組</label>
                                <select name="" id="">
                                    <option value="">一入</option>
                                    <option value="">二入</option>
                                    <option value="">三入</option>
                                </select> */}
                                <div className={style.formWrap}>
                                    <Select3></Select3>
                                    <Select4></Select4>
                                </div>

                                {/* <label htmlFor="">數量</label>
                                <input type="number" value={cartNum} className={style.numinp} min="1" max="100" onChange={(e) => { dispatch(handleCartNum(e)) }} /> */}
                                <div className={style.conform}>
                                    <input type="button" value="加入購物車" />
                                    <input type="button" value="立即購買" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catacart;
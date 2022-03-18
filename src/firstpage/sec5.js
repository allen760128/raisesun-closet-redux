import React from 'react';
import style from './sec5.module.css';
import {useDispatch} from 'react-redux';
import {handleTop} from '../store/signAction';
import {Link} from 'react-router-dom';

const Sec5=(props)=>{
    const dispatch=useDispatch();
    const scrollTop=()=>{
        const top=props.toTop.current.offsetTop;
        window.scrollTo({top:top,behavior:'smooth'});
    }
    const handlePrevent=(e)=>{
        e.preventDefault();
    }
    return(
        <div id={style.productmenu}>
            <div className={style.productWrap}>
                <span style={{backgroundImage:`url(img/pro_bg.png)`}}></span>
                <div className={`${style.pants} ${style.poswid}`} onClick={handlePrevent}><Link to='/pants' ><span style={{backgroundImage:`url(img/pro1.png)`}}></span><h3 className={style.h3element}>Pants</h3></Link></div>
                <div className={`${style.vest} ${style.poswid}`} onClick={handlePrevent}><Link to='/pants' ><span style={{backgroundImage:`url(img/pro2.png)`}}></span><h3 className={style.h3element}>Vest</h3></Link></div>
                <div className={`${style.top} ${style.poswid}`} onClick={handlePrevent}><Link to='/pants' ><span style={{backgroundImage:`url(img/pro3.png)`}}></span><h3 className={style.h3element}>Top</h3></Link></div>
                <div className={`${style.short} ${style.poswid}`} onClick={handlePrevent}><Link to='/pants' ><span style={{backgroundImage:`url(img/pro4.png)`}}></span><h3 className={style.h3element}>Short</h3></Link></div>
                <div className={`${style.accesorries} ${style.poswid}`} onClick={handlePrevent}><Link to='/pants' ><span style={{backgroundImage:`url(img/pro5.png)`}}></span><h3 className={style.h3element}>Acces</h3></Link></div>
                <div className={`${style.jeans} ${style.poswid}`} onClick={handlePrevent}><Link to='/pants' ><span style={{backgroundImage:`url(img/pro6.png)`}}></span><h3 className={style.h3element}>Jeans</h3></Link></div>
                <div className={style.topbtn} onClick={(e)=>{dispatch(handleTop(e,scrollTop()))}}><a href="#" ><span style={{backgroundImage:`url(img/topbtn_03.png)`}}></span></a></div>
            </div>
            {/* <h3 className="ps">Pants</h3>
            <h3 className="vt">Vest</h3>
            <h3 className="tp">Top</h3>
            <h3 className="st">Short</h3>
            <h3 className="as">Accesorries</h3>
            <h3 className="js">Jeans</h3> */}
            
        </div>
    );
}

export default Sec5;
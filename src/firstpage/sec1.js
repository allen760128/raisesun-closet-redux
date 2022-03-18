import React, { useState, useEffect, useRef } from 'react';
import style from './sec1.module.css';
import picData from './sec1PicData.json';
import { getContainerUtilityClass } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { handlePrev, handleNext, handlePic, increase } from '../store/bannerAction';

const Sec1 = (props) => {
    const newActive = useSelector(state => state.banner.newActive);
    const dispatch = useDispatch();
    useEffect(() => {
        let loopB = setInterval(() => {
            //此處把判斷式寫在REDUCER內
            dispatch(increase());
        }, 3000);
        return () => clearInterval(loopB);
    }, [newActive]);
    const loop = { left: (newActive - 1) * (-100) + '%', width: picData.map(f => f.id).length * 100 + '%' };


    return (
        <div className={style.slideshow}>
            <div className={style.slideshowSlides} >
                <div className={style.slideshowSlidesWrap} style={loop}>
                    {picData.map(pd => (
                        <a href={pd.link2} className={style.slide} target="_blank" key={pd.id}><img src={pd.link1} alt={pd.alt} /></a>
                    ))}
                </div>
                <div className={style.slideshowIndicator}>
                    {picData.map((ki) => (
                        ki.id == newActive ?
                            <div className={`${style.dot} ${style.active}`} key={ki.id} onClick={(e) => { dispatch(handlePic(e, ki.id)) }}><a href={(e) => { e.preventDefault() }}></a></div>
                            : <div className={style.dot} key={ki.id} onClick={(e) => { dispatch(handlePic(e, ki.id)) }}><a href={(e) => { e.preventDefault() }}></a></div>
                    ))}
                </div>
                <div className={style.slideshowNav}>
                    <a href="#" className={style.prev} style={{ backgroundImage: `url(img/arrow_left.png)` }} onClick={(e) => { dispatch(handlePrev(e)) }}>Prev</a>
                    <a href="#" className={style.next} style={{ backgroundImage: `url(img/arrow_right.png)` }} onClick={(e) => { dispatch(handleNext(e)) }}>Next</a>
                </div>
            </div>

        </div>
    );
}

export default Sec1;


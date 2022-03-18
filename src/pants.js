import React from 'react';
import Nav from './common/nav';
import style from './index.module.css';
import Pantscontent from './pants/pantsContent';
import Footer from './common/footer'

const Pants=()=>{
    return (
        <div className={style.pantsWrapper}>
            <Nav/>
            <Pantscontent/>
            <Footer></Footer>
        </div>
    )
}

export default Pants;
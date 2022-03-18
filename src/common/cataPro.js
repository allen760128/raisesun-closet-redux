import React from 'react';
import style from './cataPro.module.css';
import {Link} from 'react-router-dom';

const CataPro=()=>{
    return (
        <div className={style.cataWrap}>
            <ul>
                <li><Link to='/pants'>Pants</Link></li>
                <li><Link to='/pants'>Vest</Link></li>
                <li><Link to='/pants'>Top</Link></li>
                <li><Link to='/pants'>Short</Link></li>
                <li><Link to='/pants'>Accesories</Link></li>
                <li><Link to='/pants'>Jeans</Link></li>
            </ul>
        </div>
    )
}

export default CataPro;
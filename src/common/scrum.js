import React from 'react';
import { Link } from 'react-router-dom';
import style from './scrum.module.css';

const Scrum = (props) => {
    return (
        <div className={style.scrum}>
            <div className={style.scrumWrap}>
                <ul>
                    <li><Link to='/'>首頁</Link></li>\
                    <li><Link to='/pants'>商品</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Scrum;
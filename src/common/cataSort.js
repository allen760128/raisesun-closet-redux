import React, { useEffect, useState } from 'react';
import style from './cataSort.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { handlePchange, handleArrange } from '../store/proActions';
import Select from '../common/select';
import Select2 from '../common/select2';

const CataSort = () => {
    const dispatch = useDispatch();
    const changePrice = useSelector(state => state.product.price);
    const changeArrange = useSelector(state => state.product.arrange);
    const Data = useSelector(state => state.product.pantsData);
    const totalData = useSelector(state => state.product.originData);
    const priceLowArrange = JSON.stringify(totalData.map(c => c).sort((a, b) => { return a.price - b.price }));
    const priceHighArrange = JSON.stringify(totalData.map(c => c).sort((a, b) => { return b.price - a.price }));
    const rateArrange = JSON.stringify(totalData.map(c => c).sort((a, b) => { return b.rating.rate - a.rating.rate }));
    // const sixData=JSON.stringify(Data.slice(0,6));
    // const nineData=JSON.stringify(Data.slice(0,9));
    // const tweData=JSON.stringify(Data.slice(0,12));
    // console.log(rateArrange)
    const handlePropChange = (e) => {
        dispatch(handlePchange(e));
    }
    console.log(changePrice)
    const handlearrange = (e) => {
        dispatch(handleArrange(e))
    }
    return (
        <div className={style.catasortWrap}>
            <Select all={{ changePrice, priceHighArrange, priceLowArrange, rateArrange, handlePropChange }}></Select>

            <div className={style.show}>
                <Select2 all={{ changeArrange, handlearrange }}></Select2>
            </div>

            {/* <select value={changePrice} className={style.price} onChange={(e) => { dispatch(handlePchange(e)) }} >
                <option style={{ display: 'none' }}>價格排序</option>
                <option value={priceHighArrange}>價格由高到低</option>
                <option value={priceLowArrange}>價格由低到高</option>
                <option value={rateArrange} >人氣排序</option>
            </select> */}
            {/* <select value={changeArrange} className={style.show} onChange={(e) => { dispatch(handleArrange(e)) }}>
                <option style={{ display: 'none' }}>顯示個數</option>
                <option value={2}>每頁顯示6個</option>
                <option value={3}>每頁顯示9個</option>
                <option value={4}>每頁顯示12個</option>
            </select> */}
        </div>
    )
}

export default CataSort;
import React, { useState, useEffect, useRef } from 'react';
import style from './test.module.css';
import { useParams, Link } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';
import qs from 'querystring';//把物件轉成urlencoding

const Test = () => {
    const [list, setList] = useState('');
    const [content, setContent] = useState([]);
    const { id } = useParams();
    const linkref = useRef(id);
    const [scroll, setScroll] = useState(0);
    const canvasref = useRef();


    const obj = { name: 'Tom', age: 18 };
    const str = 'name=湯姆&sexule=gay';
    //把物件轉成urlencoding
    // console.log(qs.stringify(obj));
    //把urlencoding轉為物件
    // console.log(qs.parse(str));


    //radio操縱
    const [ra, setRa] = useState('');//第一項radio監聽
    const [ra2, setRa2] = useState('');//第二項radio監聽
    const [ra3, setRa3] = useState('');//第三項radio監聽
    const [allra, setAllra] = useState('');//三組radio value整合傳入
    const [rank, setRank] = useState([]);//存入過濾後的rankdata
    const rankdata = [{ id: 1, title: '電子報' }, { id: 2, title: '工作坊' }, { id: 3, title: '教育訓練' }];


    const formik = useFormik({
        initialValues: {
            names: '',
            pass: '',
            mail: '',
        },
        onSubmit: (values) => {
            console.log(values)
        }
    });
    const handletodo = (e) => {
        setList(e.target.value);
    }
    const handleSubmit = (list) => {
        if (list === '') {
            return
        } else {
            setContent([...content, { id: Date.now(), list }]);
        }

        setList('');
    }
    // console.log(Date.now())
    const handleDelete = (id) => {
        setContent(
            content.filter((cont) => { return cont.id !== id })
        )

    }


    //csv to json轉換
    const CSVToJSON = csv => {
        const lines = csv.split('\n');
        const keys = lines[0].split(',');
        return lines.slice(1).map(line => {
            return line.split(',').reduce((acc, cur, i) => {
                const toAdd = {};
                toAdd[keys[i]] = cur;
                return { ...acc, ...toAdd };
            }, {});
        });
    };
    async function fetch() {
        try {
            const res = await axios.get('https://data.tainan.gov.tw/dataset/32e29e61-21a7-42e6-bad9-6a0d3d602240/resource/2ae76344-1c72-417f-99db-17ba192dd31f/download/111bfh.csv');
            const resData = res.data;
            const trans = CSVToJSON(resData);
            // console.log(trans)

        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetch()
    }, []);


    useEffect(() => {
        const context = canvasref.current.getContext('2d');
        context.moveTo(100, 100);
        context.lineTo(200, 100);
        context.lineTo(150, 150);
        context.lineTo(100, 100);
        context.fillStyle = 'rgb(122,122,122)'
        // context.stroke();
        context.fill();
    }, []);


    // const aa = () => {
    //     if (formik.values.names === 'aa') {
    //         formik.handleSubmit
    //     }
    // }



    //判斷useParams傳入的id是否正確，正確的話視窗就往ref的位置跑
    useEffect(() => {
        if (id === 'linkref') {
            setScroll(linkref.current.offsetTop)
            window.scrollTo(({ top: scroll }))
        }
    }, [scroll]);



    // radio動態測試
    useEffect(() => {
        setRank([]);
        setAllra([ra, ra2, ra3])
    }, [ra, ra2, ra3]);
    useEffect(() => {
        // 先判斷三組radio value是否都有值
        if (ra !== '' && ra2 !== '' && ra3 !== '') {
            // switch (allra.toString()) {
            //     case 'ra1,ra3,ra5': return (setRank([{ id: 1, title: '電子報' }, { id: 2, title: '工作坊' }, { id: 3, title: '教育訓練' }]))
            //     case 'ra1,ra3,ra6': return (setRank([{ id: 1, title: '電子報' }, { id: 3, title: '教育訓練' }]))
            //     case 'ra1,ra4,ra5': return (setRank([{ id: 2, title: '工作坊' }, { id: 3, title: '教育訓練' }]))
            //     case 'ra1,ra4,ra6': return (setRank([{ id: 1, title: '電子報' }, { id: 2, title: '工作坊' }]))
            //     case 'ra2,ra3,ra5': return (setRank([{ id: 3, title: '教育訓練' }]))
            //     case 'ra2,ra3,ra6': return (setRank([{ id: 1, title: '電子報' }]))
            //     case 'ra2,ra4,ra5': return (setRank([{ id: 2, title: '工作坊' }]))
            //     case 'ra2,ra4,ra6': return (setRank([{ id: 1, title: '電子報' }, { id: 2, title: '工作坊' }]))
            // }

            //因為傳入的value為自串，所以整合value必須從陣列再次轉字串
            switch (allra.toString()) {
                //過濾rankdata
                case 'ra1,ra3,ra5': return (setRank(rankdata.filter(c => c.id < 3)))
                case 'ra1,ra3,ra6': return (setRank(rankdata.filter(c => c.id === 1 || c.id === 3)))
                case 'ra1,ra4,ra5': return (setRank(rankdata.filter(c => c.id === 2 || c.id === 3)))
                case 'ra1,ra4,ra6': return (setRank(rankdata.filter(c => c.id === 1 || c.id === 2)))
                case 'ra2,ra3,ra5': return (setRank(rankdata.filter(c => c.id === 3)))
                case 'ra2,ra3,ra6': return (setRank(rankdata.filter(c => c.id === 1)))
                case 'ra2,ra4,ra5': return (setRank(rankdata.filter(c => c.id === 2)))
                case 'ra2,ra4,ra6': return (setRank(rankdata.filter(c => c.id === 1 || c.id === 2 || c.id === 3)))
            }
        }
        // console.log('render')
    }, [allra]);


    return (
        <div className={style.aaa} style={{ backgroundImage: 'url(/img/bk.jpg)' }}>
            <div className={style.wrap}>
                <ul className={style.bbb}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <form action="" className={style.fd} onSubmit={
                    // formik.handleSubmit
                    // console.log(formik.values.names)
                    formik.values.names === 'aa' ? formik.handleSubmit : null
                }>
                    <label htmlFor="" style={{ fontWeight: 900, fontFamily: 'Noto Sans TC' }}>姓名</label>
                    <input type="text" name='names' value={formik.values.names} onChange={formik.handleChange} />
                    <label htmlFor="">密碼</label>
                    <input type='password' name='pass' value={formik.values.pass} onChange={formik.handleChange} />
                    <label htmlFor="">email</label>
                    <input type='email' name='mail' value={formik.values.mail} onChange={formik.handleChange} />
                    <input type='submit'
                    // onClick={(e) => { e.preventDefault() }} 
                    />
                </form>
                <div className={style.todoWrap}>
                    <div><Link to='/pants'>back</Link></div>
                    <div className={style.todolist}>
                        <div className={style.top}>
                            <input type="text" value={list} onChange={(e) => { handletodo(e) }} />
                            <button type='button' onClick={() => { handleSubmit(list) }}>送出</button>
                        </div>
                        <p style={{ paddingLeft: '25px' }}>{new Date().toLocaleTimeString()}</p>
                        <div className={style.contWrap}>
                            <ul className={style.todoUl}>
                                {content.map(cont => (
                                    <li key={cont.id} >{cont.list}<div className={style.dele} onClick={() => { handleDelete(cont.id) }}>X</div></li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* radio動態測試 */}
            <div className={style.radiotest}>
                <div className={style.ra1}>
                    <input type="radio" name="" id="" value='ra1'
                        checked={ra === 'ra1'} onChange={(e) => { setRa(e.target.value) }} />
                    <label htmlFor="">有</label>
                    <input type="radio" name="" id="" value='ra2'
                        checked={ra === 'ra2'} onChange={(e) => { setRa(e.target.value) }} />
                    <label htmlFor="">沒有</label>
                </div>
                {ra !== '' && (
                    <div className={style.ra1}>
                        <input type="radio" name="" id="" value='ra3'
                            checked={ra2 === 'ra3'} onChange={(e) => { setRa2(e.target.value) }} />
                        <label htmlFor="">有</label>
                        <input type="radio" name="" id="" value='ra4'
                            checked={ra2 === 'ra4'} onChange={(e) => { setRa2(e.target.value) }} />
                        <label htmlFor="">沒有</label>
                    </div>
                )}
                {ra2 !== '' && (
                    <div className={style.ra1}>
                        <input type="radio" name="" id="" value='ra5'
                            checked={ra3 === 'ra5'} onChange={(e) => { setRa3(e.target.value) }} />
                        <label htmlFor="">有</label>
                        <input type="radio" name="" id="" value='ra6'
                            checked={ra3 === 'ra6'} onChange={(e) => { setRa3(e.target.value) }} />
                        <label htmlFor="">沒有</label>
                    </div>
                )}
                <div className={style.colorWrap}>
                    {
                        rank.map(data => (
                            <div className={style.colorblock} key={data.id}>{data.title}</div>
                        ))
                    }
                </div>
            </div>



            <div className='aa' style={{ height: '800px' }}>
                <canvas id='canvas' width='500' height='300' style={{ display: 'block', border: '1px solid #5a5a5a', margin: '0 auto' }} ref={canvasref}></canvas>
            </div>
            <div className='bb' style={{ height: '800px', backgroundColor: '#fda' }} ref={linkref}></div>
            <div className={style.cc} style={{ height: '800px' }}>
                <div className={style.roundWrap}>
                    <div className={style.round}></div>
                    <div className={style.round2}></div>
                    <div className={style.round3}></div>
                </div>

            </div>

        </div>
    )
}

export default Test;
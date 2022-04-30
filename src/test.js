import React, { useState, useEffect, useRef } from 'react';
import style from './test.module.css';
import { useParams, Link } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';
import qs from 'querystring';//把物件轉成urlencoding
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import data from './data.json'

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
                        <label htmlFor="">有嗎 </label>
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
            <Player
                autoplay
                loop
                src={data}
                // src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
                style={{ height: 'auto', width: '300px' }}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>


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
                <div className={style.vec}>
                    <img src="./img/68.svg" alt="" />
                    {/* <svg width="109" height="92" viewBox="0 0 109 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M99.7988 0H8.72562C6.41204 0.00192934 4.19376 0.916747 2.55781 2.54361C0.921858 4.17048 0.00194011 6.37643 0 8.67716V69.1477C0.00194011 71.4485 0.921858 73.6544 2.55781 75.2813C4.19376 76.9081 6.41204 77.823 8.72562 77.8249H37.8916V83.9739H28.8729V91.9225H79.6515V83.9958H70.6328V77.8467H99.7988C102.112 77.8448 104.331 76.93 105.967 75.3031C107.603 73.6763 108.522 71.4703 108.524 69.1696V8.69902C108.526 7.55795 108.302 6.42768 107.865 5.37283C107.427 4.31798 106.785 3.35922 105.974 2.55134C105.164 1.74347 104.202 1.10232 103.142 0.66455C102.082 0.226776 100.946 0.000955668 99.7988 0V0ZM8.72562 2.30954H99.7988C101.496 2.31147 103.124 2.98296 104.324 4.1767C105.525 5.37045 106.2 6.98895 106.202 8.67716V66.5759H2.32242V8.67716C2.32436 6.98895 2.9996 5.37045 4.20001 4.1767C5.40042 2.98296 7.02799 2.31147 8.72562 2.30954V2.30954ZM77.329 86.3053V89.6349H31.1734V86.3053H77.329ZM68.3104 83.9958H40.214V77.8467H68.3104V83.9958ZM99.8134 75.5372H8.72562C7.02799 75.5353 5.40042 74.8638 4.20001 73.67C2.9996 72.4763 2.32436 70.8578 2.32242 69.1696V68.8709H106.202V69.1696C106.2 70.8578 105.525 72.4763 104.324 73.67C103.124 74.8638 101.496 75.5353 99.7988 75.5372H99.8134Z" fill="url(#paint0_linear_187_97)" />
                        <path d="M16.5281 59.7712C18.0314 59.7692 19.4726 59.1745 20.5356 58.1174C21.5987 57.0603 22.1967 55.6271 22.1987 54.1321C22.194 53.1387 21.9207 52.1648 21.4074 51.3126L34.1405 38.8906L52.4562 58.926L85.2927 23.7438L90.8534 29.2736L95.5056 12.0286L78.1569 16.6476L83.6516 22.1118L52.4709 55.5018L34.2358 35.5538L19.8542 49.5932C18.8926 48.8818 17.7267 48.4962 16.5281 48.493C15.0242 48.493 13.5818 49.0872 12.5184 50.1447C11.455 51.2022 10.8575 52.6365 10.8575 54.1321C10.8575 55.6277 11.455 57.062 12.5184 58.1195C13.5818 59.1771 15.0242 59.7712 16.5281 59.7712V59.7712ZM92.2234 15.2707L89.6519 24.8002L82.6406 17.8279L92.2234 15.2707ZM16.5281 50.8026C17.1921 50.8026 17.8411 50.9985 18.393 51.3654C18.945 51.7324 19.3751 52.254 19.6288 52.8641C19.8826 53.4743 19.9486 54.1456 19.8185 54.793C19.6885 55.4405 19.3682 56.0351 18.8982 56.5014C18.4282 56.9678 17.8296 57.285 17.1782 57.413C16.5268 57.5409 15.8519 57.4738 15.2389 57.2201C14.6259 56.9664 14.1024 56.5376 13.7346 55.9879C13.3668 55.4382 13.1712 54.7924 13.1727 54.1321C13.1746 53.2484 13.529 52.4015 14.158 51.7773C14.7871 51.1531 15.6395 50.8026 16.5281 50.8026V50.8026Z" fill="url(#paint1_linear_187_97)" >
                            <animateTransform attributeName="transform"
                                type="rotate"
                                from="0 50 50" to="360 50 50"
                                begin="0s" dur="1s"
                                repeatCount="indefinite"
                            />
                        </path>
                        <defs>
                            <linearGradient id="paint0_linear_187_97" x1="10.1176" y1="82.8228" x2="97.9151" y2="-5.46499" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3990CF" />
                                <stop offset="0.2" stop-color="#46AACD" />
                                <stop offset="0.38" stop-color="#4EB9CB" />
                                <stop offset="0.52" stop-color="#51BFCB" />
                                <stop offset="0.67" stop-color="#50BCCA" />
                                <stop offset="0.78" stop-color="#4CB2C9" />
                                <stop offset="0.89" stop-color="#45A1C6" />
                                <stop offset="0.99" stop-color="#3B8AC1" />
                                <stop offset="1" stop-color="#3A88C1" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_187_97" x1="22.8434" y1="68.3828" x2="87.1598" y2="3.71451" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3990CF" />
                                <stop offset="0.2" stop-color="#46AACD" />
                                <stop offset="0.38" stop-color="#4EB9CB" />
                                <stop offset="0.52" stop-color="#51BFCB" />
                                <stop offset="0.67" stop-color="#50BCCA" />
                                <stop offset="0.78" stop-color="#4CB2C9" />
                                <stop offset="0.89" stop-color="#45A1C6" />
                                <stop offset="0.99" stop-color="#3B8AC1" />
                                <stop offset="1" stop-color="#3A88C1" />
                            </linearGradient>
                        </defs>
                    </svg> */}

                </div>
            </div>

        </div>
    )
}

export default Test;
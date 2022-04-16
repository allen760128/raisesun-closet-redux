import React, { useState, useEffect, useRef } from 'react';
import style from './test.module.css';
import { useParams, Link } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';

const Test = () => {
    const [list, setList] = useState('');
    const [content, setContent] = useState([]);
    const { id } = useParams();
    const linkref = useRef(id);
    const [scroll, setScroll] = useState(0);
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
    console.log(Date.now())
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




    //請寫出一個叫做 starReturn 的 function 並且接受一個參數 n，能回傳 n 個 *
    const star = (n) => {
        let x = '';

        for (let i = 0; i < n; i++) {
            x = x + '*'
        }
        return x
        // console.log(x)
    }
    // console.log(star(5))

    //請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫
    const isUpperCase = (x) => {
        if (x.charAt(0) === x.charAt(0).toUpperCase()) {
            return 'true'
        } return 'false'
    }
    // console.log(isUpperCase('aDD'))

    //請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1
    const position = (x) => {
        const y = x.match(/[A-Z]/);
        // console.log(y[0], y.index + 1)
        if (y) {
            return `${y[0]} ${y.index + 1}`
        } return -1
    }
    // console.log(position('abcC'))

    //請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n
    const findSmallCount = (x, y) => {
        const num = x.filter(c => c < y).length;
        return num;
    }
    // console.log(findSmallCount([1, 2, 3, 4, 5], 3))

    //請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和
    const findSmallTotal = (x, y) => {
        const num = x.filter(c => c < y).reduce((a, b) => a + b);
        return num;
    }
    // console.log(findSmallTotal([1, 2, 3, 4, 5], 5))

    //請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）
    const findAllSmall = (x, y) => {
        const num = x.filter(c => c < y);
        return num;
    }
    // console.log(findAllSmall([1, 2, 3, 4, 5], 5))

    //請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和
    const sum = (x) => {
        const total = x.filter(c => c).reduce((a, b) => a + b);
        return total;
    }
    // console.log(sum([1, 2, 3, 4, 5, 6]))

    //請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案
    const starlayer = (x) => {
        let m = '';
        for (let i = 0; i < x; i++) {
            m = m + '*'
            // console.log(m)
        }
        return m
    }
    starlayer(5)

    //請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串
    const makeStars = (x) => {
        let arr = [];
        let m = '';
        for (let i = 0; i < x; i++) {
            m = m + '*';
            arr.push(m)

        };
        return arr.join('/n');
    }
    // console.log(makeStars(5))

    //請寫出一個函式 reverse，接收一個字串，並且回傳反轉過後的字串。（禁止使用內建函式 reverse）
    const reverase = (x) => {
        let rev = '';

        for (let i = x.length - 1; i >= 0; i--) {
            rev = rev + x[i]
        }
        return rev
    }
    // console.log(reverase('54321'))

    //請寫一個函式 swap，接收一個字串，並且回傳大小寫互換後的字串
    const swap = (x) => {
        let m = [];
        let mm = x.split().toString();
        for (let i = 0; i < mm.length; i++) {
            if (mm[i].match(/[A-Z]/)) {
                let f = mm[i].toLowerCase()
                m.push(f)
            } else {
                let f = mm[i].toUpperCase()
                m.push(f)
            }
        }
        //replace中為正規表達式(亦可換為replaceAll(',',''))
        const toM = m.toString().replace(/,/g, '');
        return toM
    }
    // console.log(swap('aATeHt'))

    //請寫出一個函式 findMin，接收一個陣列並回傳陣列中的最小值。（禁止使用內建函式 sort）
    const findMin = (x) => {
        // let minnum = x[0]
        // for (let i = 0; i < x.length; i++) {
        //     if (minnum > x[i]) {
        //         minnum = x[i]
        //     }
        // }
        // return minnum;
        let minnum = Math.min(...x);
        return minnum
    }
    // console.log(findMin([18, 5, 6, 10, 3, -55, 64, 78, 5]))

    //請寫一個 function findNthMin，接收一個陣列以及一個數字 n，找出第 n 小的數字。（禁止使用內建函式 sort）
    const findNthMin = (x, y) => {
        const newarr = [...x];//先複製陣列，另外，用...可以把陣列變成純number
        let rearr = ''//做一個假的全域變數，方便for裡面結果存入

        for (let i = 0; i < y; i++) {
            const minnum = Math.min(...newarr);//用複製陣列來取得最小值
            const newindex = newarr.indexOf(minnum);//取得最小值的index
            const replace = newarr.splice(newindex, 1);//再從複製陣列裡把最小值切掉，方便下一輪for繼續抓一次最小值
            const newmin = Math.min(...replace);//從新的陣列繼續抓最小值
            rearr = newmin;//將新的最小值存入外側變數
        }
        return rearr
    }
    // console.log(findNthMin([6, 2, 8, 4, 5], 4))

    //請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort）
    const sort = (x) => {
        const reArr = [...x];
        const newArr = [];
        for (let i = 0; i < x.length; i++) {
            const minNum = Math.min(...reArr);
            newArr.push(minNum)
            const indexArr = reArr.indexOf(minNum);
            const spliceArr = reArr.splice(indexArr, 1)
        }
        return newArr
    }
    // console.log(sort([6, 8, 3, 2, 1]))

    //請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。
    const flatten = (x) => {
        const reArr = [...x];
        // console.log(reArr)
    }
    // console.log(flatten([1, [2, [3, [4]], 5], 6]))


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
            <div className='aa' style={{ height: '800px', backgroundColor: '#fde' }}></div>
            <div className='bb' style={{ height: '800px', backgroundColor: '#fda' }} ref={linkref}></div>
            <div className='cc' style={{ height: '800px', backgroundColor: '#fce' }}></div>

        </div>
    )
}

export default Test;
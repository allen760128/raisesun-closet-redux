import React, { useState, useEffect } from 'react';
import style from './test.module.css';
import { useFormik } from 'formik';
import axios from 'axios';

const Test = () => {
    const [list, setList] = useState('');
    const [content, setContent] = useState([]);
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
            console.log(trans)

        }
        catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        fetch()
    }, []);





    const star = (n) => {
        let x = '';

        for (let i = 0; i < n; i++) {
            x = x + '*'
        }
        return x
        // console.log(x)
    }
    // console.log(star(5))

    const isUpperCase = (x) => {
        if (x.charAt(0) === x.charAt(0).toUpperCase()) {
            return 'true'
        } return 'false'
    }
    // console.log(isUpperCase('aDD'))

    const position = (x) => {
        const y = x.match(/[A-Z]/);
        // console.log(y[0], y.index + 1)
        if (y) {
            return `${y[0]} ${y.index + 1}`
        } return -1
    }
    // console.log(position('abcC'))

    const findSmallCount = (x, y) => {
        const num = x.filter(c => c < y).length;
        return num;
    }
    // console.log(findSmallCount([1, 2, 3, 4, 5], 3))

    const findSmallTotal = (x, y) => {
        const num = x.filter(c => c < y).reduce((a, b) => a + b);
        return num;
    }
    // console.log(findSmallTotal([1, 2, 3, 4, 5], 5))

    const findAllSmall = (x, y) => {
        const num = x.filter(c => c < y);
        return num;
    }
    // console.log(findAllSmall([1, 2, 3, 4, 5], 5))

    const sum = (x) => {
        const total = x.filter(c => c).reduce((a, b) => a + b);
        return total;
    }
    // console.log(sum([1, 2, 3, 4, 5, 6]))

    const starlayer = (x) => {
        let m = '';
        for (let i = 0; i < x; i++) {
            m = m + '*'
            // console.log(m)
        }
        return m
    }
    starlayer(5)




    // const aa = () => {
    //     if (formik.values.names === 'aa') {
    //         formik.handleSubmit
    //     }
    // }
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
                    <label htmlFor="">姓名</label>
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

        </div>
    )
}

export default Test;
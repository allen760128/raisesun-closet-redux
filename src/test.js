import React, { useState } from 'react';
import style from './test.module.css';
import { useFormik } from 'formik';
import { DataSaverOnTwoTone } from '@mui/icons-material';

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
                <form action="" class={style.fd} onSubmit={
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
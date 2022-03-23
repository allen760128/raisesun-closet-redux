import React from 'react';
import style from './test.module.css';
import { useFormik } from 'formik';

const Test = () => {
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
    // const aa = () => {
    //     if (formik.values.names === 'aa') {
    //         formik.handleSubmit
    //     }
    // }
    return (
        <div className={style.aaa}>
            <ul className={style.bbb}>
                <li>aaa</li>
                <li>bbb</li>
                <li>ccc</li>
                <li>ddd</li>
            </ul>
            <form action="" onSubmit={
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
        </div>
    )
}

export default Test;
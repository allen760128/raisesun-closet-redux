import React, { useState, useRef, useEffect } from 'react';
import style from './ddd.module.css';
import Chart from './barchart';
import axios from 'axios';

const DD = () => {
    const [qq, setQq] = useState(false);
    const [mds, setMd] = useState(true);
    const [thousand, setThousand] = useState('');
    const [chan, setChan] = useState('');
    const [totle, setTotle] = useState([]);
    const [testArr, setTestarr] = useState([]);
    const [page, setPage] = useState([]);
    const [pvalue, setPvalue] = useState(1);

    const [data, setData] = useState({
        labels: [1, 2, 3, 4],
        datasets: [
            {
                label: 'Cubic interpolation (monotone)',
                data: [0.5, 0.3, 0.4, 2.6],
                borderColor: ['#fdd', '#fdd', '#fdd', '#fdd'],
                backgroundColor: ['#fdd', '#fdd', '#fdd', '#fdd'],
                cubicInterpolationMode: 'monotone',
                // borderSkipped: false,
                tension: 1,
                fill: false,
            }, {
                label: 20,
                data: [0.25, 0.37, 0.49, 0.62],
                borderColor: '#fda',
                backgroundColor: '#fda',
                tension: 1,
                cubicInterpolationMode: 'monotone',
                // borderSkipped: false,
                fill: false,
            }
        ]
    });

    const mdRef = useRef();
    const can = useRef();


    const fetch = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const resData = res.data;
            // console.log(resData.slice(0, 10));

            setTotle(resData);
            setPage(pagefn(resData.length / 25));

        }
        catch (error) {
            console.log(error)
        }
    }
    const pagefn = (x) => {
        let dataPage2 = [];
        let y = 0;
        for (let i = 0; i < x; i++) {
            y = dataPage2.push(i);
        }
        return dataPage2;
    }

    // 
    useEffect(() => {

        fetch();
    }, [])
    useEffect(() => {

        setTestarr(totle.slice((pvalue - 1) * 10, pvalue * 10));
    }, [pvalue, totle])
    console.log(page)



    const cc = (e) => {
        e.stopPropagation();
        // setMd(false)
    }
    const aa = () => {
        setMd(false)
    }
    const mdstyle = { display: mds ? 'flex' : 'none' };


    //千分位轉換
    // const numberWithCommas = (x) => {
    //     x = x.toString();
    //     var pattern = /(-?\d+)(\d{3})/;
    //     while (pattern.test(x))
    //         x = x.replace(pattern, "$1,$2");
    //     return x;
    // }

    const bb = (x) => {
        x = x.replace(/,/g, "");
        return x;
    }

    const addCommas = numa => numa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = num => num.toString().replace(/[^0-9A-Za-z]/g, "");

    const hrr = (e) => {
        setThousand(addCommas(removeNonNumeric(e.target.value)))

    }
    // console.log(thousand);

    useEffect(() => {
        setChan(bb(thousand))
    }, [thousand]);

    const reg = /^((?=.*?[0-9]).*(?=.*?[0-9]))[0-9A-Za-z]{3}$/g;
    console.log(reg.test('5e3'));


    return (
        <>
            {/* <div className={style.md} ref={mdRef} onClick={aa} style={mdstyle}>
                <div className={style.inner} onClick={cc}></div>
            </div>
            <div onClick={() => { setQq(!qq) }}>asdf</div> */}
            <div>asdf</div>
            {
                qq &&
                <>
                    <h1>Q你媽個逼</h1>
                    <p>好Q好Q</p>
                </>
            }
            <input type="text" className={style.inp} value={thousand}
                onInput={hrr} />
            <p>{chan}</p>
            <div style={{
                width: '500px', margin: '0 auto'
            }}>
                <Chart chartData={data}></Chart>
            </div>
            <ul>
                {testArr.map(data => (
                    <li key={data.id}>{data.title}</li>
                ))}
            </ul>
            <ul style={{ display: 'flex', gap: '20px', marginTop: '2rem' }}>
                {page.map((data, inx) => (
                    <li key={inx}
                        onClick={() => { setPvalue(inx + 1) }}
                    >{inx + 1}</li>
                ))}
            </ul>
        </>
    )
}




export default DD;
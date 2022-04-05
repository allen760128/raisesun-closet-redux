import React, { useEffect } from 'react';
import style from './signinData.module.css';
import Nav from '../common/nav';
import Footer from '../common/footer';
import DataInfo from './DataInfo';
import DataPoint from './DataPoint';
import DataMoney from './DataMoney';
import DataCoupon from './DataCoupon';
import DataMess from './DataMess';
import DataOrder from './DataOrder';
import DataFollow from './DataFollow';
// import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
import { fetch_api, handle_dataliClick, handle_logout, handle_login, fetchTest } from '../store/validationActions';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '../common/CircularProgress';

const SigninData = (props) => {
    // const [datali, setDatali] = useState(1);
    const dispatch = useDispatch();
    const datali = useSelector(state => state.validation.detailId);
    const loggedIn = useSelector(state => state.validation.loggedIn);
    const loading = useSelector(state => state.validation.loading);
    const navigate = useNavigate();
    const tk = localStorage.getItem('token');
    const testData = useSelector(state => state.validation.testData);
    //text
    useEffect(() => {
        dispatch(fetchTest());
    }, []);
    console.log(testData.map(c => c))

    const dataLi =
        [{ 'id': 1, 'title': '個人資訊', 'block': <DataInfo></DataInfo> },
        { 'id': 2, 'title': '會員點數', 'block': <DataPoint></DataPoint> },
        { 'id': 3, 'title': '商店購物金' },
        { 'id': 4, 'title': '優惠券' },
        { 'id': 5, 'title': '訊息' },
        { 'id': 6, 'title': '訂單' },
        { 'id': 7, 'title': '追蹤清單' }
        ];
    // const handleDataliClick = (id) => {
    //     setDatali(id);
    // }

    //剛進入時先抓取user資料並使login=true
    useEffect(() => {
        dispatch(fetch_api());
        dispatch(handle_dataliClick(1));
        dispatch(handle_login());
    }, []);


    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(handle_logout());
        localStorage.removeItem('token');
        navigate('/');
    }

    useEffect(() => {
        if (tk !== '760128' && loggedIn === false) {
            // dispatch(handle_logout());
            navigate('/');

        }
    }, [loggedIn]);

    return (
        <div className={style.signinDataWrap}>
            <Nav></Nav>
            <div className={style.dataWrap}>
                <div className={style.logoutWrap}>
                    {/* <input type="button" value='登出' className={style.logout} onClick={handleLogout} /> */}
                    <div className={style.logout} onClick={handleLogout}>登出</div>
                </div>
                <div className={style.datainnerWrap}>
                    <ul className={style.id1ul}>{dataLi.map(data => (
                        data.id === datali ?
                            <li key={data.id} className={style.activea} onClick={() => { dispatch(handle_dataliClick(data.id)) }}>{data.title}</li>
                            :
                            <li key={data.id} className={style.inactive} onClick={() => { dispatch(handle_dataliClick(data.id)) }}>{data.title}</li>
                    ))}
                    </ul>
                    {/* <ul>
                        {dataLi.map((data, inx) => (
                            inx + 1 === datali ?
                                <li style={{ display: 'block' }}>{data.block}</li>
                                :
                                <li style={{ display: 'none' }}>{data.block}</li>
                        ))}
                    </ul> */}
                    {loading === true ?
                        <div className={style.CircuWrap}>
                            <CircularProgress />
                        </div>
                        :
                        <div className={style.detotalWrap}>
                            <DataInfo></DataInfo>
                            <DataPoint></DataPoint>
                            <DataMoney></DataMoney>
                            <DataCoupon></DataCoupon>
                            <DataMess></DataMess>
                            <DataOrder></DataOrder>
                            <DataFollow></DataFollow>
                        </div>
                    }
                </div>
            </div>
            <Footer></Footer>
        </div >
    )
}

export default SigninData;
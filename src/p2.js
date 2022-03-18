import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchusers } from './store/asyncActions';
import CircularIndeterminate from './common/CircularProgress';
import { handle_login, handle_logout, } from './store/validationActions';
import { useNavigate } from 'react-router-dom';

const P2 = () => {
    const userData = useSelector(state => state.async.users);
    const loading = useSelector(state => state.async.loading);
    const error = useSelector(state => state.async.error);
    const loggedIn = useSelector(state => state.validation.loggedIn);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchusers());
    }, []);


    //以下皆為判斷網頁是否有token或是是否確實login，來判斷可否進入下一頁
    const token = localStorage.getItem('token');
    // console.log(token);
    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(handle_logout());
        navigate('/');
    }
    useEffect(() => {
        if (loggedIn === false) {
            navigate('/');
        }
    }, []);


    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}><Link to='/'>aac</Link>
            {
                loading ? <CircularIndeterminate />
                    : error ? <h2>{error}</h2>
                        : <ul>
                            {userData.map(c => (<li key={c.id} style={{ margin: '30px 0' }}>{c.name}</li>))}
                        </ul>
            }
            <button style={{ width: '40px', height: '30px' }} onClick={() => { handleLogout() }}>登出</button>

        </div>
    )
}

export default P2;
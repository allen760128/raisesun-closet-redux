import React,{useRef,useEffect} from 'react';
import style from './join.module.css';
import {useDispatch,useSelector} from 'react-redux';
import {handleJoin,handleJoinCancel,handleNamejoin,handleIdjoin,
    handlePassjoin,handleConjoin,handleDatejoin,
    handlePhonejoin,handleMailjoin,handleJoinsubmit} from '../store/signAction';

const Join=(props)=>{
    const refJoin=useRef();
    const dispatch=useDispatch();
    const join=useSelector(state=>state.sign.join);
    const namejoin=useSelector(state=>state.sign.namejoin);
    const idjoin=useSelector(state=>state.sign.idjoin);
    const passjoin=useSelector(state=>state.sign.passjoin);
    const conjoin=useSelector(state=>state.sign.conjoin);
    const datejoin=useSelector(state=>state.sign.datejoin);
    const phonejoin=useSelector(state=>state.sign.phonejoin);
    const mailjoin=useSelector(state=>state.sign.mailjoin);
    const joinnameError=useSelector(state=>state.sign.nameforgeterror);
    const joinidError=useSelector(state=>state.sign.joinidError);
    const joinpassError=useSelector(state=>state.sign.joinpassError);
    const joinconError=useSelector(state=>state.sign.joinconError);
    const joinphoneError=useSelector(state=>state.sign.joinphoneError);
    const joinmailError=useSelector(state=>state.sign.joinmailError);
    const joinToggle={right:join?'0':'-100%'};
    const chiness=/^[\u4e00-\u9fa5]{0,}$/g;
    const regular=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
    const mailregular=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
    const cell=/^09[0-9]{8}$/g;
    useEffect(()=>{
        window.onclick=(e)=>{
            if(e.target===refJoin.current){
                dispatch(handleJoin(e));
            }
        }
    },[join]);

    const joindateError=props.joindateError;
    return(
        <div className={style.joinWrap} style={joinToggle} ref={refJoin}>
            <div  className={style.inner}>
                <div className={style.innerWrap}>
                    <div className={style.innerTitle}><span>註冊會員嗎?</span></div>
                    <form action="" onSubmit={(e)=>{dispatch(handleJoinsubmit(e,chiness,regular,mailregular,cell))}}>
                        <div className={style.nameWrap}>
                            <label htmlFor="">姓名</label>
                            <input type="text" onChange={(e)=>{dispatch(handleNamejoin(e))}} value={namejoin} placeholder='請輸入中文姓名'/>
                        </div>
                        <span className={style.nameerror}>{joinnameError}</span>
                        <div className={style.idWrap}>
                            <label htmlFor="">選擇您的會員帳號</label>
                            <input type="text" onChange={(e)=>{dispatch(handleIdjoin(e))}} value={idjoin} placeholder='請輸入8位大小寫英數字' maxLength='8'/>
                        </div>
                        <span className={style.iderror}>{joinidError}</span>
                        <div className={style.passWrap}>
                            <label htmlFor="">建立會員密碼</label>
                            <input type="password" onChange={(e)=>{dispatch(handlePassjoin(e))}} value={passjoin} placeholder='請輸入8位大小寫英數字' maxLength='8'/>
                        </div>
                        <span className={style.passerror}>{joinpassError}</span>
                        <div className={style.conWrap}>
                            <label htmlFor="">確認會員密碼</label>
                            <input type="password" onChange={(e)=>{dispatch(handleConjoin(e))}} value={conjoin} placeholder='請輸入8位大小寫英數字' maxLength='8' />
                        </div>
                        <span className={style.conerror}>{joinconError}</span>
                        <div className={style.bdWrap}>
                            <label htmlFor="">您的生日</label>
                            <input type="date" onChange={(e)=>{dispatch(handleDatejoin(e))}} value={datejoin}/>
                        </div>
                        <span className={style.bderror}>{joindateError}</span>
                        <div className={style.phoneWrap}>
                            <label htmlFor="">行動電話</label>
                            <input type="tel" onChange={(e)=>{dispatch(handlePhonejoin(e))}} value={phonejoin} placeholder='請輸入10位數字' maxLength='10' />
                        </div>
                        <span className={style.phoneerror}>{joinphoneError}</span>
                        <div className={style.emailWrap}>
                            <label htmlFor="">電子郵件</label>
                            <input type="email"  onChange={(e)=>{dispatch(handleMailjoin(e))}} value={mailjoin} placeholder='請輸入電子信箱' />
                        </div>
                        <span className={style.emailerror}>{joinmailError}</span>
                         <div className={style.buttonWrap}>
                            <input type='submit' value='確認' />
                            <input type='button' value='取消' onClick={(e)=>{dispatch(handleJoinCancel(e))}}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Join;
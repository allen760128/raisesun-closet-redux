import React, { useRef,useEffect,useCallback } from 'react';
import style from './forgetPass.module.css';
import {useSelector,useDispatch} from 'react-redux';
import {handleForget,handleForgetCancel,handleIdforget,
    handleEmailforget,handleForgetsubmit} from '../store/signAction';

const ForgetPass=(props)=>{
    const forgetRef=useRef();
    const dispatch=useDispatch();
    const forget=useSelector(state=>state.sign.forget);
    const idForget=useSelector(state=>state.sign.idforget);
    const mailForget=useSelector(state=>state.sign.mailforget);
    const forgetidError=useSelector(state=>state.sign.idforgeterror);
    const forgetmailError=useSelector(state=>state.sign.mailforgeterror);
    const idcheck=useSelector(state=>state.sign.idcheck);
    const mcheck=useSelector(state=>state.sign.mailcheck);
    const forgetref=forgetRef.current;
    const forgetToggle={right:forget?'-100%':'0'};
    const regular=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
    const mailregular=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
    //點擊外側視窗收合，可先用useeffect在redux外先做再dispatch進去(window點擊)
    useEffect(()=>{
        window.onclick=(e)=>{
            if(e.target===forgetref){
                dispatch(handleForget(e))
            }
        }
    },[forget]);
    // useEffect(()=>{
       
    // },[idcheck , mcheck]);
    const forgetSubmit=useCallback((e)=>{
        // dispatch(handleForgetsubmit(e,regular,mailregular))
        if(idcheck && mcheck){
            // e.preventDefault();
            dispatch(handleForgetsubmit(e,regular,mailregular));
        }else{
            e.preventDefault();
            dispatch(handleForgetsubmit(e,regular,mailregular));
        }
        
    },[dispatch]);
    
    return(
        <div className={style.forgetWrap} style={forgetToggle} ref={forgetRef} >
            <div  className={style.inner}>
                <div className={style.innerWrap}>
                    <div className={style.innerTitle}><span>忘記密碼?</span></div>
                    <form action="result.php" method="post" onSubmit={forgetSubmit}>
                        <div className={style.idWrap}>
                            <label htmlFor="">請輸入帳號</label>
                            <input type="text" maxLength={8} onChange={(e)=>{dispatch(handleIdforget(e,regular))}} value={idForget}/>
                        </div>
                        <span className={style.iderror}>{forgetidError}</span>
                        <div className={style.emailWrap}>
                            <label htmlFor="">請輸入您的電子信箱</label>
                            <input type="email" onChange={(e)=>{dispatch(handleEmailforget(e,mailregular))}} value={mailForget}/>
                        </div>
                        <span className={style.emailerror}>{forgetmailError}</span>
                        <h3>我們將稍後為您寄上您的密碼重設單元<br/>您可能需要查看垃圾郵件資料夾，或解除封鎖</h3>
                        <div className={style.buttonWrap}>
                            <input type='submit' value='確認' />
                            <input type='button' value='取消' onClick={(e)=>{dispatch(handleForgetCancel(e))}}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgetPass;
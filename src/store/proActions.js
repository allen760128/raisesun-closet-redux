import {
    handle_pchange, handle_arrange,
    fetch_request, fetch_succece,
    fetch_succece2, fetch_failure2,
    fetch_failure, handle_origin,
    handle_changePage, handle_default,
    handle_cart, handle_closeCart,
    handle_changePic, handle_cartNum,
    handle_passData
} from './proTypes';
import axios from 'axios';

export const handleDefault = (e) => {
    return {
        type: handle_default,
        payload: e.preventDefault()
    }
}
export const handlePchange = (e) => {
    return {
        type: handle_pchange,
        payload: e.target.value,
        data: e.target.value,
    }
}
export const handleArrange = (e) => {
    return {
        type: handle_arrange,
        payload: e.target.value,
    }
}
export const handleOriginal = (data) => {
    return {
        type: handle_origin,
        payload: data
    }
}
export const handleChangePage = (data) => {
    return {
        type: handle_changePage,
        payload: data
    }
}
export const handleCart = (e, x) => {
    return {
        type: handle_cart,
        payload: e.target.value,
        cartData: x,
        click: e.preventDefault(),
    }
}
export const handlePassData = (x) => {
    return {
        type: handle_passData,
        cartData: x,
    }
}
export const handleCloseCart = (e, cartWrap) => {
    return {
        type: handle_closeCart,
        click: e.target,
        cartWrap: cartWrap
    }
}
export const handleChangePic = (e, m, x) => {
    return {
        type: handle_changePic,
        payload: x,
        payload2: m
    }
}
export const handleCartNum = (e) => {
    return {
        type: handle_cartNum,
        cartNum: e.target.value
    }
}


export const fetchRequest = () => {
    return {
        type: fetch_request
    }
}
export const fetchSuccece = (data) => {
    return {
        type: fetch_succece,
        payload: data,
        pageData: data
    }
}
export const fetchSuccece2 = (data) => {
    return {
        type: fetch_succece2,
        payload: data,
    }
}
export const fetchFailure = (error) => {
    return {
        type: fetch_failure,
        payload: error
    }
}
export const fetchFailure2 = (error) => {
    return {
        type: fetch_failure2,
        payload: error
    }
}



export const fetchPantsData = () => {
    return (dispatch) => {
        dispatch(fetchRequest());
        axios.get('https://fakestoreapi.com/products')
            .then((rep) => {
                const pantsData = rep.data;

                dispatch(fetchSuccece(pantsData));
                //此處先把總資料存到一個容器，改變資料再去這個容器撈
                dispatch(handleOriginal(pantsData));
            })
            .catch((error) => {
                const errorData = error.message;
                dispatch(fetchFailure(errorData));
            })
    }
}
export const fetchPantspage = (x) => {
    // const { id } = useParams();
    return (dispatch) => {
        dispatch(fetchRequest());
        axios.get(`https://fakestoreapi.com/products/${x}`)
            .then((rep) => {
                const pantsData = rep.data;
                dispatch(fetchSuccece2(pantsData));
            })
            .catch((error) => {
                const errorData = error.message;
                dispatch(fetchFailure2(errorData));
            })
    }
}
// export const fetchArrangeData=(e)=>{
//     return(dispatch)=>{
//         dispatch(fetchRequest());
//         // dispatch(handleArrange(e));
//         // console.log(eval(e.target.value))
//         axios.get('https://fakestoreapi.com/products')
//         .then((rep)=>{
//             const pantsData=rep.data;
//             // dispatch(fetchSuccece(pantsData));
//             dispatch(handleArrange(pantsData));
//         })
//         .catch((error)=>{
//             const errorData=error.message;
//             dispatch(fetchFailure(errorData));
//         })
//         // console.log(val)
//     }
// }
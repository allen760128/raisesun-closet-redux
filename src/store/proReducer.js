import {
    handle_pchange, handle_arrange,
    fetch_request, fetch_succece,
    fetch_failure, handle_origin,
    fetch_failure2,
    handle_changePage, handle_cart,
    handle_default, handle_closeCart,
    handle_changePic, handle_cartNum,
    handle_passData, fetch_succece2,
} from './proTypes';

const initialState = {
    price: '',
    arrange: '',
    pageChange: '',
    changeValue: '',
    loading: false,
    pantsData: [],
    error: '',
    originData: [],
    numChange: 2,
    cartValue: '',
    toggleCart: false,
    cartImg: '',
    cartNum: 1,
    border: false,
    spic: '',
    tocartWrap: '',
    to: false,
    pageData: [],
    rate: [],
}

const proReducer = (state = initialState, action) => {
    switch (action.type) {

        case handle_default: return {
            ...state,
            click: action.payload,
        }
        //價格排序
        case handle_pchange: return {
            ...state,
            price: action.payload,
            //此處用eval為了轉換型態，為轉換js字串的方法
            //pantsdata一開始是json物件，但進了value
            //json.parse是轉換josn字串的方法
            pantsData: eval(action.data),
            originData: eval(action.data),
            changeValue: 0,//換頁的值，0為第一頁

        }

        //原始資料
        case handle_origin: return {
            ...state,
            //此處為複製一個原始數據，來讓handle_arrange套用
            originData: action.payload,//原始data
        }

        //個數調整
        case handle_arrange: return {
            ...state,
            arrange: action.payload,
            // pantsData:state.originData.slice(0,action.payload),
            // pantsData:state.originData,
            numChange: action.payload,//頁面商品個數回傳值
            changeValue: 0
        }

        //換頁
        case handle_changePage: return {
            ...state,
            changeValue: action.payload * 2
        }
        case handle_cart: return {
            ...state,
            cartValue: action.cartData,//所有cart的Data
            cartImg: action.cartData.image,//cart圖片Data
            toggleCart: true,//cart的開歡
            spic: '',//讓cart小圖打開來第一個紅框
            to: true,//cart關掉後始卷軸回到scrollTop=0
        }
        case handle_passData: return {
            ...state,
            cartValue: action.cartData,//所有cart的Data
        }
        case handle_closeCart: return {
            ...state,
            toggleCart: action.click === action.cartWrap.current ? false : true,
            to: false
        }
        case handle_changePic: return {
            ...state,
            cartImg: action.payload,
            border: !state.border,
            spic: action.payload2,
        }
        case handle_cartNum: return {
            ...state,
            cartNum: action.cartNum
        }



        case fetch_request: return {
            ...state,
            loading: true
        }

        case fetch_succece: return {
            ...state,
            loading: false,
            pantsData: action.payload,
            changeValue: 0,//確保重新讀取後保持在第一頁
            // pantsData:action.payload.slice(0,12)取得payload中0~11的data生誠新陣列
            // pantsRate: action.payload.rating.rate,
            price: '',//重新讀取後排列歸零
            arrange: '',//重新讀取後個數歸零
        }
        case fetch_succece2: return {
            ...state,
            loading: false,
            // changeValue: 0,//確保重新讀取後保持在第一頁
            // pantsData:action.payload.slice(0,12)取得payload中0~11的data生誠新陣列
            // pantsRate: action.payload.rating.rate,
            pageData: action.payload,
            rate: action.payload.rating.rate,
        }
        case fetch_failure: return {
            ...state,
            loading: false,
            pantsData: [],
            error: action.payload
        }
        case fetch_failure2: return {
            ...state,
            loading: false,
            pageData: [],
            rate: [],
            error: action.payload
        }
        default: return state;
    }
}

export default proReducer;
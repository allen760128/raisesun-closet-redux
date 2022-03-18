import {handle_Prev,handle_next,handle_pic,Increase} from './bannerTypes';
import picData from '../firstpage/sec1PicData.json';
const defaultState={
    newActive:1
};
const bannerReducer=(state=defaultState,action)=>{
    switch(action.type){
        case handle_Prev:return {
            ...state,
            newActive:state.newActive>=2?state.newActive-1:state.newActive=picData.map(f=>f.id).length,
        }
        case handle_next:return{
            ...state,
            newActive:state.newActive>=picData.map(f=>f.id).length?state.newActive=1:state.newActive+1
        }
        case handle_pic:return {
            ...state,
            //此處若要取action的值，必須加上action.
            //然後在action內導入值
            newActive:state.newActive=action.id
        }
        case Increase:return {
            ...state,
            newActive:state.newActive>=picData.map(f=>f.id).length?state.newActive=1:state.newActive+1
        }
        default:return state
    }
}

export default bannerReducer;

// export default (state=defaultState,action)=>{
//     if(action.type==='handlePrev'){
//         const newState=JSON.parse(JSON.stringify(state));
//         active<=picData.map(f=>f.id).length-1? setActive(c=>c+1):setActive(1);
//         return newState;
//     }
//     return state;
// };
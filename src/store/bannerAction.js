import {handle_Prev,handle_next,handle_pic,Increase} from './bannerTypes';

export const handlePrev=(e)=>{
    return {
        type:handle_Prev,
        click:e.preventDefault()
    }
};
export const handleNext=(e)=>{
    return {
        type:handle_next,
        click:e.preventDefault()
    }
};
export const handlePic=(e,id)=>{
    console.log(id);
    return {
        type:handle_pic,
        click:e.preventDefault(),
        id:id
    }
};
export const increase=()=>{
    return {
        type:Increase
    }
}
import {Dispatch} from "redux";
import API from "../Dall/api";

const initialState:TypeInitialState = {
    headerScroll:false,
    scroll: false
}
export const setScrollAC = (scroll:boolean) => {
    return {
        type: 'reducer/SET_SCROLL',
        scroll
    }
}
export const setHeaderScrollAC = (scroll:boolean) => {
    return {
        type: 'reducer/SET_HEADER_SCROLL',
        scroll
    }
}
const Reducer = (state = initialState, action:TypeActions):TypeInitialState => {
    switch (action.type) {
        case 'reducer/SET_SCROLL': {
            return {
                ...state,
                scroll: action.scroll
            }}
        case 'reducer/SET_HEADER_SCROLL': {
            return {
                ...state,
                headerScroll: action.scroll
            }
        }
        default:{
            return  state
        }
    }

}

export const sendMailTC = (name:string,email:string,subject:string,message:string)=> async  (dispatch:Dispatch)=>{
    try{
      let result = await API.sendMail(name,email,subject,message)
        console.log(result)
    }catch (e) {
        console.log(e)
    }
}
export type TypeActions =
    | ReturnType<typeof setScrollAC>
    | ReturnType<typeof setHeaderScrollAC>
export type TypeInitialState = {
    headerScroll:boolean,
    scroll: boolean
}
export default Reducer;
const initialState = {
    headerScroll:false,
    scroll: false
}
export const setScrollAC = (scroll) => {
    return {
        type: 'reducer/SET_SCROLL',
        scroll
    }
}
export const setHeaderScrollAC = (scroll) => {
    return {
        type: 'reducer/SET_HEADER_SCROLL',
        scroll
    }
}
const Reducer = (state = initialState, action) => {
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

export default Reducer;
const initialState = {
    scroll: false
}
export const setScrollAC = (scroll) => {
    return {
        type: 'reducer/SET_SCROLL',
        scroll
    }
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'reducer/SET_SCROLL': {

            return {
                ...state,
                scroll: action.scroll
            }
        }
    }
    return state
}

export default Reducer;
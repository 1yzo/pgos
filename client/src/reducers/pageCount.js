const  defaultState = 0;

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_PAGE_COUNT':
            return action.pageCount;
        default:
            return state;
    }
}
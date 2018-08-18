const defaultState = {
    index: 0,
    orders: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                index: action.index,
                orders: action.orders
            }
        default:
            return state;
    }
}

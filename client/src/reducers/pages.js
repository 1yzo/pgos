const defaultState = {};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PAGE': {
            const nextState = { ...state };
            nextState[action.index] = [ ...action.orders ];
            return { ...nextState };
        }
        default: 
            return state;
    }
}
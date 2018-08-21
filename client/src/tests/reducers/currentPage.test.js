import currentPageReducer from '../../reducers/currentPage';
import ordersFixture from '../fixtures/orders';

const defaultState = {

}

test('should set default state', () => {
    const state = currentPageReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        index: 0,
        orders: []
    });
});

test('should set current page index with corresponding orders', () => {
    const action = {
        type: 'SET_PAGE',
        index: 0,
        orders: ordersFixture
    };
    const state = currentPageReducer(defaultState, action);
    expect(state).toEqual({
        index: 0,
        orders: ordersFixture
    });
});
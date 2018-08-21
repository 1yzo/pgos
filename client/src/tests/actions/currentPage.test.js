import { setPage } from '../../actions/currentPage';
import ordersFixture from '../fixtures/orders';

test('should generate set page action object', () => {
    const index = 0;
    const orders = ordersFixture;
    const action = setPage(index, orders);
    expect(action).toEqual({
        type: 'SET_PAGE',
        index,
        orders
    });
});

import pageCountReducer from '../../reducers/pageCount';

test('should set default state', () => {
    const state = pageCountReducer(undefined, { type: '@@INIT' });
    expect(state).toBe(0);
});

test('should set page count', () => {
    const pageCount = 45;
    const action = {
        type: 'SET_PAGE_COUNT',
        pageCount
    };
    const state = pageCountReducer(0, action);
    expect(state).toBe(pageCount);
});
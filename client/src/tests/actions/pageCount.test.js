import { setPageCount } from '../../actions/pageCount';

test('should generate set page count action object', () => {
    const pageCount = 45;
    const action = setPageCount(pageCount);
    expect(action).toEqual({
        type: 'SET_PAGE_COUNT',
        pageCount
    });
});
export const setPageCount = (pageCount) => ({
    type: 'SET_PAGE_COUNT',
    pageCount
});

export const startSetPageCount = () => {
    return (dispatch) => {
        return fetch('/orders/length')
            .then((res) => res.json())
            .then((documentCount) => {
                const pageCount = Math.ceil((documentCount / 25));
                dispatch(setPageCount(pageCount));
            });
    };
};
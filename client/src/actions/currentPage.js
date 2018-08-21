export const setPage = (index, orders) => ({
    type: 'SET_PAGE',
    index,
    orders
});

export const startSetPage = (index) => {
    return (dispatch) => {
        return fetch(`/orders?limit=25&skip=${index * 25}`)
            .then((res) => res.json())
            .then((res) => {
                dispatch(setPage(index, res));
            })
    };
}
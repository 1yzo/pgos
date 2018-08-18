import { setPage } from './currentPage';

export const addPage = (index, orders) => ({
    type: 'ADD_PAGE',
    index,
    orders
});

// export const startLoadPage = (index) => {
//     return (dispatch) => {
//         return fetch(`/orders?limit=25&skip=${index * 25}`)
//             .then((res) => res.json())
//             .then((res) => {
//                 dispatch(loadPage(index, res));
//             })
//     };
// }
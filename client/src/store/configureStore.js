import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import currentPageReducer from '../reducers/currentPage';
import pageCountReducer from '../reducers/pageCount';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
           currentPage: currentPageReducer,
           pageCount: pageCountReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    
    return store;
};
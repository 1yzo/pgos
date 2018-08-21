import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/base.css';
import App from './components/App';
import configureStore from './store/configureStore';
import { startSetPageCount } from './actions/pageCount';

const store = configureStore();

const jsx = (   
    <Provider store={store}>
        <App />
    </Provider>
);

store.dispatch(startSetPageCount()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'));
    registerServiceWorker();
})


import renderEntireTree from './render';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store';
import { checkUserAuth } from './logics/ajax_user';

if (store.getState().user.name !== '') {
    checkUserAuth();
} else {
    renderEntireTree(store.getState());
}

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

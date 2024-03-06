import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { INIT_VALUE } from './const/constRUS';

export type state = {
    valueInput: string;
    valueInputResult: string;
    valueSelect: string;
};

const defaulState = {
    valueInput: '',
    valueInputResult: '',
    valueSelect: Object.keys(INIT_VALUE.Valute)[0],
};
const reducer = (state: state = defaulState, action: any) => {
    switch (action.type) {
        case 'change_input':
            return { ...state, valueInput: action.payload };
        case 'change_input_result':
            return { ...state, valueInputResult: action.payload };
        case 'change_select':
            return { ...state, valueSelect: action.payload };
        default:
            return state;
    }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

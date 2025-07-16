import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store';
import JumpGame from './components/Home Page/JumpGame';
import './index.css';

const store = configureStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <JumpGame />
  </Provider>
);
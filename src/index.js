import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './container/registerServiceWorker';

 ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

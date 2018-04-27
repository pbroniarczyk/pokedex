import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Assets
import registerServiceWorker from './registerServiceWorker';
import './normalize.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

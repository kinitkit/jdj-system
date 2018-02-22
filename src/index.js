import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Routes from './routes';
import { Provider } from 'mobx-react';
import SampleStore from './stores/SampleStore';

require('./dist/css/index.css');

const Root = (
    <Provider SampleStore={SampleStore}>
        <Routes />
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();

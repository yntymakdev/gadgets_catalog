import { createRoot } from 'react-dom/client';

import { HashRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { Root } from './routes/index';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  </Router>,
);

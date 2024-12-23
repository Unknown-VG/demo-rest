'use client'

import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store'; // import store
import { PersistGate } from 'redux-persist/integration/react';
import './styles/globals.css'; // global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {/* Temporarily comment out PersistGate */}
          {children}
        </Provider>
      </body>
    </html>
  );
}

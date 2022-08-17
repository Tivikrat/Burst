import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store as reduxStore } from './init';
import { App } from './view';

const Root = () => (
    <ReduxProvider store = { reduxStore }>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ReduxProvider>
);

const container = document.getElementById('app');

if (container) {
    createRoot(container).render(<Root/>);
}

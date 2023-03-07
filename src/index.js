import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
    
createRoot(document.querySelector('#root'))
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>);
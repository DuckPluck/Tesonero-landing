import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// TODO: Поправить съехавшую верстку для IE11
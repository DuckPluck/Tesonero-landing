import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)


// TODO почистить media запросы в css
// TODO накинуть базовую семантику
// TODO адаптив
// TODO карусель
// TODO добавить бабел для работы деструктуризации на IE (мб еще что-то)
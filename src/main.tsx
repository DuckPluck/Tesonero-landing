import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)


// TODO накинуть базовую семантику
// TODO адаптив
// TODO карусель
// TODO добавить бабел для работы деструктуризации на IE (мб еще что-то)
// TODO вывести в консоль app ascii арт типа powered by DuckPluck и ссылку на git

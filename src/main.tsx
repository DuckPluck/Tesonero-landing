import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// TODO поправить высоту Home, чтобы была по высоте экрана
// TODO перетащить структуру в новый проект без материалс и sass (npm i @react-spring/parallax)
// TODO накинуть базовую семантику
// TODO адаптив
// TODO карусель
// TODO прозрачность фона + паралакс
// TODO добавить бабел для работы деструктуризации на IE (мб еще что-то) (найти ресурс для проверки)
// TODO вывести в консоль app ascii арт типа powered by DuckPluck и ссылку на git

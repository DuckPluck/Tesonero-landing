import React, {FC, useEffect} from 'react';
import './App.scss';
import Home from './components/Home';
import About from './components/About';


const App: FC = () => {
    useEffect(() => {
        console.log('Made by DuckPluck\nhttps://github.com/DuckPluck');
    })


    return (
        <div className='App'>
                    <Home />
                    <About />
        </div>
    )
}

export default App;

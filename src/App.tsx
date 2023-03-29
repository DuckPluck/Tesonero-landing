import React from 'react';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import bubbles1 from './assets/bg-pattern1.png';
import bubbles2 from './assets/bg-pattern2.png';

function App() {

    return (
        <div className='App'>
            <Parallax pages={1.5} style={{top: '0', left: '0'}}>
                <ParallaxLayer
                    offset={0.5}
                    speed={0.3}
                    factor={0.5}
                    style={{}}
                    className={'parallaxLayer'} >

                    <img src={bubbles1} alt={''} style={{position: 'absolute', right: '67%'}}/>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.15}
                    speed={0.25}
                    factor={0.5}
                    style={{
                        backgroundImage: bubbles2,
                    }}
                    className={'parallaxLayer'}  >

                    <img src={bubbles2} alt={''} style={{position: 'absolute', left: '67%'}}/>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={1}
                    factor={1}
                    style={{}}
                    className={'parallaxLayer'}
                >
                    <Home />
                    <About />
                </ParallaxLayer>
            </Parallax>


        </div>
    )
}

export default App;

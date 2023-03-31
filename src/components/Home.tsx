import React, {FC, useEffect} from 'react';
import Navbar from './Navbar';
import bannerItem1 from '../Assets/banner-item1.svg';
import bannerItem2 from '../Assets/banner-item2.svg';
import bannerItem3 from '../Assets/banner-item3.svg';
import bannerItem4 from '../Assets/banner-item4.svg';
import bubbles1 from '../assets/bg-pattern1.png';
import bubbles2 from '../assets/bg-pattern2.png';
import berry from '../assets/berry.png';


const Home: FC = () => {

    useEffect(() => {
        const bubbles1 = document.getElementById('bubbles1');
        const bubbles2 = document.getElementById('bubbles2');

        const scrollHandler = () => {
            let value = window.scrollY;
            bubbles1!.style.top = 300 + value * -0.3 + 'px';
            bubbles2!.style.top = value * -0.5 + 'px';
        }

        window.addEventListener(('scroll'), scrollHandler)

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    return (
        <div className='home-section-container'>
            <Navbar />
            <section className='home-banner-container'>
                <div className="home-banner-parallax">
                    <img src={bubbles1} alt={''} className='parallax-layer' id='bubbles1' />
                    <img src={bubbles2} alt={''} className='parallax-layer' id='bubbles2' />
                </div>
                <hr />
                <h1>Lorem ipsum, dolor sit amet consectetur</h1>
                <div className='home-banner-row'>
                    <div className='home-banner-item'>
                        <img src={bannerItem1} alt={''} />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='home-banner-item'>
                        <img src={bannerItem2} alt={''} />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='home-banner-row-berry'>
                    <div className='home-banner-item'>
                        <img src={bannerItem3} alt={''} />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='home-banner-berry'>
                        <img src={berry} alt={''} />
                    </div>
                    <div className='home-banner-item'>
                        <img src={bannerItem4} alt={''} />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='home-banner-row'>
                    <div className='home-banner-item'>
                        <img src={bannerItem1} alt={''} />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='home-banner-item'>
                        <img src={bannerItem2} alt={''} />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
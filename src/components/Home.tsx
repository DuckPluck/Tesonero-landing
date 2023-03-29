import React from 'react';
import Navbar from './Navbar';
import bannerItem1 from '../Assets/banner-item1.svg'
import bannerItem2 from '../Assets/banner-item2.svg'
import bannerItem3 from '../Assets/banner-item3.svg'
import bannerItem4 from '../Assets/banner-item4.svg'
import berry from '../Assets/berry.png'


const Home = () => {
    return (
        <div className='home-section-container'>
            <Navbar />
            <div className='home-banner-container'>
                <hr />
                <h1>Lorem ipsum, dolor sit amet consectetur</h1>
                <div className='home-banner-row'>
                    <div className='home-banner-item'>
                        <img src={bannerItem1} alt={''}/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='home-banner-item'>
                        <img src={bannerItem2} alt={''}/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='home-banner-row-berry'>
                    <div className='home-banner-item'>
                        <img src={bannerItem3} alt={''}/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='home-banner-berry'></div>
                    <div className='home-banner-item'>
                        <img src={bannerItem4} alt={''}/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='home-banner-row'>
                    <div className='home-banner-item'>
                        <img src={bannerItem1} alt={''}/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='home-banner-item'>
                        <img src={bannerItem2} alt={''}/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
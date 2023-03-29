import React, {FC} from 'react';
import Reviews from './Reviews';
import Advantages from './Advantages';


const About: FC = () => {
    return (
        <>
            <div className='about-section-container'>
                <Reviews />
                <Advantages />
            </div>
        </>
    );
};

export default About;
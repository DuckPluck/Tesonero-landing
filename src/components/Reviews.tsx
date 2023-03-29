import React, {FC} from 'react';
import {reviews} from '../../data';


const Reviews: FC = () => {
    return (
        <div className='reviews-section-container'>
            <hr />
            <h2>Они уже экономят с Stability 24.<br />Присоединяйся!</h2>
            <div className='reviews-main-quote'>
                <div className='reviews-quote-avatar'>
                    <img src={reviews.mainQuote.avatar} alt={''} />
                </div>
                <div className='reviews-quote-text'>
                    <p className='quote-text'>{reviews.mainQuote.text}</p>
                    <p className='quote-text-author'>{reviews.mainQuote.author}</p>
                </div>
            </div>
            <div className='reviews-sub-quotes'>
                <div className='reviews-sub-quote-left'>
                    <div className='reviews-sub-quote-left-text'>
                        <p className='quote-text'>{reviews.leftQuote.text}</p>
                        <p className='quote-text-author'>{reviews.leftQuote.author}</p>
                    </div>
                    <div className='reviews-sub-quote-left-avatar'>
                        <img src={reviews.leftQuote.avatar} alt={''} />
                    </div>

                </div>
                <div className='reviews-sub-quote-right'>
                    <p className='quote-text'>{reviews.rightQuote.text}</p>
                    <p className='quote-text-author'>{reviews.rightQuote.author}</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
import React, {FC} from 'react';
import {reviews} from '../../data';


const Reviews: FC = () => {
    return (
        <section className='reviews-section-container'>
            <hr />
            <h2>Они уже экономят с Stability 24.<br />Присоединяйся!</h2>
            <div className='reviews-main-quote'>
                <div className='reviews-quote-avatar'>
                    <img src={reviews.mainQuote.avatar} alt={''} />
                </div>
                <article className='reviews-quote-text-container'>
                    <i className="quote-mark-open" />
                    <i className="quote-mark-close" />
                    <p className='quote-text'>{reviews.mainQuote.text}</p>
                    <p className='quote-text-author'>{reviews.mainQuote.author}</p>
                </article>
            </div>
            <div className='reviews-sub-quotes'>
                <div className='reviews-sub-quote-left'>
                    <article className='reviews-sub-quote-left-text'>
                        <p className='quote-text'>{reviews.leftQuote.text}</p>
                        <p className='quote-text-author'>{reviews.leftQuote.author}</p>
                    </article>
                    <div className='reviews-sub-quote-left-avatar'>
                        <img src={reviews.leftQuote.avatar} alt={''} />
                    </div>

                </div>
                <div className='reviews-sub-quote-right'>
                    <article className='reviews-sub-quote-right-text'>
                        <p className='quote-text'>{reviews.rightQuote.text}</p>
                        <p className='quote-text-author'>{reviews.rightQuote.author}</p>
                    </article>
                    <div className='reviews-sub-quote-right-avatar'>
                        <img src={reviews.rightQuote.avatar} alt={''} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
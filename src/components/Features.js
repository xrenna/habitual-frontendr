import React from 'react'
import sprite from '../imgs/sprite.svg'

const Features = () => {
    return (
        <section className='features'>
            <div className='features__card'>
                <svg className="features__icon">
                    <use href={sprite + '#icon-text-document'} />
                </svg>
                <p className='features__text'>Set weekly goals to establish new habits and improve yourself</p>
            </div>
            <div className='features__card'>
                <svg className="features__icon">
                    <use href={sprite + '#icon-hair-cross'} />
                </svg>
                <p className='features__text'>Target new habits in different facets of your life to become a better you</p>
            </div>
            <div className='features__card'>
                <svg className="features__icon">
                    <use href={sprite + '#icon-stopwatch'} />
                </svg>
                <p className='features__text'>A new habit forms in just 21 days, let Habitual be the beginning of this journey</p>
            </div>
        </section>
    )
}

export default Features

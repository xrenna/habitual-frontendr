import React from 'react'
import sprite from '../imgs/sprite.svg'

const Features = () => {
    return (
        <section className='features'>
            <div className='features__card'>
            <svg className="features__icon">
                <use href={sprite + '#icon-text-document'} />
            </svg>
            <p className=''></p>
            </div>
        </section>
    )
}

export default Features

import React from 'react'

const Demo = () => {
    return (
        <section className='demo'>
            <div className='demo__description'>
            <h3 className='demo__header heading-tertiary'>About Habitual</h3>
                <p className='text text--1'>
                    Habitual is a habit tracker SPA that allows users to track their progress, set frequency by week, and manage their goals for personal growth.
                </p>
                <p className='text text--2'>
                    Engineered the UI using React.js and Redux to manage the state of application & used Redux and Thunk middleware to retrieve data and implement data persistence to a RoR backend.
                </p>
                <p className='text text--3'>
                    Implemented Sass as a CSS precompiler to efficiently design the UX.
                </p>
            </div>
            <div className='demo__box'>
                Will hold the dif of the demo eventually 
            </div>
            <button className='btn demo__btn'>Try it out now</button>
        </section>
    )
}

export default Demo

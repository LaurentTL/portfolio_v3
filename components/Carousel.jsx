import React from 'react'
import { Items } from './Items'
import Testimonials from './Testimonials'
import styles from '../styles/carousel.module.css'

function Carousel() {
    return (
        <section className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${styles.bg}`}>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-xl mt-10 mb-10 font-bold text-center">
                    {/* <span className='whitespace-nowrap'>Carousel</span>{' '} */}
                    <span className='whitespace-nowrap'>Technologies I use to work with</span>
                </h3>
                <Items />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="container mx-auto lg:max-w-[70%] lg:px-10">
                    <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">Web believe in good communication and a fully transparant development.</h3>
                </div>
            </div>
            <Testimonials />
            <div className="flex-1 bg-black"></div>
        </section>
    )
}

export default Carousel

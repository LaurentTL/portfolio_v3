import React, { useContext, useCallback } from 'react'
import { SecondCarouselContext } from './SecondCarousel'
import styles from '../styles/second-carousel.module.css'

const SecondCarouselItem = ({ index, children }) => {
    const { embla: emblaApi, selectedIndex } = useContext(SecondCarouselContext)
    const isActive = selectedIndex === index
    const handleClick = useCallback(() => {
        if (emblaApi === undefined) return
        emblaApi.scrollTo(index)
    }, [emblaApi, index])



    return (
        <div className={`${styles.slide} relative ${isActive ? 'active' : ''}`} onClick={handleClick}>{children}</div>
    )
}

export default SecondCarouselItem
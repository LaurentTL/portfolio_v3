import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import Autoplay from 'embla-carousel-autoplay'
import styles from '../styles/second-carousel.module.css'

export const SecondCarouselContext = React.createContext({
    embla: undefined,
    selectedIndex: -1
})

const SecondCarousel = ({ children, className }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [viewportRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false
    }, [ClassNames(), Autoplay()])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap)
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <SecondCarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
            <div ref={viewportRef} className={`${styles.viewport} w-full overflow-hidden ${className}`}>
                <div className={`${styles.container} flex`}>
                    {children}
                </div>
            </div>
        </SecondCarouselContext.Provider>
    )
}

export default SecondCarousel
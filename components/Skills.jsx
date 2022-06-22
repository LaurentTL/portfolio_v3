import React, { useContext, useRef } from 'react'
import s from './../styles/skills.module.css'
import { ScrollContext } from './ScrollObserver'

const opacityForBlock = (sectionProgress, blockNo) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}

function Skills() {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef(null)
    const numOfPages = 4
    let progress = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(
            clientHeight + halfH,
            Math.max(-screenH, scrollY - offsetTop) + halfH
        ) / clientHeight
        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    }
    return (
        <div ref={refContainer} className='bg-black text-white'>
            <div className="min-h-screen text-6xl max-w-5xl mx-auto px-10 py-20 md:py-28 lg:py-36 flex flex-col items-center justify-center md:text-6xl lg:text-7xl font-semibold">
                <div className="leading-[1.15]">
                    <div className={s.skillText} style={{
                        opacity: opacityForBlock(progress, 0)
                    }}>
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <span className={`${s.skillText} inline-block after:content-['-']`} style={{
                        opacity: opacityForBlock(progress, 1)
                    }}>
                        Lorem ipsum lor sit amet consectetur, adipisicing elit. Est veniam mollitia, fugiat vel quidem animi?
                    </span>
                    <span className={`${s.skillText} inline-block`} style={{
                        opacity: opacityForBlock(progress, 2)
                    }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est veniam mollitia, fugiat vel quidem animi?
                    </span>
                    <span className={s.skillText} style={{
                        opacity: opacityForBlock(progress, 3)
                    }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est veniam mollitia, fugiat vel quidem animi?
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Skills
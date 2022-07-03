import React, { useContext, useRef } from 'react'
import s from './../styles/skills.module.css'
import Emoji from './Emoji'
import { ScrollContext } from './ScrollObserver'

const opacityForBlock = (sectionProgress, blockNo) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}


function Skills() {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef(null)
    const numOfPages = 5
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
                        This portfolio is the reflect of my main specialisation in ReactJs with NextJs <Emoji symbol="🔥" label="fire" />
                    </div>
                    <span className={`${s.skillText} inline-block`} style={{
                        opacity: opacityForBlock(progress, 1)
                    }}>
                        I desire to bring my FrontEnd experience in quality projects <Emoji symbol="🎯" label="target" />
                    </span>
                    <span className={`${s.skillText} inline-block`} style={{
                        opacity: opacityForBlock(progress, 2)
                    }}>
                        I am curently available for a permanent contract to join a great technical team <Emoji symbol="🏆" label="trophy" />
                    </span>
                    <span className={`${s.skillText} inline-block`} style={{
                        opacity: opacityForBlock(progress, 3)
                    }}>
                        My web agency experience was just incredible <Emoji symbol="💻" label="computer" />
                    </span>
                    <span className={`${s.skillText} inline-block`} style={{
                        opacity: opacityForBlock(progress, 4)
                    }}>
                        But I think I{`'`}ll thrive just as much in a startup or a big company <Emoji symbol="🚀" label="rocket" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Skills

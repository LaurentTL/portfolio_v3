import React, { useEffect, useRef, useState, useContext } from 'react'
import FOG from 'vanta/dist/vanta.fog.min'
import * as THREE from 'three'
import Masthead from './Masthead'
import { ScrollContext } from './ScrollObserver'


const CanvasBgGradient = () => {

    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    const { scrollY } = useContext(ScrollContext)

    let progress = 0

    const { current: elContainer } = myRef
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(FOG({
                el: myRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0xffffff,
                lowlightColor: 0x272fbb,
                baseColor: 0xc8c8c8,
                blurFactor: 0.90,
                speed: 3.90,
                zoom: 0.20
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])


    return <div ref={myRef} className='w-100 flex flex-col items-center justify-center h-screen sticky top-0 -z-10' style={{
        transform: `translateY(-${progress * 20}vh)`
    }}>
        <Masthead />
    </div>
}

export default CanvasBgGradient

import React from 'react'
import ArrowDown from './ArrowDown'

function Masthead() {

    return (
        <div className='min-h-screen flex flex-col items-center justify-center z-10'>
            <div className='p-12 font-bold drop-shadow-[0_5px_3px_rgba(0,0,0,0.1)] text-center flex-1 flex items-center justify-center flex-col'>
                <h1 className='uppercase mb-6 text-4xl xl:text-6xl'>Laurent Treuil</h1>
                <h2 className='uppercase mb-2 text-xl xl:text-3xl'>Front-End Developer</h2>
            </div>
            <ArrowDown />
        </div>
    )
}

export default Masthead

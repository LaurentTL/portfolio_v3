import Image from 'next/image'
import ArrowDownSvg from './../public/arrow-down.svg'
import React from 'react'

function ArrowDown() {
    return (
        <div className='flex-grow-0 pb-20 md:pb-10 transition-opacity duration-1000'>
            <Image
                src={ArrowDownSvg}
                alt='arrow-down-svg'
                width={80}
                height={80}
            />
        </div>
    )
}

export default ArrowDown

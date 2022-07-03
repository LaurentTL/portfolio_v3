import Image from 'next/image'
import React from 'react'

function Show({ path, alt }) {
    return (
        <div className='flex flex-1 items-center justify-center border border-gray-50 overflow-hidden shadow-2xl rounded-lg'>
            <Image
                src={path}
                objecFit='auto'
                alt={alt}
            />
        </div>
    )
}

export default Show
import React from 'react'
import Show from '../components/Show'
import skillex from '../public/skillex.jpeg'

function test() {
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <Show path={skillex} alt={'skillex'} />
        </div>
    )
}

export default test
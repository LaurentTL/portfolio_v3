import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section className='w-full bg-white p-2 flex justify-center items-end pb-10'>
            <div className="flex flex-col items-center space-y-3">

                <h2 className='text-3xl uppercase mt-10 mb-12'>
                    Get in touch
                </h2>
                <div className="flex flex-col space-x-10">
                    <div className="flex space-x-6">
                        <Link href="mailto:m.bluth@example.com">
                            <a>laurent.treuil@gmail.com</a>
                        </Link>
                        <Link href="https://linkedin.com/in/laurent-treuil">
                            <a target="_blank">LinkedIn</a>
                        </Link>
                        <Link href="https://github.com/LaurentTL">
                            <a target="_blank">GitHub</a>
                        </Link>
                    </div>
                    <p>Portfolio - 2022 / Laurent Treuil</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
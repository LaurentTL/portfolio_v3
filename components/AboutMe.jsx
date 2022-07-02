import React from 'react'

function AboutMe() {
    return (
        <section className={`flex flex-col items-center bg-white py-10 text-3xl md:text-4xl`}>
            <div className="container mx-auro p-11">
                <p className='mx-auto font-light leading-tight max-w-5xl max-auto text-3xl tracking-tight'>
                    <strong>Hello and welcome on my brand new web Porfolio!</strong>{' '}
                    As mentionned above, my name is Laurent Treuil and I am a passionnate FrontEnd web developer based near <strong>Paris</strong> (France).
                </p>
                <p className='mt-10 mx-auto font-light leading-tight max-w-5xl max-auto text-3xl tracking-tight'>
                    I followed two web development trainings, a bootcamp of two monthes called <strong>Le Wagon</strong> Paris and antoher of one year at <strong>Greta92</strong>.
                </p>
                <p className='mt-10 mx-auto font-light leading-tight max-w-5xl max-auto text-3xl tracking-tight'>
                    Those trainings bring me a Fullstack scope for my FrontEnd specialisation.
                </p>
                <p className='mt-10 mx-auto font-light leading-tight max-w-5xl max-auto text-3xl tracking-tight'>
                    At the beginning of 2022 I did a three-month internship in <strong>Eanet</strong>, an awesome web Agency, where i mostly did FrontEnd development and project management.
                </p>
            </div>
        </section>
    )
}

export default AboutMe

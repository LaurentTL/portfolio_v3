import React from 'react'
import SecondCarousel from './SecondCarousel'
import SecondCarouselItem from './SecondCarouselItem'
import Review from './Review'

const Testimonials = () =>

    <SecondCarousel className="bg-black text-white py-10 lg:py-20">
        <SecondCarouselItem index={0}>
            <Review by="Soupramanien (Head Teacher at Greta92)">
                Laurent is rigorous, dynamic and autonomous. He perfectly mastered front-end technologies (CSS, JS, React.js) as well as back-end technologies (PHP, Ruby on Rails, Symfony). I recommend Laurent for his talents as a web developer.
            </Review>
        </SecondCarouselItem>
        <SecondCarouselItem index={1}>
            <Review by="Claudine (Art Director at Eanet)">
                Curious, responsible, very involved and naturally endowed with a critical and synthetic spirit, Lauren is an engine who loves challenges and investing in new projects. Endowed with a strong team spirit, he has also always been able to work in perfect autonomy and responsibility throughout his missions!
            </Review>
        </SecondCarouselItem>
        <SecondCarouselItem index={2}>
            <Review by="Soupramanien (Head Teacher at Greta92)">
                Laurent is rigorous, dynamic and autonomous. He perfectly mastered front-end technologies (CSS, JS, React.js) as well as back-end technologies (PHP, Ruby on Rails, Symfony). I recommend Laurent for his talents as a web developer.
            </Review>
        </SecondCarouselItem>
        <SecondCarouselItem index={3}>
            <Review by="Claudine (Art Director at Eanet)">
                Curious, responsible, very involved and naturally endowed with a critical and synthetic spirit, Lauren is an engine who loves challenges and investing in new projects. Endowed with a strong team spirit, he has also always been able to work in perfect autonomy and responsibility throughout his missions!
            </Review>
        </SecondCarouselItem>
    </SecondCarousel>

export default Testimonials
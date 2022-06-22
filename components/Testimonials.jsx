import React from 'react'
import SecondCarousel from './SecondCarousel'
import SecondCarouselItem from './SecondCarouselItem'
import Review from './Review'

const Testimonials = () =>

    <SecondCarousel className="bg-black text-white py-10 lg:py-20">
        <SecondCarouselItem index={0}>
            <Review by="Axel (Showtime)">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis illum! Amet est atque debitis ut libero exercitationem, hic consequuntur?
            </Review>
        </SecondCarouselItem>
        <SecondCarouselItem index={1}>
            <Review by="Axel (Showtime)">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis illum! Amet est atque debitis ut libero exercitationem, hic consequuntur?
            </Review>
        </SecondCarouselItem>
        <SecondCarouselItem index={2}>
            <Review by="Axel (Showtime)">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis illum! Amet est atque debitis ut libero exercitationem, hic consequuntur?
            </Review>
        </SecondCarouselItem>
        <SecondCarouselItem index={3}>
            <Review by="Axel (Showtime)">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis illum! Amet est atque debitis ut libero exercitationem, hic consequuntur?
            </Review>
        </SecondCarouselItem>
        <SecondCarouselItem index={4}>
            <Review by="Axel (Showtime)">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis illum! Amet est atque debitis ut libero exercitationem, hic consequuntur?
            </Review>
        </SecondCarouselItem>
    </SecondCarousel>

export default Testimonials
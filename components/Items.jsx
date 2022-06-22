import React from 'react'
import Image from 'next/image'
import SliderContainer, { SliderItem } from './Slider'
import sf from '../public/sf.png'
import cc from '../public/cc.png'
import fav from '../public/favicon.ico'

export const Items = () => (
    <>
        <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
            <SliderItem width={150}>
                <Image
                    src={sf}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={cc}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={fav}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={sf}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={sf}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={cc}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={fav}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={sf}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={sf}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={cc}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={fav}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={sf}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
        </SliderContainer>
    </>
)
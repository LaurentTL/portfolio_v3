import React from 'react'
import Image from 'next/image'
import SliderContainer, { SliderItem } from './Slider'
import sf from '../public/sf.png'
import cc from '../public/cc.png'
import gql from '../public/gql-logo.png'
import react from '../public/react-logo.png'
import ts from '../public/ts.png'
import tw from '../public/tailwind.png'
import ror from '../public/ror.png'
import redux from '../public/redux.png'
import next from '../public/next.png'
import parcel from '../public/parcel.png'
import sass from '../public/sass.png'
import wp from '../public/wp.png'
import webpack from '../public/webpack.png'
import activ from '../public/activ.png'
import figma from '../public/figma.png'


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
                    src={next}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={react}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
        </SliderContainer>
        <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
            <SliderItem width={150}>
                <Image
                    src={ts}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={redux}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={sass}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={webpack}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={parcel}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={tw}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={gql}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
        </SliderContainer>
        <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
            <SliderItem width={150}>
                <Image
                    src={wp}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={ror}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={activ}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image
                    src={figma}
                    width={150}
                    height={50}
                    alt="item"
                    objectFit="contain"
                />
            </SliderItem>
        </SliderContainer>

    </>
)
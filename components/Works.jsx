import Image from 'next/image'
import React from 'react'
import { ProjectBackground, ProjectWrapper, ProjectContent, Project } from './Project'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight, WorkLink } from './work'
import rockPic from './../public/1.jpeg'
import skillex from './../public/skillex.png'
import reddit from './../public/reddit.png'
import dm from './../public/dm.png'
import p2020 from './../public/p2020.png'

function Works() {
    return (
        <ProjectWrapper numOfPages={3}>
            <ProjectBackground>
                <WorkBackground />
            </ProjectBackground>
            <ProjectContent>
                <Project page={0}
                    renderContent={({ progress }) => (
                        <WorkContainer>
                            <WorkLeft progress={progress}>
                                <div>I{`'`}ve build</div>
                                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                    <WorkLink href={'https://skillexclone.netlify.app'}>Skillex<br /> home page<br /> integration</WorkLink>
                                </div>
                            </WorkLeft>
                            <WorkRight progress={progress}>
                                <Image
                                    src={skillex}
                                    layout='fill'
                                    objectFit='cover'
                                    alt='rocks'
                                />
                            </WorkRight>
                        </WorkContainer>
                    )}>
                </Project>
                <Project page={1}
                    renderContent={({ progress }) => (
                        <WorkContainer>
                            <WorkLeft progress={progress}>
                                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                    <WorkLink href={'https://reddit-clone.laurenttl.vercel.app/'}>Reddit clone</WorkLink>
                                </div>
                            </WorkLeft>
                            <WorkRight progress={progress}>
                                <Image
                                    src={reddit}
                                    layout='fill'
                                    objectFit='cover'
                                    alt='rocks'
                                />
                            </WorkRight>
                        </WorkContainer>
                    )}>
                </Project>
                <Project page={2}
                    renderContent={({ progress }) => (
                        <WorkContainer>
                            <WorkLeft progress={progress}>
                                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                    <WorkLink href={'https://www.dm-gestion-syndics.fr/'}>DM Gestion Syndics</WorkLink>
                                    <p className='font-semibold'>@Eanet</p>
                                </div>
                            </WorkLeft>
                            <WorkRight progress={progress}>
                                <Image
                                    src={dm}
                                    layout='fill'
                                    objectFit='cover'
                                    alt='rocks'
                                />
                            </WorkRight>
                        </WorkContainer>
                    )}>
                </Project>
                <Project page={3}
                    renderContent={({ progress }) => (
                        <WorkContainer>
                            <WorkLeft progress={progress}>
                                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                    <WorkLink href={'https://laurenttreuil.herokuapp.com/'}>Portfolio 2020</WorkLink>
                                </div>
                            </WorkLeft>
                            <WorkRight progress={progress}>
                                <Image
                                    src={p2020}
                                    layout='fill'
                                    objectFit='cover'
                                    alt='rocks'
                                />
                            </WorkRight>
                        </WorkContainer>
                    )}>
                </Project>
            </ProjectContent>
        </ProjectWrapper>
    )
}

export default Works

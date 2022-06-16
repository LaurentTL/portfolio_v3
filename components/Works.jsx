import Image from 'next/image'
import React from 'react'
import { ProjectBackground, ProjectWrapper, ProjectContent, Project } from './Project'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight, WorkLink } from './work'
import rockPic from './../public/1.jpeg'

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
                                <div>we build</div>
                                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                    <WorkLink href={'#'}>Pink apps</WorkLink>
                                </div>
                            </WorkLeft>
                            <WorkRight progress={progress}>
                                <Image
                                    src={rockPic}
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
                                <div className="">Lorem ipsum dolor sit amet.</div>
                            </WorkLeft>
                            <WorkRight progress={progress}>
                                <Image
                                    src={rockPic}
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
                                <div className="">Lorem ipsum dolor sit amet.</div>
                            </WorkLeft>
                            <WorkRight progress={progress}>
                                <Image
                                    src={rockPic}
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

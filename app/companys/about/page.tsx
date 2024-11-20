// 'use client'

import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import CallToAction from '@/components/CallToAction';
import { Metadata } from 'next';
import GeneralFooter from '@/components/GeneralFooter';
import Image from 'next/image';
import Button from '@/components/Button';
import { FaArrowCircleRight } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
    title: 'About | CoinBank',
    description: 'The next-generation crypto-wallet & trading platform.'
}

const About = () => {
    // const router = useRouter();

    // const navigateToSignUp = () => {
    //     router.push('/authentication/signup');
    // }

    return (
        <>
            {/* Hero */}
            <Section bgClass="aboutsectionH1Bg" classname='mt-0 pt-0' customStyles='bg-white'>
                <Container>
                    <div className='flex gap-4 items-center flex-col'>
                        <h6 className="text-mainColorPrimary font-light">ABOUT</h6>
                        <h1 className="text-mainColorSecondary text-4xl md:text-5xl max-w-3xl text-center font-bold" style={{ lineHeight: '120%' }}>Building cryptocurrency platform for everyone</h1>
                        <Image src="/aboutHeroImage.svg"
                            alt="aboutHeroImage"
                            width={100}
                            height={100}
                            className="w-auto h-auto md:mt-44 mt-10"
                        />
                    </div>
                </Container>
            </Section>

            {/* Mission */}
            <Section classname='min-h-screen mt-24' customStyles='bg-white'>
                <Container>
                    <div className="flex flex-col md:flex-row gap-16 justify-between">
                        {/* Left Content */}
                        <div className="space-y-4 md:w-5/12">
                            <h1 className="text-mainColorSecondary text-4xl md:text-5xl max-w-3xl font-normal" style={{ lineHeight: '120%' }}>
                                Our Mission
                            </h1>
                            <p className="text-mainColorNeutral font-light text-sm leading-6">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                            </p>
                            <Button noBackground className="text-nowrap flex items-center gap-2 text-mainColorPrimary">
                                Learn More <FaArrowCircleRight />
                            </Button>
                        </div>

                        {/* Right Content */}
                        <div className="md:space-y-16 space-y-6 md:w-4/12">
                            <div className="p-6 border-[1.8px] rounded-xl flex justify-between items-center">
                                <h1 className="text-xl text-nowrap text-mainColorSecondary font-normal">1 Million</h1>
                                <p className="text-mainColorNeutral font-light">Average daily volume</p>
                            </div>
                            <div className="p-6 border-[1.8px] rounded-xl flex items-center justify-between">
                                <h1 className="text-xl text-nowrap text-mainColorSecondary font-normal">300k+</h1>
                                <p className="text-mainColorNeutral font-light">Transactions per second</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Call to Action Section */}
            <Section classname="bg-[#F7F6FE] md:pb-28 pb-0 md:pt-10 pt-20">
                <Container>
                    <CallToAction />
                </Container>
            </Section>

            <Section classname="bg-[#F7F6FE] md:pb-20 pb-10 md:pt-10 pt-20">
                <Container>
                    <GeneralFooter />
                </Container>
            </Section>
        </>
    )
}

export default About;

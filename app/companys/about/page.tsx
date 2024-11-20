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
import TestimonialCards from '@/components/TestimonialCards';
// import SponsorMarquee from '@/components/Sponsors';
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
                            className="w-auto h-auto md:mt-40 mt-10"
                            loading='lazy'
                        />
                    </div>
                </Container>
            </Section>

            {/* Mission */}
            <Section classname='mt-24' customStyles='bg-white'>
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

            {/* Quotes */}
            <Section classname='mt-40' customStyles='bg-white'>
                <Container>
                    <div className="flex flex-col gap-12 items-center justify-center">
                        <Image
                            src="/quoteImg1.svg"
                            alt='quoteImg1'
                            width={30}
                            height={30}
                        />
                        <h1 className="text-mainColorSecondary text-center text-4xl md:text-5xl max-w-4xl font-normal" style={{ lineHeight: '120%' }}>
                            It&apos;s low fees, high rates for staking, and futures markets are all a draw.
                        </h1>
                        <div className='flex gap-4 items-center'>
                            <Image
                                src="/aboutAvatar.svg"
                                alt='aboutAvatar'
                                width={80}
                                height={80}
                            />
                            <div>
                                <h5 className='text-mainColorSecondary text-xl font-semibold'>John Clayton</h5>
                                <p className='text-mainColorNeutral font-light'>Investor</p>
                            </div>
                        </div>
                        <Image
                            src="/quoteImg2.svg"
                            alt='quoteImg2'
                            width={30}
                            height={30}
                        />

                    </div>
                </Container>
            </Section>

            {/* Gallery */}
            <Section classname='mt-40' customStyles='bg-white'>
                <Container>
                    <div className="flex flex-col gap-28 items-center justify-center">
                        <div className='flex flex-col md:flex-row justify-between gap-16'>
                            <Image
                                src="/gallery1.svg"
                                alt='gallery2-image'
                                width={100}
                                height={100}
                                className='w-auto h-auto'
                            />
                            <Image
                                src="/gallery2.svg"
                                alt='gallery2-image'
                                width={100}
                                height={100}
                                className='w-auto h-auto'
                            />
                        </div>
                        <div className='flex flex-col md:flex-row gap-12 justify-between'>
                            <h1 className="md:w-5/12 text-mainColorSecondary text-4xl md:text-5xl max-w-4xl font-normal" style={{ lineHeight: '120%' }}>
                                The power to chart your own financial course
                            </h1>
                            <p className='md:w-5/12 text-mainColorNeutral font-light text-sm'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Founders Section */}
            <Section classname="bg-white md:pb-0 pb-0 md:pt-10 pt-20">
                <Container>
                    <div className="grid md:grid-cols-3 gap-6 grid-cols-1 mt-20">
                        <TestimonialCards quote="“Cool crypto currency, fast withdrawals and deposits, way better, than any wallet.”"
                            image="/My-Pics-2.jpg"
                            name="Blessed Samuel"
                            profession="Software Developer"
                        />

                        <TestimonialCards quote="“It’s worth it, very intuitive and easy to learn about cryptocurrencies.”"
                            image="/My-Pics-2.jpg"
                            name="Blessed Samuel"
                            profession="Founder"
                        />

                        <TestimonialCards quote="“Best customer service so far. Amazing in all areas best centralized exchange.”"
                            image="/My-Pics-2.jpg"
                            name="Blessed Samuel"
                            profession="Investors"
                        />
                    </div>
                </Container>
            </Section>

            <Section bgClass='aboutsectionH2Bg' classname='mt-40 md:pb-0 pb-0 md:pt-10 pt-20' customStyles='bg-white'>
                <Container>
                    <div className="space-y-12">
                        <div className='flex gap-4 items-center flex-col'>
                            <h6 className="text-mainColorPrimary font-light">PARTNERS</h6>
                            <h1 className="text-mainColorSecondary text-4xl md:text-5xl leading-[120%] text-center font-bold">We&apos;re backed by the best</h1>
                            <p className="text-mainColorNeutral font-light">Trusted by these blockchains leading industries </p>
                        </div>

                        <div id="marqueeEl">
                            {/* <SponsorMarquee direction="left" />
                            <SponsorMarquee direction="right" /> */}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Call to Action 2 Section */}
            <Section classname="bg-[#F7F6FE] md:pb-10 pb-0 md:pt-20 pt-40">
                <Container>
                    <div className='w-auto h-auto p-20 rounded-3xl flex flex-col gap-12 items-center' style={{
                        backgroundImage: "url(/CTAbg.svg)",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <div className='flex flex-col items-center gap-6'>
                            <h1 className="text-white text-center text-4xl md:text-5xl max-w-2xl font-normal" style={{ lineHeight: '120%' }}>
                                Join our mission
                            </h1>
                            <p className="max-w-xl text-white text-center font-extralight">Join our mission to bring greater choice, independence, and opportunity to individuals around the world.</p>
                        </div>
                        <Button className="px-4 py-2 text-nowrap bg-mainColorPrimary">Visit Careers Page</Button>
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

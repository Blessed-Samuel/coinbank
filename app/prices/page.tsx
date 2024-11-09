import React from 'react';
import Image from 'next/image';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Prices | CoinBank',
    description: 'The global cryptocurrency market cap today is $971 Billion, a -0.81% change in the last 24 hours.'
}

const Price = () => {
    return (
        <>
            <Section bgClass="sectionH2Bg" classname='mt-40 min-h-screen' customStyles='bg-white'>
                <Container>
                    <div className='flex gap-4 items-center flex-col'>
                        <h6 className="text-mainColorPrimary font-light">PRICES</h6>
                        <h1 className="text-mainColorSecondary text-4xl md:text-5xl max-w-3xl text-center font-bold" style={{ lineHeight: '120%' }}>Welcome to Prices Page</h1>
                        <p className="text-mainColorNeutral font-light text-center">Keep up on all the latest trends in the crypto industry and stay ahead of the market.</p>

                        <Image src="/featuresImg.svg" alt="hero-2-bg" width={100} height={100} className="w-auto h-auto md:mt-36 mt-12" />
                    </div>
                </Container>
            </Section>
        </>
    )
}

export default Price;

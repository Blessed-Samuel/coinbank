import React from 'react';
// import Image from 'next/image';
import Section from '@/components/Section';
import Container from '@/components/Container';
import CallToAction from '@/components/CallToAction';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Prices | CoinBank',
    description: 'The global cryptocurrency market cap today is $971 Billion, a -0.81% change in the last 24 hours.'
}

const Price = () => {
    return (
        <>
            <Section bgClass='' classname=" ">
                <Container>
                    <div className='text-gray-900 text-lg'>Prices Page</div>
                </Container>
            </Section>

            {/* Call to Action Section */}
            <Section classname="min-h-screen bg-[#F7F6FE] md:pb-28 pb-0 md:pt-10 pt-20">
                <Container>
                    <CallToAction />
                </Container>
            </Section>
        </>
    )
}

export default Price;

import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { Metadata } from 'next';
import GeneralFooter from '@/components/GeneralFooter';

export const metadata: Metadata = {
    title: 'FAQs | CoinBank',
    description: 'The next-generation crypto-wallet & trading platform.'
}

const FAQs = () => {
    return (
        <>
            <Section bgClass='' classname="min-h-screen">
                <Container>
                    <div className='text-gray-900 text-lg'>FAQs Page</div>
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

export default FAQs;

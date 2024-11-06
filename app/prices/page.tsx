import React from 'react';
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
            <Section bgClass='' classname="min-h-screen">
                <Container>
                    <div className='text-gray-900 text-lg'>Prices Page</div>
                </Container>
            </Section>
        </>
    )
}

export default Price;

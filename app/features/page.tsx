import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Features | CoinBank',
    description: 'The next-generation crypto-wallet & trading platform.'
}

const Feature = () => {
    return (
        <>
            <Section bgClass='' classname="min-h-screen">
                <Container>
                    <div className='text-gray-900 text-lg'>Features Page</div>
                </Container>
            </Section>
        </>
    )
}

export default Feature;

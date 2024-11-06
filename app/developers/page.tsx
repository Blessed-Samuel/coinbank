import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Developers | CoinBank',
    description: 'Building crypto-currency platform for everyone.'
}

const Developer = () => {
    return (
        <>
            <Section bgClass='' classname="min-h-screen">
                <Container>
                    <div className='text-gray-900 text-lg'>Developers Page</div>
                </Container>
            </Section>
        </>
    )
}

export default Developer;

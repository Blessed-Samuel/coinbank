import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Liquidity | CoinBank',
    description: 'The next-generation crypto-wallet & trading platform.'
}

const Liquidity = () => {
    return (
        <>
            <Section bgClass='' classname="min-h-screen">
                <Container>
                    <div className='text-gray-900 text-lg'>Liquidity Page</div>
                </Container>
            </Section>
        </>
    )
}

export default Liquidity;

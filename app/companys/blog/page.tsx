import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import CallToAction from '@/components/CallToAction';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | CoinBank',
    description: 'The next-generation crypto-wallet & trading platform.'
}

const Blog = () => {
    return (
        <>
            <Section bgClass='' classname=" ">
                <Container>
                    <div className='text-gray-900 text-lg'>Blog Page</div>
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

export default Blog;

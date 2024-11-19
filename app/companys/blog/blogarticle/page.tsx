import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import CallToAction from '@/components/CallToAction';
import { Metadata } from 'next';
import GeneralFooter from '@/components/GeneralFooter';

export const metadata: Metadata = {
    title: 'Blog | CoinBank',
    description: 'The next-generation crypto-wallet & trading platform.'
}

const BlogArticle = () => {
    return (
        <>
            <Section bgClass='' classname=" ">
                <Container>
                    <div className='text-gray-900 text-lg'>Blog Article Page</div>
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

export default BlogArticle;

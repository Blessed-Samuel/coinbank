'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Image from 'next/image';

const CallToAction = () => {
    // Routing function for the SignUp Page
    const router = useRouter();

    const navigateToSignUp = () => {
        router.push('/authentication/signup');
    };

    return (
        <>
            <div className='bg-mainColorPrimary rounded-xl grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-20 pt-16 items-center'>
                <div className='space-y-8 md:mx-0 mx-auto md:pl-16 md:pb-10 md:items-start items-center flex flex-col'>
                    <h1 className='text-white md:max-w-sm text-5xl leading-[130%] md:text-left text-center'>
                        Sign in <span className='text-gray-200'>to get $50 worth of crypto</span>
                    </h1>
                    <Button
                        onClick={navigateToSignUp}
                        noBackground
                        className='py-2 text-nowrap bg-mainWhite text-mainColorPrimary'
                    >
                        Get Started
                    </Button>
                </div>

                <div className='md:px-0 px-10'>
                    <Image
                        src='/tradingPhoneScreen.svg'
                        alt='tradingPhoneScreen'
                        width={100}
                        height={100}
                        className='w-auto h-auto'
                    />
                </div>
            </div>
        </>
    );
};

export default CallToAction;

'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Verification() {
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Get the email query parameter safely
        const emailParam = new URLSearchParams(window.location.search).get('email');
        if (emailParam) {
            setEmail(emailParam);
        }
    }, []);// Access the email from query params

    return (
        <>
            <div className='h-screen flex items-center justify-center'>
                <div className='flex border p-14 rounded-lg shadow-[0_8px_12px_rgba(0,0,0,0.03)] flex-col mx-auto max-w-md'>
                    <div className='flex items-center space-x-2'>
                        <Image
                            src="/coinBankLogo.svg"
                            alt='coinBankLogo'
                            width={20}
                            height={20}
                        />
                        <span className='text-mainColorSecondary text-md font-semibold'>Coinbank</span>
                    </div>

                    <div className='mb-8 mt-6'>
                        <h1 className='text-mainColorSecondary text-3xl'>Check your email</h1>
                        <h6 className='text-mainColorNeutral text-sm mt-4 font-light'>
                            We emailed a link to reset your password to <strong>{email}</strong>
                        </h6>
                    </div>

                    <Button
                        onClick={() => window.location.href = `mailto:${email}`}
                        className='text-sm font-light w-full py-2 bg-mainColorPrimary hover:bg-[#462cc6] text-nowrap text-mainColorPrimary'
                    >
                        Open email
                    </Button>

                    <h5 className='mt-10 text-center text-mainColorNeutral text-xs font-normal'>
                        Continue to
                        <Link href="/authentication/signin" className="text-mainColorPrimary ml-[4px] text-xs">
                            Sign in
                        </Link>
                    </h5>
                </div>
            </div>
        </>
    );
}

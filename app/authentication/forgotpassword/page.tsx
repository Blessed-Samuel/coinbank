'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Redirect to the verification page with the input value as a query parameter
    if (input.trim()) {
      router.push(`/authentication/verification?email=${encodeURIComponent(input)}`);
    } else {
      alert('Please enter a valid email, phone number, or username');
    }
  };

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
            <h1 className='text-mainColorSecondary text-3xl'>Lookup your profile</h1>
            <h6 className='text-mainColorNeutral text-sm mt-2 font-light'>
              Enter the username, email address, or phone number linked to your account so we can give you a link to reset your password.
            </h6>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-4'>
              <input
                required
                type='text'
                name='name'
                value={input}
                onChange={handleInputChange}
                placeholder='Enter email, phone number, or username'
                className='bg-gray-50 border placeholder:font-light border-gray-300 font-normal placeholder:text-gray-400 text-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#5235E8] w-full placeholder:text-xs'
              />

              <Button
                type="submit"
                className='text-sm font-light w-full py-2 bg-mainColorPrimary hover:bg-[#462cc6] text-nowrap text-mainColorPrimary'
              >
                Reset Password
              </Button>
            </div>
          </form>

          <h5 className='mt-10 text-center text-mainColorNeutral text-xs font-normal'>
            Back to
            <Link href="/authentication/signin" className="text-mainColorPrimary ml-[4px] text-xs">
              Sign in
            </Link>
          </h5>
        </div>
      </div>
    </>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';
import Button from '@/components/Button';
import Link from 'next/link';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <>
      <div className='flex flex-col-reverse md:flex-row min-h-screen overflow-hidden gap-10 md:gap-20'>
        {/* Left Section */}
        <div className='w-full sm:w-3/5 flex flex-col mb-10 md:mb-16 md:pb-0 pb-28 md:p-0 p-6 md:ml-14 mt-6 md:mt-10 justify-center'>
          <div className='flex items-center space-x-4'>
            <Image
              src="/coinBankLogo.svg"
              alt='coinBankLogo'
              width={50}
              height={50}
            />
            <span className='text-mainColorSecondary text-2xl font-semibold'>Coinbank</span>
          </div>
          <div className='mt-12 space-y-4'>
            <h2 className='text-mainColorSecondary text-4xl'>Sign in to Coinbank</h2>
            <h6 className='text-mainColorNeutral text-sm tracking-widest'>
              We're glad you're back!
            </h6>
          </div>

          {/* Form Data Input */}
          <div className='mt-12 space-y-4'>
            <div>
              <label htmlFor="email" className='text-mainColorSecondary text-xs'>Email</label>
              <input
                required
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Your Email Address...'
                className='border placeholder:font-light border-gray-300 font-normal placeholder:text-gray-400 text-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#5235E8] w-full placeholder:text-xs'
              />
            </div>
            <div>
              <label htmlFor="password" className='text-mainColorSecondary text-xs'>Password</label>
              <div className='relative'>
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder='Your Password...'
                  className='border placeholder:font-light border-gray-300 font-normal placeholder:text-gray-400 text-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#5235E8] w-full placeholder:text-xs'
                />
                <span
                  onClick={togglePasswordVisibility}
                  className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer'
                >
                  {showPassword ? <FaEyeSlash size={17} color="#717184" /> : <FaEye size={17} color="#717184" />}
                </span>
              </div>
            </div>
            <div className=''>
              <Link href="/authentication/forgotpassword" className="text-mainColorPrimary text-xs">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className='mt-10 space-y-4'>
            <Button
              className='text-sm font-light w-full py-2 bg-mainColorPrimary hover:bg-[#462cc6] text-nowrap text-mainColorPrimary'
            >
              Sign in
            </Button>
            <Button
              noBackground
              className='text-sm font-light w-full py-2 bg-white border-[1.5px] hover:bg-[#f7f7f7] text-nowrap text-mainColorSecondary flex items-center justify-center space-x-3'
            >
              <FaGoogle size={18} color="#4285F4" />
              <span>Sign in with Google</span>
            </Button>
            <Button
              noBackground
              className='text-sm font-light w-full py-2 bg-white border-[1.5px] hover:bg-[#f7f7f7] text-nowrap text-mainColorSecondary flex items-center justify-center space-x-3'
            >
              <FaFacebook size={18} color="#1877F2" />
              <span>Sign in with Facebook</span>
            </Button>
          </div>
          <h5 className='mt-10 text-center text-mainColorNeutral font-light text-xs'>
            Don't have an account already?
            <Link href="/authentication/signup" className="text-mainColorPrimary ml-[4px] text-xs">
              Sign up now
            </Link>
          </h5>
        </div>

        {/* Right Section */}
        <div className='bg-mainColorSecondary flex flex-col-reverse justify-between items-center'>
          <div className='space-y-5 text-white mb-12 md:px-10 px-8'>
            <h1 className='text-3xl'><span>~</span>Welcome to the world of crypto! Log in for your coinbank personal wallet.</h1>
            <h5 className='text-sm font-extralight'>We're the first crypto wallet that's secure, simple, and easy to use. Use it on your phone or in web browser with no downloads or installation required.</h5>
          </div>
          <Image
            src="/signInImg.svg"
            alt='signUpImg'
            width={400}
            height={100}
            className='pt-12 pb-12 md:pb-0 translate-x-[14px] md:translate-x-[146px]'
          />
        </div>
      </div>
    </>
  );
}

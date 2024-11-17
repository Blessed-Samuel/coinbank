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
                        <h2 className='text-mainColorSecondary text-4xl'>Create an account</h2>
                        <h6 className='text-mainColorNeutral text-sm tracking-widest'>
                            Let's begin your 30-days risk-free trial.
                        </h6>
                    </div>

                    {/* Form Data Input */}
                    <div className='mt-12 space-y-4'>
                        <div>
                            <label htmlFor="name" className='text-mainColorSecondary text-xs'>Name</label>
                            <input
                                required
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder='Your Full Name...'
                                className='border placeholder:font-light border-gray-300 font-normal placeholder:text-gray-400 text-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#5235E8] w-full placeholder:text-xs'
                            />
                        </div>
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
                    </div>

                    <div className='mt-10 space-y-4'>
                        <Button
                            className='text-sm font-light w-full py-2 bg-mainColorPrimary hover:bg-[#462cc6] text-nowrap text-mainColorPrimary'
                        >
                            Create account
                        </Button>
                        <Button
                            noBackground
                            className='text-sm font-light w-full py-2 bg-white border-[1.5px] hover:bg-[#f7f7f7] text-nowrap text-mainColorSecondary flex items-center justify-center space-x-3'
                        >
                            <FaGoogle size={18} color="#4285F4" />
                            <span>Signup with Google</span>
                        </Button>
                        <Button
                            noBackground
                            className='text-sm font-light w-full py-2 bg-white border-[1.5px] hover:bg-[#f7f7f7] text-nowrap text-mainColorSecondary flex items-center justify-center space-x-3'
                        >
                            <FaFacebook size={18} color="#1877F2" />
                            <span>Signup with Facebook</span>
                        </Button>
                    </div>

                    <h5 className='mt-10 text-center text-mainColorNeutral font-light text-xs'>
                        Have an account?
                        <Link href="/authentication/signin" className="text-mainColorPrimary ml-[4px] text-xs">
                            Sign in
                        </Link>
                    </h5>

                </div>

                {/* Right Section */}
                <div className='bg-mainColorSecondary flex flex-col justify-between items-center pt-12 m:px-10 px-8'>
                    <div className='space-y-5 text-white mb-12'>
                        <h1 className='text-3xl'><span>~</span>With Coinbank, multi-signature digital wallet, you can start saving.</h1>
                        <h5 className='text-sm font-extralight'>If you're interested in getting involved in the booming cryptocurrency industry and want to own your own digital coins, then sign up with us today!</h5>
                    </div>
                    <Image
                        src="/signUpImg.svg"
                        alt='signUpImg'
                        width={560}
                        height={100}
                        className=''
                    />
                </div>
            </div>
        </>
    );
}

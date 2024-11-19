'use client';

import React, { useState } from "react";
import FooterSection from "@/components/MobileFooterSection";
import Image from "next/image";
import { BiLogoInstagram, BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoDiscord } from 'react-icons/bi';

const MobileFooter: React.FC = () => {
    const [scaledIcon, setScaledIcon] = useState('');

    const handleScale = (icon: string) => {
        setScaledIcon(scaledIcon === icon ? '' : icon);

        setTimeout(() => {
            setScaledIcon('');
        }, 200);
    };

    const mobileItems = [
        { name: 'Prices', path: './prices' },
        { name: 'Developers', path: './developers' },
        { name: 'About', path: 'companys/about' },
        { name: 'Blogs', path: 'companys/blogs' },
        { name: 'FAQs', path: 'companys/faqs' },
        { name: 'Support', path: 'companys/support' }
    ];

    return (
        <footer>
            <div className="mb-20 rounded-lg shadow-[0_8px_12px_rgba(0,0,0,0.02)] lg:hidden bg-white  text-white py-10">
                <div className="container mx-auto flex flex-col items-center text-center justify-center space-y-10">
                    <Image
                        src="./coinBankLogo.svg"
                        alt='coinBankLogo'
                        width={30}
                        height={30}
                    />
                    <FooterSection title="Company" items={mobileItems} />
                    <div className="">
                        {/* Icons */}
                        <div className='Socia-Icons text-2xl text-mainColorNeutral flex space-x-2'>
                            <button
                                onClick={() => handleScale('instagram')}
                                className={`hover:text-mainColorPrimary cursor-pointer transition-transform duration-300 ${scaledIcon === 'instagram' ? 'scale-110' : ''
                                    }`}
                            >
                                <BiLogoInstagram />
                            </button>
                            <button
                                onClick={() => handleScale('facebook')}
                                className={`hover:text-mainColorPrimary cursor-pointer transition-transform duration-300 ${scaledIcon === 'facebook' ? 'scale-110' : ''
                                    }`}
                            >
                                <BiLogoFacebook />
                            </button>
                            <button
                                onClick={() => handleScale('twitter')}
                                className={`hover:text-mainColorPrimary cursor-pointer transition-transform duration-300 ${scaledIcon === 'twitter' ? 'scale-110' : ''
                                    }`}
                            >
                                <BiLogoTwitter />
                            </button>
                            <button
                                onClick={() => handleScale('linkedIn')}
                                className={`hover:text-mainColorPrimary cursor-pointer transition-transform duration-300 ${scaledIcon === 'linkedIn' ? 'scale-110' : ''
                                    }`}
                            >
                                <BiLogoLinkedin />
                            </button>
                            <button
                                onClick={() => handleScale('discord')}
                                className={`hover:text-mainColorPrimary cursor-pointer transition-transform duration-300 ${scaledIcon === 'discord' ? 'scale-110' : ''
                                    }`}
                            >
                                <BiLogoDiscord />
                            </button>
                        </div>

                        <div className='copy-right mt-[20px]'>
                            <h5 className='text-mainColorNeutral text-xs'>Copyright 2024 © Coinbank</h5>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MobileFooter;

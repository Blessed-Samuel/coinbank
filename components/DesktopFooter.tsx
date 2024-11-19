'use client';

import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { BiChevronDown, BiLogoInstagram, BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoDiscord } from 'react-icons/bi';
import FooterLinks from '@/components/FooterLinks';
import { companyItems, featureItems, developersItems, resourcesItems } from '@/components/FooterDatas';

export default function DesktopFooter() {
    // State for holding the selected language
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [scaledIcon, setScaledIcon] = useState('');

    // // Array of languages to choose from
    const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean']

    // Handle change event for the select field
    const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
    };

    const handleScale = (icon: string) => {
        setScaledIcon(scaledIcon === icon ? '' : icon);

        setTimeout(() => {
            setScaledIcon('');
        }, 200);
    };

    return (
        <footer className='bg-white rounded-3xl shadow-[0_8px_12px_rgba(0,0,0,0.02)]'>
            <div className='p-16 flex justify-between'>

                <div>
                    <div className='space-y-6'>
                        <Image
                            src="./coinBankLogo.svg"
                            alt='coinBankLogo'
                            width={50}
                            height={50}
                        />

                        {/* Selection input field */}
                        <div className='language-selector'>
                            <div className="relative items-center">
                                <select
                                    id="language"
                                    value={selectedLanguage}
                                    onChange={handleLanguageChange}
                                    className="border border-gray-300 text-mainColorNeutral text-sm rounded-lg px-4 py-2 pr-14 focus:outline-none focus:border-blue-500 appearance-none"
                                >
                                    <option value="" disabled>
                                        Select language
                                    </option>
                                    {languages.map((language, index) => (
                                        <option key={index} value={language}>
                                            {language}
                                        </option>
                                    ))}
                                </select>
                                {/* Dropdown Icon */}
                                <BiChevronDown className="absolute inset-y-[0.6rem] left-40 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

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
                    </div>
                    
                    <div className='copy-right mt-[58px]'>
                        <h5 className='text-mainColorNeutral text-xs'>Copyright 2024 © Coinbank</h5>
                    </div>
                </div>

                {/* Footer Navlinks */}
                <FooterLinks title="Company" items={companyItems} />
                <FooterLinks title="Features" items={featureItems} />
                <FooterLinks title="Developers" items={developersItems} />
                <FooterLinks title="Resources" items={resourcesItems} />
            </div>
        </footer>
    );
}

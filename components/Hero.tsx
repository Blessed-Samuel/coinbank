'use client';

import React, { useState } from "react";
import InputField from "@/components/Input";
import Image from "next/image";

interface HeroProps {
    head: string
    title?: string
    body?: string
    heroImg?: string
    type?: 'email' | 'text' | 'password'
}

const Hero: React.FC<HeroProps> = ({ head, title, body, heroImg, type = 'email' }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    return (
        <>
            <div className="flex item-center md:flex-row flex-col md:gap-28 gap-16">
                <p className="hidden">{input}</p>
                <div className="flex flex-col item-center space-y-12">
                    <div className="space-y-6 md:text-left text-center">
                        <h6 className="text-mainColorPrimary tracking-widest font-light">{head}</h6>
                        <h1 className={`text-mainColorSecondary text-4xl md:text-5xl font-bold`} style={{ lineHeight: '125%' }}>{title}</h1>
                        <p className="text-mainColorNeutral font-light">{body}</p>
                    </div>

                    <InputField
                        className="placeholder:font-light"
                        type={type}
                        onChange={handleInputChange}
                        placeholder="Your Email Address..."
                    />
                </div>
                <Image
                    src={heroImg || '/default-image.png'}
                    alt={heroImg || 'Default Hero Image'}
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />

            </div>
        </>
    );
}

export default Hero;

'use client';

import React, { useState } from "react";
import InputField from "@/components/Input";

interface HeroProps {
    head: string
    title?: string
    body?: string
    heroImg?: string
}

const Hero: React.FC<HeroProps> = ({ head, title, body, heroImg }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    return (
        <>
            <div className="flex item-center md:flex-row flex-col md:gap-28 gap-16">
                <div className="flex flex-col item-center space-y-12">
                    <div className="space-y-6 md:text-left text-center">
                        <h6 className="text-mainColorPrimary tracking-widest font-light">{head}</h6>
                        <h1 className={`text-mainColorSecondary text-4xl md:text-5xl font-bold`} style={{ lineHeight: '125%' }}>{title}</h1>
                        <p className="text-mainColorNeutral font-light">{body}</p>
                    </div>

                    <InputField
                        className="placeholder:font-light"
                        type="email"
                        onChange={handleInputChange}
                        placeholder="Your Email Address..."
                    />
                </div>

                <img src={heroImg} alt={heroImg} className="w-auto h-auto" />
            </div>
        </>
    );
}

export default Hero;

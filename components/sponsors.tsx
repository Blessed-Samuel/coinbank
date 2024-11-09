import React from 'react';
import Image from 'next/image';

const SponsorMarquee = () => {
    return (
        <div className="overflow-hidden w-full">
            <div className="flex animate-marquee space-x-2">
                <Image
                    src="/sponsor1.svg"
                    alt="Sponsor 1"
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />
                <Image
                    src="/sponsor2.svg"
                    alt="Sponsor 2"
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />
                <Image
                    src="/sponsor3.svg"
                    alt="Sponsor 3"
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />
                <Image
                    src="/sponsor4.svg"
                    alt="Sponsor 4"
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />
                <Image
                    src="/sponsor2.svg"
                    alt="Sponsor 2"
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />
                <Image
                    src="/sponsor1.svg"
                    alt="Sponsor 1"
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />
            </div>
        </div>
    );
};

export default SponsorMarquee;

import React from "react";
import Image from "next/image";

type SponsorMarqueeProps = {
    direction?: "left" | "right";
};

const SponsorMarquee: React.FC<SponsorMarqueeProps> = ({ direction = "left" }) => {
    // Determine which animation to apply based on the direction prop
    const animationClass = direction === "left" ? "animate-marquee" : "animate-marqueeReverse";

    return (
        <div className="overflow-hidden w-full">
            <div className={`flex ${animationClass} space-x-2`}>
                <Image src="/sponsor1.svg" alt="Sponsor1" width={100} height={100} className="w-auto h-auto" />
                <Image src="/sponsor2.svg" alt="Sponsor2" width={100} height={100} className="w-auto h-auto" />
                <Image src="/sponsor3.svg" alt="Sponsor3" width={100} height={100} className="w-auto h-auto" />
                <Image src="/sponsor4.svg" alt="Sponsor4" width={100} height={100} className="w-auto h-auto" />
                <Image src="/sponsor2.svg" alt="Sponsor 2" width={100} height={100} className="w-auto h-auto" />
                <Image src="/sponsor1.svg" alt="Sponsor1" width={100} height={100} className="w-auto h-auto" />
            </div>
        </div>
    );
};

export default SponsorMarquee;

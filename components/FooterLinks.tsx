import React from 'react';
import Link from 'next/link';

type FooterSectionProps = {
    title: string;
    items: { name: string; path: string }[]; // Array of objects with 'name' and 'path'
};

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
    return (
        <div className='space-y-5'>
            <h3 className='text-mainColorSecondary text-md'>{title}</h3>
            <div className='text-mainColorNeutral text-xs space-y-4'>
                {items.map((item) => (
                    <Link
                        href={`/${item.path.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                        key={item.name}
                        className='block hover:text-mainColorPrimary hover:underline transition-colors duration-200'
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FooterSection;
